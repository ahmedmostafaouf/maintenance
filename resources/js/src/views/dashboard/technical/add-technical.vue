<template>
    <b-form @submit.prevent="saveService">
        <b-row>

            <!-- first name -->
            <b-col cols="12">
                <b-form-group
                    :label="$t('global.name')"
                    label-for="vi-name"
                >
                    <b-input-group class="input-group-merge">
                        <b-form-input
                            id="vi-name"
                            v-model="technical.name"
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

            <!-- first name -->
            <b-col cols="12">
                <b-form-group
                    label="المهنة"
                    label-for="vi-name"
                >
                    <b-input-group class="input-group-merge">
                        <b-form-input
                            id="vi-jop"
                            v-model="technical.jop"
                            placeholder="المهنة"
                        /><br>
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.jop !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.jop[0]}}
                    </label>
                </b-form-group>
            </b-col>

            <!-- users -->
            <b-col cols="12">
                <b-form-group
                    label="المدير المسؤول"
                    label-for="vi-branch"
                >
                    <b-input-group class="input-group-merge">
                        <v-select
                            v-model="technical.user_id"
                            placeholder="المدير المسؤول"
                            :options="users"
                            :reduce="dep => dep.id"
                            label="name"
                            dir="rtl"
                        />
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.user_id !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.user_id[0]}}
                    </label>
                </b-form-group>
            </b-col>

            <!-- status -->
            <b-col cols="12">
                <b-form-group
                    label=" الحالة"
                    label-for="vi-status"
                >
                    <b-input-group class="input-group-merge">
                        <v-select
                            v-model="technical.status"
                            placeholder="الحالة"
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
        BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BInputGroup, BInputGroupPrepend, BFormTextarea, BFormValidFeedback,
        BFormInvalidFeedback,
    } from 'bootstrap-vue'
    import Ripple from 'vue-ripple-directive'
    import vSelect from 'vue-select'
    import axios from 'axios'

    export default {
        name: 'AddDevice',
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
        },
        directives: {
            Ripple,
        },
        data(){
            return{
                users:[],
                errors: {},
                status:[
                    {name:'نشط',value:'1'},
                    {name:'غير نشط',value:'0'},
                ],
                technical:{
                    name:'',
                    jop:'',
                    status:'',
                    user_id:"",
                }
            };
        },
        created() {
            this.getusers();
        },
        methods:{
            makeToast(variant = null, body) {
                this.$bvToast.toast(body, {
                    title: `Variant ${variant || 'default'}`,
                    variant,
                    solid: true,
                })
            },
            saveService(){
                const instance = this
                axios.post('/technical', this.technical, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                }).then(response => {
                    this.errors = {}
                    this.makeToast('success', response.data.message)
                    setTimeout(() => {
                        instance.$router.push({ name: 'technical' })
                    }, 1000)
                })
                    .catch(error => {
                        this.makeToast('warning', error.response.data.message)
                        this.errors = error.response.data.errors
                    })
            },
            getusers(){
                axios.get('/spinner/get-users').then(response => {
                    this.users = response.data.users
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
