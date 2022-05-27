<template>
    <b-form @submit.prevent="saveCategory">
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
                            v-model="category.name"
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
            <!-- type maincat -->
            <b-col cols="12">
                <b-form-group
                    label="نوع القسم "
                    label-for="vi-status"
                >
                    <b-input-group class="input-group-merge">
                        <v-select
                            v-model="category.main_cat"
                            placeholder="نوع القسم"
                            :options="subCategories"
                            dir="rtl"
                            :reduce="sta => sta.value"
                            label="name"
                        />
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.parent !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.parent[0]}}
                    </label>
                </b-form-group>
            </b-col>

            <!-- type category -->
            <b-col cols="12" v-if="showSubs">
                <b-form-group
                    label="فرع من"
                    label-for="vi-status"
                >
                    <b-input-group class="input-group-merge">
                        <v-select
                            v-model="category.parent"
                            placeholder="فرع من"
                            :options="categories"
                            dir="rtl"
                            :reduce="sta => sta.id"
                            label="name"
                        />
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.parent !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.parent[0]}}
                    </label>
                </b-form-group>
            </b-col> <!-- type category -->

            <b-col cols="12" v-if="parents.length>0">
                <b-form-group
                    label="فرع من"
                    label-for="vi-status"
                >
                    <b-input-group class="input-group-merge">
                        <v-select
                            v-model="category.child"
                            placeholder="فرع من"
                            :options="parents"
                            dir="rtl"
                            :reduce="sta => sta.id"
                            label="name"
                        />
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.parent !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.parent[0]}}
                    </label>
                </b-form-group>
            </b-col>

            <b-col cols="12" v-if="Subparents.length>0">
                <b-form-group
                    label="فرع من"
                    label-for="vi-status"
                >
                    <b-input-group class="input-group-merge">
                        <v-select
                            v-model="category.sub_child"
                            placeholder="فرع من"
                            :options="Subparents"
                            dir="rtl"
                            :reduce="sta => sta.id"
                            label="name"
                        />
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.parent !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.parent[0]}}
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
                showSubs:false,
                status:[
                    {name:'نشط',value:'1'},
                    {name:'غير نشط',value:'0'},
                ],
                parents:[],
                Subparents:[],

                categories:[],
                subCategories:[
                    {name:'قسم رئيسي',value:1},
                    {name:'قسم فرعي',value:2},

                ],
                category:{
                    name:'',
                    main_cat:'',
                    parent:'',
                    child:'',
                    sub_child:'',
                }
            };
        },
        watch:{
            'category.main_cat'(val){

              if(val==1){
                  this.showSubs=false;
              }else{
                  this.showSubs=true;
                  this.getCategory(val)
              }

          },
            'category.parent'(val){

                    this.getParentCategory(val)

            },
            'category.child'(val){

                    this.getSubParentCategory(val)

            }
        },
        created() {
           //this.getCategory();
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
                axios.post('/category', this.category, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                }).then(response => {
                    this.errors = {}
                    this.makeToast('success', response.data.message)
                    setTimeout(() => {
                        instance.$router.push({ name: 'category' })
                    }, 1000)
                })
                    .catch(error => {
                        this.makeToast('warning', error.response.data.message)
                        this.errors = error.response.data.errors
                    })
            },
            getCategory(main_cat){
                // if(main_cat ==2){
                //     this.showSubs=true;
                // }
                axios.get(`/spinner/get-categories/${main_cat}`)
                    .then(response=> this.categories = response.data.categories)
                    .catch(error=>console.log(error))
            } ,
            getParentCategory(parent){
                axios.get(`/spinner/get-branch-cat/${parent}`)
                    .then(response=> this.parents = response.data.categories)
                    .catch(error=>console.log(error))
            },
            getSubParentCategory(parent){
                // if(main_cat ==2){
                //     this.showSubs=true;
                // }
                axios.get(`/spinner/get-branch2-cat/${parent}`)
                    .then(response=> this.Subparents= response.data.categories)
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
