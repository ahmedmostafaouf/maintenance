<template>
    <b-form @submit.prevent="editMaintenance">
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
            <!-- Branch -->
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
            <!-- status -->
            <b-col cols="12">
                <b-form-group
                    :label="$t('global.status')"
                    label-for="vi-status"
                >
                    <b-input-group class="input-group-merge">
                        <v-select
                            v-model="maintenance.status"
                            :placeholder="$t('global.service')+'...'"
                            :options="status"
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
        BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BInputGroup, BInputGroupPrepend, BFormTextarea, BFormValidFeedback,
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
                maintenance:{
                    name:'',
                    id:'',
                    desc:'',
                    service_id:'',
                    status:''
                }
            };
        },
        created() {
              this.getServices();
              this.getMaintenance(this.$route.params.id);
        },
        methods:{
            makeToast(variant = null, body) {
                this.$bvToast.toast(body, {
                    title: `Variant ${variant || 'default'}`,
                    variant,
                    solid: true,
                })
            },
            getMaintenance(id){
                axios.get(`maintenance/${id}/edit`,{
                    headers:{
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    }
                }).then(response=>{
                    if(response.status){
                        this.maintenance.id=response.data.maintenance.id
                        this.maintenance.name=response.data.maintenance.name
                        this.maintenance.desc=response.data.maintenance.desc
                        this.maintenance.service_id=response.data.maintenance.service_id
                        this.maintenance.status=response.data.maintenance.status
                    }

                });
            },
            editMaintenance(){
                const instance = this
                let id=this.$route.params.id
                axios.put(`/maintenance/${id}`, this.maintenance, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                }).then(response => {
                    this.errors = {}
                    this.makeToast('success', response.data.message)
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
