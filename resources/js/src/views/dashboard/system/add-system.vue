<template>
    <b-form @submit.prevent="saveCategory">
        <b-row>

            <!-- first name -->
            <b-col cols="12">
                <b-form-group
                    label="اسم النظام"
                    label-for="vi-name"
                >
                    <b-input-group class="input-group-merge">
                        <b-form-input
                            id="vi-name"
                            v-model="system.name"
                            placeholder="اسم النظام"
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
            <!-- الاقسمام الرئيسية -->
            <b-col cols="12">
                <b-form-group
                    label="القسم الرئيسي"
                    label-for="vi-status"
                >
                    <b-input-group class="input-group-merge">
                        <v-select
                            v-model="system.main_category"
                            placeholder="القسم الرئيسي"
                            :options="categories"
                            dir="rtl"
                            :reduce="sta => sta.id"
                            label="name"
                        />
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.main_category !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.main_category[0]}}
                    </label>
                </b-form-group>
            </b-col>

            <b-col cols="12" class="mb-1">
                <b-form-checkbox
                    v-model="branch_cat"
                    value=true
                    class="custom-control-success"
                >
                     اذا كنت تريد اضافة قسم فرعية من القسم الرئيسي
                </b-form-checkbox>
            </b-col>

            <!--الفسم الفرعي -->
            <b-col cols="12" v-if="branch_cat">
                <b-form-group
                    label="فرع من الرئيسي"
                    label-for="vi-status"
                >
                    <b-input-group class="input-group-merge">
                        <v-select
                            v-model="system.category"
                            placeholder="فرع من الرئيسي"
                            :options="branch_categories"
                            dir="rtl"
                            :reduce="sta => sta.id"
                            label="name"
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

            <b-col cols="12" class="mt-1 mb-1" v-if="branch_cat">
                <b-form-checkbox
                    v-model="branch2_cat"
                    value=true
                    class="custom-control-success"
                >
                    اذا كنت تريد اضافة قسم فرعي من القسم الفرعي
                </b-form-checkbox>
            </b-col>
            <!--الفسم الفرعي الخاص بالقسم الغرعي -->
            <b-col cols="12" v-if="branch2_cat">
                <b-form-group
                    label=" فرع من الفرعي"
                    label-for="vi-status"
                >
                    <b-input-group class="input-group-merge">
                        <v-select
                            v-model="system.category_id"
                            placeholder=" فرع من الفرعي"
                            :options="branch2_categories"
                            dir="rtl"
                            :reduce="sta => sta.id"
                            label="name"
                        />
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.category_id !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.category_id[0]}}
                    </label>
                </b-form-group>
            </b-col>
            <b-col cols="12" class="mt-1 mb-1" v-if="branch2_cat">
                <b-form-checkbox
                    v-model="branch3_cat"
                    value=true
                    class="custom-control-success"
                >
                    اذا كنت تريد اضافة قسم فرعي من القسم الفرعي
                </b-form-checkbox>
            </b-col>
            <!--الاقسام الفرعيه للقسم الفرعي -->
            <b-col cols="12" v-if="branch3_cat">
                <b-form-group
                    label=" فرع من الفرعي"
                    label-for="vi-status"
                >
                    <b-input-group class="input-group-merge">
                        <v-select
                            v-model="system.branches"
                            placeholder="الفروع"
                            :options="branch3_categories"
                            multiple
                            dir="rtl"
                            :reduce="sta => sta.id"
                            label="name"
                        />
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.category_id !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.category_id[0]}}
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
        BRow, BCol, BFormGroup,BFormCheckbox , BFormInput, BForm, BButton, BInputGroup, BInputGroupPrepend, BFormTextarea, BFormValidFeedback,
        BFormInvalidFeedback,
    } from 'bootstrap-vue'
    import Ripple from 'vue-ripple-directive'
    import vSelect from 'vue-select'
    import axios from 'axios'

    export default {
        name: 'AddCategory',
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
                errors: {},
                categories:[],
                branch_categories:[],
                branch2_categories:[],
                branch3_categories:[],
                branch_cat:false,
                branch2_cat:false,
                branch3_cat:false,
                system:{
                    name:'',
                    main_category:'',
                    category:'',
                    category_id:'',
                    branches:[],
                }
            };
        },
        created() {
            // this.getBranchCategory();
            this.getCategories();
            // this.getBranch2Category();
        },
        watch:{
            'system.main_category'(val){
                this.getBranchCategory(val)
            },
            'system.category'(val){
                this.getBranch2Category(val)
            },
            'system.category_id'(val){
                this.getBranch3Category(val)
            },
            'branch_cat'(val){
                if(!val){
                    this.system.category=''
                }
            },
            'branch2_cat'(val){
                if(!val){
                    this.system.category_id=''
                }
            },
            'branch3_cat'(val){
                if(!val){
                    this.system.category_id=''
                }
            },
        },
        methods:{
            makeToast(variant = null, body) {
                this.$bvToast.toast(body, {
                    title: `Variant ${variant || 'default'}`,
                    variant,
                    solid: true,
                })
            },
            saveCategory(){
                const instance = this
                axios.post('/system', this.system, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                }).then(response => {
                    this.errors = {}
                    this.makeToast('success', response.data.message)
                    setTimeout(() => {
                        instance.$router.push({ name: 'system' })
                    }, 1000)
                })
                    .catch(error => {
                        this.makeToast('warning', error.response.data.message)
                        this.errors = error.response.data.errors
                    })
            },
            getBranchCategory(cat){
                axios.get(`/spinner/get-branch-cat/${cat}`)
                    .then(response=> this.branch_categories = response.data.categories)
                    .catch(error=>console.log(error))
            },
            getCategories(){
                axios.get(`/spinner/get-main-categories/`)
                    .then(response=> this.categories = response.data.categories)
                    .catch(error=>console.log(error))
            },
            getBranch2Category(cat){
                axios.get(`/spinner/get-branch2-cat/${cat}`)
                    .then(response=> this.branch2_categories = response.data.categories)
                    .catch(error=>console.log(error))
            },
            getBranch3Category(cat){
                axios.get(`/spinner/get-branch2-cat/${cat}`)
                    .then(response=> this.branch3_categories = response.data.categories)
                    .catch(error=>console.log(error))
            }


        }
    }
</script>

<style lang="scss" >
    @import 'https://unpkg.com/vue-select@3.0.0/dist/vue-select.css';
    .v-select{
        width: 100% !important;
    }
</style>
