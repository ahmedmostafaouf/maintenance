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
                        <b-input-group-prepend is-text>
                            <feather-icon icon="UserIcon" />
                        </b-input-group-prepend>
                        <b-form-input
                            id="vi-name"
                            v-model="device.name"
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
            <!-- device_num  -->
            <b-col cols="12">
                <b-form-group
                    :label="$t('global.device_num')"
                    label-for="vi-name"
                >
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text>
                            <feather-icon icon="UserIcon" />
                        </b-input-group-prepend>
                        <b-form-input
                            id="vi-device_num"
                            v-model="device.device_num"
                            :placeholder="$t('global.device_num')"
                        /><br>
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.device_num !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.device_num[0]}}
                    </label>
                </b-form-group>
            </b-col>
            <!-- serial_num  -->
            <b-col cols="12">
                <b-form-group
                    :label="$t('global.serial_num')"
                    label-for="vi-serial_num"
                >
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text>
                            <feather-icon icon="UserIcon" />
                        </b-input-group-prepend>
                        <b-form-input
                            id="vi-serial_num"
                            v-model="device.serial_num"
                            :placeholder="$t('global.serial_num')"
                        /><br>
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.serial_num !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.serial_num[0]}}
                    </label>
                </b-form-group>
            </b-col>
            <!--  category -->
            <b-col cols="12">
                <b-form-group
                    :label="$t('global.category')"
                    label-for="vi-category"
                >
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text>
                            <feather-icon icon="UserIcon" />
                        </b-input-group-prepend>
                        <b-form-input
                            id="vi-category"
                            v-model="device.category"
                            :placeholder="$t('global.category')"
                        /><br>
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.category !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.category[0]}}
                    </label>
                </b-form-group>
            </b-col>
            <!-- model -->
            <b-col cols="12">
                <b-form-group
                    :label="$t('global.model')"
                    label-for="vi-name"
                >
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text>
                            <feather-icon icon="UserIcon" />
                        </b-input-group-prepend>
                        <b-form-input
                            id="vi-model"
                            v-model="device.model"
                            :placeholder="$t('global.model')"
                        /><br>
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.model !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.model[0]}}
                    </label>
                </b-form-group>
            </b-col>
            <!-- manufacturer_comp -->
            <b-col cols="12">
                <b-form-group
                    :label="$t('global.manufacturer_comp')"
                    label-for="vi-manufacturer_comp"
                >
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text>
                            <feather-icon icon="UserIcon" />
                        </b-input-group-prepend>
                        <b-form-input
                            id="vi-manufacturer_comp"
                            v-model="device.manufacturer_comp"
                            :placeholder="$t('global.manufacturer_comp')"
                        /><br>
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.manufacturer_comp !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.manufacturer_comp[0]}}
                    </label>
                </b-form-group>
            </b-col>
            <!-- agent -->
            <b-col cols="12">
                <b-form-group
                    :label="$t('global.agent')"
                    label-for="vi-agent"
                >
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text>
                            <feather-icon icon="UserIcon" />
                        </b-input-group-prepend>
                        <b-form-input
                            id="vi-agent"
                            v-model="device.agent"
                            :placeholder="$t('global.agent')"
                        /><br>
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.agent !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.agent[0]}}
                    </label>
                </b-form-group>
            </b-col>
            <!-- Departments -->
            <b-col cols="12">
                <b-form-group
                    :label="$t('global.department')"
                    label-for="vi-branch"
                >
                    <b-input-group class="input-group-merge">
                        <v-select
                            v-model="device.department_id"
                            :placeholder="$t('global.department')+'...'"
                            :options="departments"
                            :reduce="dep => dep.id"
                            label="name"
                            dir="rtl"
                        />
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.service_id !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.department_id[0]}}
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
                            v-model="device.status"
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
                        v-model="device.desc"
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
                departments:[],
                errors: {},
                status:[
                    {name:'نشط',value:'1'},
                    {name:'غير نشط',value:'0'},
                ],
                device:{
                    name:'',
                    desc:'',
                    status:'',
                    department_id:"",
                    device_num:"",
                    serial_num:"",
                    category:"",
                    model:"",
                    manufacturer_comp:"",
                    agent:"",
                }
            };
        },
        created() {
            this.getDepartments();
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
                axios.post('/device', this.device, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                }).then(response => {
                    this.errors = {}
                    this.makeToast('success', response.data.message)
                    setTimeout(() => {
                        instance.$router.push({ name: 'device' })
                    }, 1000)
                })
                    .catch(error => {
                        this.makeToast('warning', error.response.data.message)
                        this.errors = error.response.data.errors
                    })
            },
            getDepartments(){
                axios.get('/spinner/all-departments').then(response => {
                    this.departments = response.data.departments
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
