<template>
    <div>
        <b-form @submit.prevent="save">
            <b-row>
                <!-- Maintenance Types-->
                <b-col cols="4">
                    <b-form-group
                        :label="$i18n.t('global.maintenance')"
                        label-for="vi-status"
                    >
                        <b-input-group class="input-group-merge">
                            <v-select
                                v-model="data.maintenance_id"
                                :placeholder="$i18n.t('global.choose')"
                                :options="maintenanceTypes"
                                :reduce="type => type.id"
                                v-on:input="getServicesInMaintenanceType"
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
    name: 'MaintenanceOrderForm',
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
            maintenanceTypes:[],
            errors: {},
            data:{
                maintenance_id:'',
                service_id:'',
                department_id:'',
                location:'',
                desc:'',
                image:''
            }
        };
    },
    created() {
        this.getDepartments();
        this.getMaintenanceOrders()
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
        getMaintenanceOrders(){
            axios.get('/spinner/get-maintenance-types').then(response => {
                this.maintenanceTypes = response.data.maintenanceTypes
            })
        },
        getServicesInMaintenanceType(){
            console.log(this.data.maintenance_id    )
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
