<template>
    <b-form @submit.prevent="EditEmployee">

        <b-row>
            <b-col cols="12">
                <b-form-group
                    :label="$t('users.image')"
                    label-for="vi-image"
                >
                    <b-input-group class="input-group-merge">
                        <b-img v-if="image" center rounded="circle"  class="d-inline-block mr-1 mb-1" height="90" width="90" :src="'/images/employee/image/'+image" alt="Image 1" />

                    </b-input-group>
                </b-form-group>
            </b-col>

            <b-col cols="12">
                <b-form-group
                    :label="$t('users.image')"
                    label-for="vi-image"
                >
                    <b-input-group class="input-group-merge">
                        <b-form-file
                            v-model="employee.image"
                            :placeholder="$t('users.imageDesc')"
                            drop-placeholder="Drop file here..."
                        />
                    </b-input-group>
                </b-form-group>
            </b-col>

            <!-- name -->
            <b-col cols="12">
                <b-form-group
                    :label="$t('users.name')"
                    label-for="vi-name"
                >
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text>
                            <feather-icon icon="UserIcon" />
                        </b-input-group-prepend>
                        <b-form-input
                            id="vi-name"
                            v-model="employee.name"
                            :placeholder="$t('users.name')"
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
            <!-- Email -->
            <b-col cols="12">
                <b-form-group
                    :label="$t('users.email')"
                    label-for="vi-email"
                >
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text>
                            <feather-icon icon="MailIcon" />
                        </b-input-group-prepend>
                        <b-form-input
                            id="vi-email"
                            v-model="employee.email"
                            type="email"
                            :placeholder="$t('users.email')"
                        />
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.email !== undefined"
                        class="text-danger"
                    >
                        {{ errors.email[0] }}
                    </label>
                </b-form-group>
            </b-col>

            <!-- phone -->
            <b-col cols="12">
                <b-form-group
                    :label="$t('users.phone')"
                    label-for="vi-phone"
                >
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text>
                            <feather-icon icon="SmartphoneIcon" />
                        </b-input-group-prepend>
                        <b-form-input
                            id="vi-phone"
                            v-model="employee.phone"
                            type="number"
                            :placeholder="$t('users.phone')"
                        /><br>
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.phone !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.phone[0]}}
                    </label>
                </b-form-group>
            </b-col>
            <!-- password -->
            <b-col cols="12">
                <b-form-group
                    :label="$t('users.password')"
                    label-for="vi-password"
                >
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text>
                            <feather-icon icon="KeyIcon" />
                        </b-input-group-prepend>
                        <b-form-input
                            id="vi-password"
                            v-model="employee.password"
                            type="password"
                            :placeholder="$t('users.password')"
                        /><br>
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.password !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.password[0]}}
                    </label>
                </b-form-group>
            </b-col>
            <!-- phone -->
            <b-col cols="12">
                <b-form-group
                    :label="$t('users.confirm_password')"
                    label-for="vi-phone"
                >
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text>
                            <feather-icon icon="KeyIcon" />
                        </b-input-group-prepend>
                        <b-form-input
                            id="vi-password_confirmation"
                            v-model="employee.password_confirmation"
                            type="password"
                            :placeholder="$t('users.confirm_password')"
                        /><br>
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.password_confirmation !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.password_confirmation[0]}}
                    </label>
                </b-form-group>
            </b-col>

            <!-- status -->
            <b-col cols="12">
                <b-form-group
                    label="الحالة"
                    label-for="vi-status"
                >
                    <b-input-group class="input-group-merge">
                        <v-select
                            v-model="employee.status"
                            placeholder="الحالة"
                            :options="status"
                            :reduce="sta => sta.value"
                            label="name"
                            dir="rtl"
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
            <!-- Roles -->
            <b-col cols="12">
                <b-form-group
                    label="الرتبه"
                    label-for="vi-status"
                >
                    <b-input-group class="input-group-merge">
                        <v-select
                            v-model="employee.role_id"
                            placeholder="الرتبة"
                            :options="roles"
                            :reduce="rol => rol.id"
                            dir="rtl"
                            label="name"
                        />
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.role_id !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.role_id[0]}}
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
                   تحديث
                </b-button>
               
            </b-col>
        </b-row>
    </b-form>
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
        BFormFile,
        BImg

    } from 'bootstrap-vue'
    import Ripple from 'vue-ripple-directive'
    import vSelect from 'vue-select'
    import axios from 'axios'

    export default {
        name: 'EditEmployee',
        components: {
            BRow,
            vSelect,
            BCol,
            BFormFile,
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
            BImg
        },
        directives: {
            Ripple,
        },
        data(){
            return{
                errors: {},
                assign_dropdown:false,
                status:[
                    {name:'نشط',value:1},
                    {name:'غير نشط',value:0},
                ],
                roles:[],
                assignable_list:[],
                image:'',
                employee:{
                    name:'',
                    phone:'',
                    email:'',
                    role_id:'',
                    image:null,
                    type:'',
                    status:'',
                    password_confirmation:'',
                    password:'',
                    assignable_id:''
                }
            };
        },
        watch:{
            'employee.type'(val){
                this.assignable(val)
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
            EditEmployee(){
                const formData = new FormData()
                for (const key in this.employee) {
                    if (this.employee[key]) {
                        formData.append(key, this.employee[key])
                    }
                }
                const instance = this
                let id=instance.$route.params.id
                formData.append('_method', 'PATCH')
                formData.append('id', id)
                axios.post(`/employees/${id}`, formData, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                        'content-type': 'multipart/form-data',
                    },
                }).then(response => {
                    this.errors = {}
                    this.makeToast('success', 'Employee Stored Succeffully')
                    setTimeout(() => {
                        instance.$router.push({ name: 'employees' })
                    }, 1000)
                })
                    .catch(error => {
                        this.makeToast('warning', error.response.data.message)
                        this.errors = error.response.data.errors
                    })
            },
            getRoles(){
                axios.get(`spinner/roles`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                }).then(response => {
                    this.roles = response.data.roles
                })
            },
            getEmployee(id){
                axios.get(`/employees/${id}/edit`)
                    .then(({data})=>{
                        if(data.status){
                            this.image=data.employee.image
                            Object.keys(this.employee).forEach((key)=>{
                                if(key!='image' && key!='password' && key!='password_confirmation'){
                                    this.employee[key]= data.employee[key]
                                }
                            })
                        }
                    })
            },
            assignable(val){
                if(val==2){
                    axios.get(`/spinner/organizations`).then(({data})=>{
                        this.assignable_list = data.organizations;
                        this.assign_dropdown=true;
                    })
                }if(val==3){
                    axios.get(`/spinner/branches`).then(({data})=>{
                        this.assignable_list = data.branches;
                        this.assign_dropdown=true;
                    })
                }if(val==4){
                    axios.get(`/spinner/departments`).then(({data})=>{
                        this.assignable_list = data.departments;
                        this.assign_dropdown=true;
                    })
                }if(val==5){
                    axios.get(`/spinner/services`).then(({data})=>{
                        this.assignable_list = data.services;
                        this.assign_dropdown=true;
                    })
                }else{
                    this.assign_dropdown=false;
                    this.assignable_list = [];
                    // this.employee.assignable_id=''
                }
            }

        },
        created() {
            this.getRoles()
            this.getEmployee(this.$route.params.id)
        }
    }
</script>

<style lang="scss" >
    @import 'https://unpkg.com/vue-select@3.0.0/dist/vue-select.css';
    .v-select{
        width: 100% !important;
    }
</style>
