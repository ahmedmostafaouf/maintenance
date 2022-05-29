<template>
    <b-form @submit.prevent="saveMaintenance">
        <b-row>

            <!-- first name -->
            <b-col cols="12">
                <b-form-group
                    :label="$t('global.name')"
                    label-for="vi-name"
                >
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text>
                            <feather-icon icon="UserIcon" />
                        </b-input-group-prepend>
                        <b-form-input
                            id="vi-name"
                            v-model="maintenance.name"
                            :placeholder="$t('global.name')"
                        /><br>
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.name !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.name[0]}}
                    </label>
                </b-form-group>
            </b-col>
            <!-- service -->
            <b-col cols="12">
                <b-form-group
                    :label="$t('global.service')"
                    label-for="vi-branch"
                >
                    <b-input-group class="input-group-merge">
                        <v-select
                            v-model="maintenance.service_id"
                            :placeholder="$t('global.service')"
                            :options="services"
                            :reduce="service => service.id"
                            label="name"
                            multiple
                            dir="rtl"
                        />
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.service_id !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.service_id[0]}}
                    </label>
                </b-form-group>
            </b-col>
            <!-- Type -->
            <b-col cols="12">
                <b-form-group
                    label="اختر النوع"
                    label-for="vi-branch"
                >
                    <b-input-group class="input-group-merge">
                        <b-form-radio-group
                            v-model="maintenance.type"
                            :options="options"
                            class="demo-inline-spacing"
                            name="radio-validation"
                        >
                        </b-form-radio-group>
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.type !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.type[0]}}
                    </label>
                </b-form-group>
            </b-col>
            <!-- status -->
            <b-col cols="12">
                <b-form-group
                    :label="$t('global.status')"
                    label-for="vi-status"
                >
                    <b-input-group class="input-group-merge">
                        <v-select
                            v-model="maintenance.status"
                            :placeholder="$t('global.status')+'...'"
                            :options="status"
                            dir="rtl"
                            :reduce="sta => sta.value"
                            label="name"
                        />
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.status !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.status[0]}}
                    </label>
                </b-form-group>
            </b-col>

            <!-- description -->
            <b-col cols="12">
                <label for="textarea-default">{{$t('global.desc')}}</label>
                <b-input-group class="input-group-merge">
                    <b-form-textarea
                        id="textarea-default"
                        v-model="maintenance.desc"
                        :placeholder="$t('global.desc')"
                        rows="3"
                    /><br>
                </b-input-group>
                <label
                    v-if="Object.keys(errors).length > 0 && errors.desc !== undefined"
                    class="text-danger"
                >
                    {{this.errors.desc[0]}}

                </label>
            </b-col>

            <!-- reset and submit -->
            <b-col
                cols="12"
                class="mt-2"
            >
                <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    type="add"
                    variant="primary"
                    class="mr-1"
                >
                    {{$t('global.save')}}
                </b-button>
                <b-button
                    v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                    type="reset"
                    variant="outline-secondary"
                >
                    {{$t('global.reset')}}
                </b-button>
            </b-col>
        </b-row>
    </b-form>
</template>

<script>
import {
    BRow, BCol,BFormRadioGroup, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BInputGroup, BInputGroupPrepend, BFormTextarea, BFormValidFeedback,
    BFormInvalidFeedback,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import axios from 'axios'

export default {
    name: 'AddMaintenance',
    components: {
        BRow,
        vSelect,
        BCol,
        BFormValidFeedback,
        BFormInvalidFeedback,
        BFormGroup,
        BFormInput,
        BFormTextarea,
        BFormCheckbox,
        BInputGroup,
        BInputGroupPrepend,
        BForm,
        BButton,
        BFormRadioGroup,
    },
    directives: {
        Ripple,
    },
    data(){
        return{
            services:[],
            errors: {},
            status:[
                {name:'نشط',value:1},
                {name:'غير نشط',value:0},
            ],
            options: [
                { text: 'مرتبط باجهزة', value: '1' },
                { text: ' مرتبط بسيارات', value: '2' },
                { text: 'لاشئ', value: '3' },
            ],
            maintenance:{
                name:'',
                desc:'',
                service_id:'',
                status:'',
                type:''
            }
        };
    },
    created() {
     this.getServices();
    },
    methods:{
        makeToast(variant = null, body) {
            this.$bvToast.toast(body, {
                title: `Variant ${variant || 'default'}`,
                variant,
                solid: true,
            })
        },
        saveMaintenance(){
            const instance = this
            axios.post('/maintenance', this.maintenance, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            }).then(response => {
                this.errors = {}
                this.makeToast('success', 'egood')
                setTimeout(() => {
                    instance.$router.push({ name: 'maintenance' })
                }, 1000)
            })
                .catch(error => {
                    this.makeToast('warning', error.response.data.message)
                    this.errors = error.response.data.errors
                })
        },

        getServices(){
            axios.get('/spinner/all-service').then(response => {
                this.services = response.data.service
            })
        },

    }
}
</script>

<style lang="scss" >
@import 'https://unpkg.com/vue-select@3.0.0/dist/vue-select.css';
.v-select{
    width: 100% !important;
}
</style>
