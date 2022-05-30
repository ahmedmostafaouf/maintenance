<template>
    <div>
        <b-form @submit.prevent="save">
            <b-row>
                <!-- Departments -->
                <b-col cols="6">
                    <b-form-group
                        :label="$t('global.required-department')"
                        label-for="vi-branch"
                    >
                        <b-input-group class="input-group-merge">
                            <v-select
                                v-model="data.department_id"
                                :placeholder="$t('global.department')+'...'"
                                :options="departments"
                                :reduce="dep => dep.id"
                                label="name"
                                dir="rtl"
                            />
                        </b-input-group>
                        <label
                            v-if="Object.keys(errors).length > 0 && errors.department_id !== undefined"
                            class="text-danger"
                        >
                            {{this.errors.department_id[0]}}
                        </label>
                    </b-form-group>
                </b-col>
                <!-- Company Name -->
                <b-col cols="6">
                    <b-form-group
                        :label="$t('global.company_name')"
                        label-for="vi-branch"
                    >
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text>
                                <feather-icon icon="AirplayIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                                id="vi-name"
                                v-model="data.company_name"
                                :placeholder="$i18n.t('global.company_name')"
                            /><br>
                        </b-input-group>
                        <label
                            v-if="Object.keys(errors).length > 0 && errors.company_name !== undefined"
                            class="text-danger"
                        >
                            {{this.errors.company_name[0]}}
                        </label>
                    </b-form-group>
                </b-col>
                <!-- responsible Person -->
                <b-col cols="6">
                    <b-form-group
                        :label="$t('global.responsible')"
                        label-for="vi-branch"
                    >
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text>
                                <feather-icon icon="UserIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                                id="vi-name"
                                v-model="data.responsible"
                                :placeholder="$i18n.t('global.responsible')"
                            /><br>
                        </b-input-group>
                        <label
                            v-if="Object.keys(errors).length > 0 && errors.responsible !== undefined"
                            class="text-danger"
                        >
                            {{this.errors.responsible[0]}}
                        </label>
                    </b-form-group>
                </b-col>
                <!-- working duration -->
                <b-col cols="6">
                    <b-form-group
                        :label="$t('global.working_duration')"
                        label-for="vi-branch"
                    >
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text>
                                <feather-icon icon="AirplayIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                                id="vi-name"
                                v-model="data.working_duration"
                                :placeholder="$i18n.t('global.working_duration')"
                            /><br>
                        </b-input-group>
                        <label
                            v-if="Object.keys(errors).length > 0 && errors.working_duration !== undefined"
                            class="text-danger"
                        >
                            {{this.errors.working_duration[0]}}
                        </label>
                    </b-form-group>
                </b-col>
                <!-- Month -->
                <b-col cols="6">
                    <b-form-group
                        :label="$t('global.month')"
                        label-for="vi-branch"
                    >
                        <b-input-group class="input-group-merge">
                            <v-select
                                v-model="data.month"
                                :placeholder="$t('global.month')+'...'"
                                :options="months"
                                :reduce="month => month"
                                label="name"
                                dir="rtl"
                            />
                        </b-input-group>
                        <label
                            v-if="Object.keys(errors).length > 0 && errors.month !== undefined"
                            class="text-danger"
                        >
                            {{this.errors.month[0]}}
                        </label>
                    </b-form-group>
                </b-col>
                <!-- Start Date -->
                <b-col cols="6">
                    <b-form-group
                        label="تاريخ بدء العمل"
                        label-for="vi-color"
                    >
                        <b-input-group class="input-group-merge">
                            <b-form-datepicker
                                id="start_date"
                                v-model="data.start_date"
                                class="mb-1"
                            />
                        </b-input-group>
                        <label
                            v-if="Object.keys(errors).length > 0 && errors.start_date !== undefined"
                            class="text-danger"
                        >
                            {{this.errors.start_date[0]}}
                        </label>
                    </b-form-group>
                </b-col>
                <!-- End Date -->
                <b-col cols="6">
                    <b-form-group
                        label="تاريخ انهاء العمل"
                        label-for="vi-color"
                    >
                        <b-input-group class="input-group-merge">
                            <b-form-datepicker
                                id="end_date"
                                v-model="data.end_date"
                                class="mb-1"
                            />
                        </b-input-group>
                        <label
                            v-if="Object.keys(errors).length > 0 && errors.end_date !== undefined"
                            class="text-danger"
                        >
                            {{this.errors.end_date[0]}}
                        </label>
                    </b-form-group>
                </b-col>
                <!-- Start Time-->
                <b-col cols="3">
                    <b-form-group
                        label="وقت بدء العمل"
                        label-for="vi-color"
                    >
                        <b-form-timepicker
                            class="mb-1"
                            id="start_time"
                            v-model='data.start_time'
                            locale='en' />
                        <label
                            v-if="Object.keys(errors).length > 0 && errors.start_time !== undefined"
                            class="text-danger"
                        >
                            {{this.errors.start_time[0]}}
                        </label>
                    </b-form-group>
                </b-col>
                <!-- End Time-->
                <b-col cols="3">
                    <b-form-group
                        label="وقت انتهاء العمل"
                        label-for="vi-color"
                    >
                        <b-form-timepicker
                            class="mb-1"
                            id="end_time"
                            v-model='data.end_time'
                            locale='en' />
                        <label
                            v-if="Object.keys(errors).length > 0 && errors.end_time !== undefined"
                            class="text-danger"
                        >
                            {{this.errors.end_time[0]}}
                        </label>
                    </b-form-group>
                </b-col>
                <!-- work Reason -->
                <b-col cols="12">
                    <label for="work_reason">{{$t('global.work_reason')}}</label>
                    <b-input-group class="input-group-merge">
                        <b-form-textarea
                            id="work_reason"
                            v-model="data.work_reason"
                            :placeholder="$t('global.work_reason')"
                            rows="3"
                            class="mb-1"
                        /><br>
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.work_reason !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.work_reason[0]}}

                    </label>
                </b-col>
                <!-- visitor name -->
                <b-col cols="6">
                    <b-form-group
                        :label="$t('global.visitor_name')"
                        label-for="vi-branch"
                    >
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text>
                                <feather-icon icon="AirplayIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                                id="vi-name"
                                v-model="data.visitor_name"
                                :placeholder="$i18n.t('global.visitor_name')"
                            /><br>
                        </b-input-group>
                        <label
                            v-if="Object.keys(errors).length > 0 && errors.visitor_name !== undefined"
                            class="text-danger"
                        >
                            {{this.errors.visitor_name[0]}}
                        </label>
                    </b-form-group>
                </b-col>
                <!-- national_id -->
                <b-col cols="6">
                    <b-form-group
                        :label="$t('global.national_id')"
                        label-for="vi-branch"
                    >
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text>
                                <feather-icon icon="AirplayIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                                id="vi-name"
                                v-model="data.national_id"
                                :type="'number'"
                                :placeholder="$i18n.t('global.national_id')"
                            /><br>
                        </b-input-group>
                        <label
                            v-if="Object.keys(errors).length > 0 && errors.national_id !== undefined"
                            class="text-danger"
                        >
                            {{this.errors.national_id[0]}}
                        </label>
                    </b-form-group>
                </b-col>
                <!-- residence-->
                <b-col cols="6">
                    <b-form-group
                        :label="$t('global.residence')"
                        label-for="vi-branch"
                    >
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text>
                                <feather-icon icon="AirplayIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                                id="vi-name"
                                v-model="data.residence"
                                :placeholder="$i18n.t('global.residence')"
                            /><br>
                        </b-input-group>
                        <label
                            v-if="Object.keys(errors).length > 0 && errors.residence !== undefined"
                            class="text-danger"
                        >
                            {{this.errors.residence[0]}}
                        </label>
                    </b-form-group>
                </b-col>
                <!-- Nationality -->
                <b-col cols="6">
                    <b-form-group
                        :label="$t('global.nationality')"
                        label-for="vi-branch"
                    >
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text>
                                <feather-icon icon="AirplayIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                                id="vi-name"
                                v-model="data.nationality"
                                :placeholder="$i18n.t('global.nationality')"
                            /><br>
                        </b-input-group>
                        <label
                            v-if="Object.keys(errors).length > 0 && errors.nationality !== undefined"
                            class="text-danger"
                        >
                            {{this.errors.nationality[0]}}
                        </label>
                    </b-form-group>
                </b-col>
                <!-- involve_chemicals -->
                <b-col cols="4">
                    <b-form-group
                        :label="$i18n.t('global.involve_chemicals')"
                        label-for="vi-status"
                    >
                        <b-input-group class="input-group-merge">
                            <v-select
                                v-model="data.involve_chemicals"
                                :placeholder="$i18n.t('global.choose')"
                                :options="status"
                                :reduce="involve_chemicals => involve_chemicals.value"
                                dir="rtl"
                                label="name"
                            />
                        </b-input-group>
                        <label
                            v-if="Object.keys(errors).length > 0 && errors.involve_chemicals !== undefined"
                            class="text-danger"
                        >
                            {{this.errors.status[0]}}
                        </label>
                    </b-form-group>
                </b-col>
                <!-- work_noisy -->
                <b-col cols="4">
                    <b-form-group
                        :label="$i18n.t('global.work_noisy')"
                        label-for="vi-status"
                    >
                        <b-input-group class="input-group-merge">
                            <v-select
                                v-model="data.work_noisy"
                                :placeholder="$i18n.t('global.choose')"
                                :options="status"
                                :reduce="work_noisy => work_noisy.value"
                                dir="rtl"
                                label="name"
                            />
                        </b-input-group>
                        <label
                            v-if="Object.keys(errors).length > 0 && errors.work_noisy !== undefined"
                            class="text-danger"
                        >
                            {{this.errors.work_noisy[0]}}
                        </label>
                    </b-form-group>
                </b-col>
                <!-- include_elevations -->
                <b-col cols="4">
                    <b-form-group
                        :label="$i18n.t('global.include_elevations')"
                        label-for="vi-status"
                    >
                        <b-input-group class="input-group-merge">
                            <v-select
                                v-model="data.include_elevations"
                                :placeholder="$i18n.t('global.choose')"
                                :options="status"
                                :reduce="include_elevations => include_elevations.value"
                                dir="rtl"
                                label="name"
                            />
                        </b-input-group>
                        <label
                            v-if="Object.keys(errors).length > 0 && errors.include_elevations !== undefined"
                            class="text-danger"
                        >
                            {{this.errors.include_elevations[0]}}
                        </label>
                    </b-form-group>
                </b-col>
                <!-- confined_spaces -->
                <b-col cols="4">
                    <b-form-group
                        :label="$i18n.t('global.confined_spaces')"
                        label-for="vi-status"
                    >
                        <b-input-group class="input-group-merge">
                            <v-select
                                v-model="data.confined_spaces"
                                :placeholder="$i18n.t('global.choose')"
                                :options="status"
                                :reduce="confined_spaces => confined_spaces.value"
                                dir="rtl"
                                label="name"
                            />
                        </b-input-group>
                        <label
                            v-if="Object.keys(errors).length > 0 && errors.confined_spaces !== undefined"
                            class="text-danger"
                        >
                            {{this.errors.confined_spaces[0]}}
                        </label>
                    </b-form-group>
                </b-col>
                <!-- services_separation -->
                <b-col cols="4">
                    <b-form-group
                        :label="$i18n.t('global.services_separation')"
                        label-for="vi-status"
                    >
                        <b-input-group class="input-group-merge">
                            <v-select
                                v-model="data.services_separation"
                                :placeholder="$i18n.t('global.choose')"
                                :options="status"
                                :reduce="services_separation => services_separation.value"
                                dir="rtl"
                                label="name"
                            />
                        </b-input-group>
                        <label
                            v-if="Object.keys(errors).length > 0 && errors.services_separation !== undefined"
                            class="text-danger"
                        >
                            {{this.errors.services_separation[0]}}
                        </label>
                    </b-form-group>
                </b-col>
                <!-- flammable_materials -->
                <b-col cols="4">
                    <b-form-group
                        :label="$i18n.t('global.flammable_materials')"
                        label-for="vi-status"
                    >
                        <b-input-group class="input-group-merge">
                            <v-select
                                v-model="data.flammable_materials"
                                :placeholder="$i18n.t('global.choose')"
                                :options="status"
                                :reduce="flammable_materials => flammable_materials.value"
                                dir="rtl"
                                label="name"
                            />
                        </b-input-group>
                        <label
                            v-if="Object.keys(errors).length > 0 && errors.flammable_materials !== undefined"
                            class="text-danger"
                        >
                            {{this.errors.flammable_materials[0]}}
                        </label>
                    </b-form-group>
                </b-col>
                <!-- entry_gate -->
                <b-col cols="6">
                    <b-form-group
                        :label="$t('global.entry_gate')"
                        label-for="vi-branch"
                    >
                        <b-input-group class="input-group-merge">
                            <v-select
                                v-model="data.entry_gate"
                                :placeholder="$t('global.entry_gate')+'...'"
                                :options="entry_gates"
                                :reduce="gate => gate"
                                label="entry_gate"
                                dir="rtl"
                            />
                        </b-input-group>
                        <label
                            v-if="Object.keys(errors).length > 0 && errors.entry_gate !== undefined"
                            class="text-danger"
                        >
                            {{this.errors.entry_gate[0]}}
                        </label>
                    </b-form-group>
                </b-col>
                <!-- guard name-->
                <b-col cols="6">
                    <b-form-group
                        :label="$t('global.guard_name')"
                        label-for="vi-branch"
                    >
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text>
                                <feather-icon icon="AirplayIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                                id="vi-name"
                                v-model="data.guard_name"
                                :placeholder="$i18n.t('global.guard_name')"
                            /><br>
                        </b-input-group>
                        <label
                            v-if="Object.keys(errors).length > 0 && errors.guard_name !== undefined"
                            class="text-danger"
                        >
                            {{this.errors.guard_name[0]}}
                        </label>
                    </b-form-group>
                </b-col>
                <!-- business responsible-->
                <b-col cols="6">
                    <b-form-group
                        :label="$t('global.business_responsible')"
                        label-for="vi-branch"
                    >
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text>
                                <feather-icon icon="AirplayIcon" />
                            </b-input-group-prepend>
                            <b-form-input
                                id="vi-name"
                                v-model="data.business_responsible"
                                :placeholder="$i18n.t('global.business_responsible')"
                            /><br>
                        </b-input-group>
                        <label
                            v-if="Object.keys(errors).length > 0 && errors.business_responsible !== undefined"
                            class="text-danger"
                        >
                            {{this.errors.business_responsible[0]}}
                        </label>
                    </b-form-group>
                </b-col>
                <!-- entry_time -->
                <b-col cols="6">
                    <b-form-group
                        label="وقت الدخول"
                        label-for="vi-color"
                    >
                        <b-form-timepicker
                            class="mb-1"
                            id="entry_time"
                            v-model='data.entry_time'
                            locale='en' />
                        <label
                            v-if="Object.keys(errors).length > 0 && errors.entry_time !== undefined"
                            class="text-danger"
                        >
                            {{this.errors.entry_time[0]}}
                        </label>
                    </b-form-group>
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
                        {{$i18n.t('users.submit')}}
                    </b-button>
                    <b-button
                        v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                        type="reset"
                        variant="outline-secondary"
                    >
                        {{$i18n.t('users.reset')}}
                    </b-button>
                </b-col>
            </b-row>
        </b-form>
    </div>
</template>
<script>
import {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BForm,
    BButton,
    BInputGroup,
    BInputGroupPrepend,
    BFormTextarea,
    BFormValidFeedback,
    BFormInvalidFeedback,
    BFormDatepicker,


} from 'bootstrap-vue'
import { BFormTimepicker } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import axios from 'axios'


export default {
    name: 'SecurityForm',
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
        BFormDatepicker,
        BFormTimepicker,


    },
    directives: {
        Ripple,
    },
    props:['submitType'],
    data(){
        return{
            status:[
                {name:'نعم',value:'1'},
                {name:'لا',value:'0'},
            ],
            departments:[],
            months:["January","February","March","April","May","June","July", "August","September","October","November","December"],
            entry_gates:["مدخل الطوارئ", "مدخل العيادات","مدخل المغسله","مدخل الطوارئ", "مدخل رئيسي"],
            errors: {},
            data:{
                department_id:'',
                company_name:'',
                work_reason:'',
                responsible:'',
                working_duration:'',
                start_date:'',
                start_time:'',
                end_date:'',
                end_time:'',
                visitor_name:'',
                national_id:'',
                residence:'',
                nationality:'',
                involve_chemicals:'',
                work_noisy:'',
                include_elevations:'',
                confined_spaces:'',
                services_separation:'',
                flammable_materials:'',
                entry_gate:'',
                guard_name:'',
                entry_time:'',
                business_responsible:'',
            }
        };
    },
    created() {
        this.getDepartments();
        if(this.submitType == 'edit'){
            this.getData()
        }
    },
    methods:{
        makeToast(variant = null, body) {
            this.$bvToast.toast(body, {
                title: `Variant ${variant || 'default'}`,
                variant,
                solid: true,
            })
        },
        getDepartments(){
            axios.get('/spinner/all-departments').then(response => {
                this.departments = response.data.departments
            })
        },
        save(){
            const instance = this
            let authHeader = { Authorization: `Bearer ${localStorage.getItem('accessToken')}`,};
            if (this.submitType == 'create'){
                axios.post('/security-announcement', this.data, {headers: authHeader,})
                    .then(response => {
                        this.errors = {}
                        this.makeToast('success', response.data.message)
                        setTimeout(() => {
                            instance.$router.push({ name: 'securities' })
                        }, 1000)
                    })
                    .catch(error => {
                        this.makeToast('warning', error.response.data.message)
                        this.errors = error.response.data.errors
                    })
            }
            else if (this.submitType == 'edit'){
                let id = this.$route.params.id
                axios.put(`/security-announcement/${id}`, this.data, {headers: authHeader,})
                    .then(response => {
                        this.errors = {}
                        this.makeToast('success', response.data.message)
                        setTimeout(() => {
                            instance.$router.push({ name: 'securities' })
                        }, 1000)
                    })
                    .catch(error => {
                        this.makeToast('warning', error.response.data.message)
                        this.errors = error.response.data.errors
                    })
            }
        },
        getData(){
            let id = this.$route.params.id
            console.log(id)
            axios.get(`/security-announcement/${id}/edit`).then(response => {
                this.data = response.data.data
            })
        }
    }
}
</script>
<style scoped>
.container {
    max-width: 600px;
}
</style>
