<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">

<!--      &lt;!&ndash; Brand logo&ndash;&gt;-->
<!--      <b-link class="brand-logo">-->
<!--        &lt;!&ndash; <vuexy-logo /> &ndash;&gt;-->

<!--        <b-img-->
<!--        :src="logoAppImg"-->
<!--        style="width:30px;height:30px;"-->
<!--        />-->
<!--        <h2 class="brand-text text-primary ml-1">-->
<!--          Bot-->
<!--        </h2>-->
<!--      </b-link>-->
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col
        lg="8"
        class="d-none d-lg-flex align-items-center p-5"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
            fluid
            :src="imgUrl"
            alt="Login V2"
          />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
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
            class="mb-1 font-weight-bold"
            title-tag="h2"
          >
           مرحبا بك في مستشفى المخواة العام ! 👋
          </b-card-title>
         
          <b-alert
            variant="primary"
            show
          />

          <!-- form -->
        
            <b-form
              class="auth-login-form mt-2"
              @submit.prevent="login"
            >
              <b-form-group
                label="الاميل او الاسم"
                label-for="login-email"
              >
               
                  <b-form-input
                    id="login-email"
                    v-model="userEmail"
                    name="login-email"
                    placeholder="john@example.com"
                  />
                  <small v-if="Object.keys(errors).length > 0 && errors.email !== undefined" class="text-danger">{{this.errors.email[0] }}</small>
              
              </b-form-group>
              <!-- forgot password -->
              <b-form-group>

              
                  <b-input-group
                    class="input-group-merge"
                  >
                    <b-form-input
                      id="login-password"
                      v-model="password"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      name="login-password"
                      placeholder="كلمة المرور"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        class="cursor-pointer"
                        :icon="passwordToggleIcon"
                        @click="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  
                  <small v-if="Object.keys(errors).length > 0 && errors.passowrd !== undefined" class="text-danger">{{this.errors.password[0] }}</small>
                
              </b-form-group>

              <!-- checkbox -->
              <b-form-group>
              
                  <div class="d-flex justify-content-between">
                      <b-link :to="{name:'auth-forgot-password'}">
                          <small>هل نسيت كلمة المرور؟</small>
                      </b-link>
                  </div>
              </b-form-group>

              <!-- submit buttons -->
              <b-button
                type="submit"
                variant="primary"
                block
                :disabled="invalid"
              >
               سجل الان
              </b-button>
            </b-form>
         
        </b-col>
      </b-col>
    <!-- /Login-->
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import {
  BRow,
  BCol,
  BLink,
  BFormGroup,
  BFormInput,
  BInputGroupAppend,
  BInputGroup,
  BFormCheckbox,
  BCardText,
  BCardTitle,
  BImg,
  BForm,
  BButton,
  BAlert,
  VBTooltip,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import useSanctum from '@/auth/sanctum/useSanctum'
import store from '@/store/index'
import { getHomeRouteForLoggedInUser } from '@/auth/utils'

export default {
  directives: {
    'b-tooltip': VBTooltip,
  },
  components: {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BFormCheckbox,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    BAlert,
    VuexyLogo,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
        errors:{},
      status: '',
      password: '',
      userEmail: '',
      sideImg: require('@/assets/images/pages/login-v2.svg'),
      // validation rules
      required,
      email,
      logoAppImg:require('@/assets/images/logo/bot.png')
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        this.sideImg = require('@/assets/images/pages/login-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  methods: {
    login() {
     
          useSanctum.login({
            email: this.userEmail,
            password: this.password,
          })
            .then(response => {
              const { userData } = response.data.data
              useSanctum.setToken(response.data.data.accessToken)
              useSanctum.setRefreshToken(response.data.data.refreshToken)
              localStorage.setItem('userData', JSON.stringify(userData))
              this.$ability.update(userData.ability)
                // ? This is just for demo purpose. Don't think CASL is role based in this case, we used role in if condition just for ease
              this.$router.go(getHomeRouteForLoggedInUser(userData.role)).then(() => {
                this.$toast({
                  component: ToastificationContent,
                  position: 'top-right',
                  props: {
                    title: ` مرحبا  ${userData.name || userData.email}`,
                    icon: 'CoffeeIcon',
                    variant: 'success',
                    text: `انت سجلت الدخول بنجاح  ك_ ${userData.group}. الان يمكن ان تبدأ التصفح!`,
                  },
                })
              })
            })
            .catch(error => {
              this.errors=error.response.data.errors
            })
        
     
    },
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/pages/page-auth.scss';
</style>
