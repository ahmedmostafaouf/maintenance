<template>
    <div class="auth-wrapper auth-v2">
        <b-row class="auth-inner m-0">

<!--            &lt;!&ndash; Brand logo&ndash;&gt;-->
<!--            <b-link class="brand-logo">-->
<!--                <vuexy-logo />-->

<!--                <h2 class="brand-text text-primary ml-1">-->
<!--                    Vuexy-->
<!--                </h2>-->
<!--            </b-link>-->
<!--            &lt;!&ndash; /Brand logo&ndash;&gt;-->

            <!-- Left Text-->
            <b-col
                lg="8"
                class="d-none d-lg-flex align-items-center p-5"
            >
                <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
                    <b-img
                        fluid
                        :src="imgUrl"
                        alt="Forgot password V2"
                    />
                </div>
            </b-col>
            <!-- /Left Text-->

            <!-- Forgot password-->
            <b-col
                lg="4"
                class="d-flex align-items-center auth-bg px-2 p-lg-5"
            >
                <b-col
                    sm="8"
                    md="6"
                    lg="12"
                    class="px-xl-2 mx-auto"
                >
                    <b-card-title
                        title-tag="h2"
                        class="font-weight-bold mb-1"
                    >
                        {{$t('forget.forget_password')}} ؟ 🔒
                    </b-card-title>
                    <b-card-text class="mb-2">
                        {{$t('forget.forget_desc')}}
                    </b-card-text>

                    <!-- form -->
                    <validation-observer ref="simpleRules" v-if="!showtoken">
                        <b-form
                            class="auth-forgot-password-form mt-2"
                            @submit.prevent="validationForm"
                        >
                            <b-form-group
                                :label="$t('forget.email')"
                                label-for="forgot-password-email"
                            >
                                <validation-provider
                                #default="{ errors }"
                                :name="email"
                                rules="required|email"
                            >
                                <b-form-input
                                    id="forgot-password-email"
                                    v-model="user.userEmail"
                                    :state="errors.length > 0 ? false:null"
                                    name="forgot-password-email"
                                    placeholder="john@example.com"
                                />
                                <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                            </b-form-group>

                            <b-button
                                type="submit"
                                variant="primary"
                                block
                            >
                                {{$t('forget.send_reset_link')}}
                            </b-button>
                        </b-form>
                    </validation-observer>

<!--                    rest token -->
                    <validation-observer ref="simpleRules" v-else>
                        <b-form
                            class="auth-forgot-password-form mt-2"
                            @submit.prevent="validationFormToken"
                        >
                            <b-form-group
                                :label="$t('forget.token')"
                                label-for="forgot-password-email"
                            >
                                <validation-provider
                                    #default="{ errors }"
                                    name="token"
                                    rules="required"
                                >
                                    <b-form-input
                                        id="forgot-password-token"
                                        v-model="user.token"
                                        name="forgot-password-token"
                                        placeholder="12548"
                                    />
                                </validation-provider>
                            </b-form-group>


                            <b-button
                                      type="submit"
                                      variant="primary"
                                      block
                            >
                                {{$t('forget.send')}}
                            </b-button>
                        </b-form>
                    </validation-observer>

                    <p class="text-center mt-2">
                        <b-link :to="{name:'auth-login'}">
                            <feather-icon icon="ChevronLeftIcon" /> {{$t('forget.back')}}
                        </b-link>
                    </p>
                </b-col>
            </b-col>
            <!-- /Forgot password-->
        </b-row>
    </div>
</template>

<script>
    /* eslint-disable global-require */
    import { ValidationProvider, ValidationObserver } from 'vee-validate'
    import VuexyLogo from '@core/layouts/components/Logo.vue'
    import { BRow, BCol, BLink, BCardTitle, BCardText, BImg, BForm, BFormGroup, BFormInput, BButton } from 'bootstrap-vue'
    import { required, email } from '@validations'
    import store from '@/store/index'
    import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
    import axios from "axios";

    export default {
        components: {
            VuexyLogo,
            BRow,
            BCol,
            BLink,
            BImg,
            BForm,
            BButton,
            BFormGroup,
            BFormInput,
            BCardTitle,
            BCardText,
            ValidationProvider,
            ValidationObserver,
        },
        data() {
            return {
                user:{
                    userEmail: '',
                    token:''
                },

                sideImg: require('@/assets/images/pages/forgot-password-v2.svg'),
                // validation
                required,
                email,
                showtoken:false,

            }
        },
        computed: {
            imgUrl() {
                if (store.state.appConfig.layout.skin === 'dark') {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.sideImg = require('@/assets/images/pages/forgot-password-v2-dark.svg')
                    return this.sideImg
                }
                return this.sideImg
            },
        },
        methods: {
            makeToast(variant = null, body) {
                this.$bvToast.toast(body, {
                    title: `Variant ${variant || 'default'}`,
                    variant,
                    solid: true,
                })
            },
            validationForm() {
                this.$refs.simpleRules.validate().then(success => {
                    if (success) {

                        axios.post('/rest_password',this.user).then(response => {
                            if(response.status){
                               this.showtoken=true
                                this.$toast({
                                    component: ToastificationContent,
                                    props: {
                                        title: 'تم ارسال كود علي الاميل لأعادة تعيين كلمةالمرور',
                                        icon: 'EditIcon',
                                        variant: 'success',
                                    },
                                })
                            }
                             })
                            .catch(error => {
                                this.makeToast('warning', error.response.data.message)
                            })

                    }
                })
            },
            validationFormToken() {
                this.$refs.simpleRules.validate().then(success => {
                    if (success) {

                        axios.post('/check-token', this.user).then(response => {
                            if (response.status) {
                                let instance=this
                                this.showtoken = false
                                console.log(response);
                                localStorage.setItem('userForgetEmail', JSON.stringify(response.data.data.email));
                                this.$toast({
                                    component: ToastificationContent,
                                    props: {
                                        title: 'تم تاكيد صلاحية الكود',
                                        icon: 'EditIcon',
                                        variant: 'success',
                                    },
                                });
                                setTimeout(() => {
                                    instance.$router.push({ name: 'auth-reset-password' })
                                }, 1000)
                            }
                        })
                            .catch(error => {
                                this.makeToast('warning', error.response.data.message)
                            })

                    }
                })
            },
        },
    }
</script>

<style lang="scss">
    @import '~@core/scss/vue/pages/page-auth.scss';
</style>
