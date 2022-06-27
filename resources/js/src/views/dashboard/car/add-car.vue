<template>
    <b-form @submit.prevent="saveService">
        <b-row>

            <!-- type type -->
            <b-col cols="12">
                <b-form-group
                    label="نوع السيارة"
                    label-for="vi-name"
                >
                    <b-input-group class="input-group-merge">
                        <b-form-input
                            id="vi-name"
                            v-model="car.type"
                            placeholder="نوع السيارة"
                        /><br>
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.type !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.type[0]}}
                    </label>
                </b-form-group>
            </b-col>
            <!-- plate_number  -->
            <b-col cols="12">
                <b-form-group
                    label="رقم اللوحة"
                    label-for="vi-name"
                >
                    <b-input-group class="input-group-merge">
                        <b-form-input
                            id="vi-plate_number"
                            v-model="car.plate_number"
                            placeholder="رقم اللوحة"
                        /><br>
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.plate_number !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.plate_number[0]}}
                    </label>
                </b-form-group>
            </b-col>
            <!-- chassis_number  -->
            <b-col cols="12">
                <b-form-group
                    label="رقم الهيكل"
                    label-for="vi-chassis_number"
                >
                    <b-input-group class="input-group-merge">

                        <b-form-input
                            id="vi-chassis_number"
                            v-model="car.chassis_number"
                            placeholder="رقم الهيكل"
                        /><br>
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.chassis_number !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.chassis_number[0]}}
                    </label>
                </b-form-group>
            </b-col>
            <!--  color -->
            <b-col cols="12">
                <b-form-group
                    label="اللون"
                    label-for="vi-color"
                >
                    <b-input-group class="input-group-merge">
                        <b-form-input
                            id="vi-color"
                            v-model="car.color"
                            placeholder="اللون"
                        /><br>
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.color !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.color[0]}}
                    </label>
                </b-form-group>
            </b-col>
            <!--  side -->
            <b-col cols="12">
                <b-form-group
                    label="الحهة"
                    label-for="vi-color"
                >
                    <b-input-group class="input-group-merge">
                        <b-form-input
                            id="vi-color"
                            v-model="car.side"
                            placeholder="الحهة"
                        /><br>
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.side !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.side[0]}}
                    </label>
                </b-form-group>
            </b-col>
            <!--  date -->
            <b-col cols="12">
                <b-form-group
                    label="سنة التصنيع"
                    label-for="vi-color"
                >
                    <b-input-group class="input-group-merge">
                        <b-form-datepicker
                            id="example-datepicker"
                            v-model="car.made"
                            class="mb-1"
                            :locale="locale"
                            v-bind="labels[locale] || {}"
                        />
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.made !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.made[0]}}
                    </label>
                </b-form-group>
            </b-col>
            <!-- Departments -->
            <b-col cols="12">
                <b-form-group
                    label="القسم"
                    label-for="vi-branch"
                >
                    <b-input-group class="input-group-merge">
                        <v-select
                            v-model="car.category"
                            placeholder="القسم..."
                            :options="categories"
                            :reduce="dep => dep.value"
                            label="name"
                            dir="rtl"
                        />
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.category !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.category[0]}}
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
            BFormDatepicker
        },
        directives: {
            Ripple,
        },
        data(){
            return{
                locale: 'ar-EG',
                labels: {
                    'ar-EG': {
                        weekdayHeaderFormat: 'narrow',
                        labelPrevDecade: 'العقد السابق',
                        labelPrevYear: 'العام السابق',
                        labelPrevMonth: 'الشهر السابق',
                        labelCurrentMonth: 'الشهر الحالي',
                        labelNextMonth: 'الشهر المقبل',
                        labelNextYear: 'العام المقبل',
                        labelNextDecade: 'العقد القادم',
                        labelToday: 'اليوم',
                        labelSelected: 'التاريخ المحدد',
                        labelNoDateSelected: 'لم يتم اختيار تاريخ',
                        labelCalendar: 'التقويم',
                        labelNav: 'الملاحة التقويم',
                        labelHelp: 'استخدم مفاتيح المؤشر للتنقل في التواريخ'
                    },
                },
                departments:[],
                errors: {},
                categories:[
                    {name:'الحركة',value:2},
                    {name:'الاسعافات',value:1},
                ],
                car:{
                    type:'',
                    category:"",
                    plate_number:"",
                    chassis_number:"",
                    color:"",
                    made:"",
                    side:''
                }
            };
        },
        created() {
            // this.getDepartments();
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
                axios.post('/car', this.car, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                }).then(response => {
                    this.errors = {}
                    this.makeToast('success', response.data.message)
                    setTimeout(() => {
                        instance.$router.push({ name: 'car' })
                    }, 1000)
                })
                    .catch(error => {
                        this.makeToast('warning', error.response.data.message)
                        this.errors = error.response.data.errors
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
