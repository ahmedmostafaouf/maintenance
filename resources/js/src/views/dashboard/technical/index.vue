<template>
    <div>
    
        <table-data
            :title-prop="title"
            :search-term-prop="searchTerm"
            :columns-prop="columns"
            :url="url"
            :datatable-filter="appendFilter"
        >
            <template v-slot:searchDiv>
                <div class="custom-search d-flex justify-content-end">
                    <b-form-group>
                        <div class="d-flex align-items-center">
                            <label class="mr-1">{{$t('global.search')}}</label>
                            <b-form-input
                                v-model="searchTerm"
                                placeholder="Search"
                                type="text"
                                class="d-inline-block"
                            />
                        </div>
                    </b-form-group>
                    <b-form-group>
                        <b-col
                            class="mr-2">
                            <!-- Remove Button -->
                            <b-button
                                variant="gradient-danger"
                                class="btn-icon"
                                @click="selectedDeleted"
                            >
                                <feather-icon icon="Trash2Icon" />
                            </b-button>
                            <b-button
                                variant="gradient-warning"
                                class="btn-icon"
                                @click="exportData"
                                title="ملف اكسيل"
                            >
                                <feather-icon icon="FileTextIcon" />
                            </b-button>
                        </b-col>
                    </b-form-group>

                </div>
            </template>
            <template v-slot:actions='{row}'>
                
                  <b-button
                            variant="gradient-warning"
                            class="btn-icon"
                            :title="$t('users.edit')"
                             :to="{name:'edit-technical',params:{'id':row.id}}"
                        >
                            <feather-icon icon="Edit2Icon" />
                        </b-button>

                     <b-button
                            variant="gradient-danger"
                            class="btn-icon"
                            :title="$t('users.delete')"
                            @click.prevent="dropRow(row.id)"
                        >
                            <feather-icon icon="Trash2Icon" />
                        </b-button>

            </template>

        </table-data>
    </div>
</template>

<script>
    import axios from 'axios'
    import {
        BButton, BCard, BAvatar, BBadge, BPagination, BFormGroup, BFormInput, BFormSelect, BDropdownItem, BDropdown, BRow, BCol,
    } from 'bootstrap-vue'
    import tableData from '../datatable/Index'
    import vSelect from 'vue-select'
    export default {
        components: {
            tableData,
            BCard,
            BAvatar,
            BBadge,
            BPagination,
            BFormGroup,
            BFormInput,
            BFormSelect,
            BButton,
            BDropdownItem,
            BDropdown,
            BRow,
            BCol,vSelect


        },
        data() {
            return {
                status:[
                    {name:'نشط',value:'1'},
                    {name:'غير نشط',value:'0'},
                ],
                departments:[],
                url: '/technical',
                searchTerm: '',
                title: 'الفنيين',
                appendFilter:'',
                selected_rows:"",
                datatable:{
                    status_filter:null,
                    department_filter:null
                },
                columns: [
                    {
                        label: 'الاسم',
                        field: 'name',
                        filterable: true,
                        sortable: true,
                    },
                    {
                        label: 'المهنة',
                        field: 'jop',
                        filterable: true,
                        sortable: true,
                    },
                    {
                        label: 'المدير المسؤول',
                        field: 'user_id',
                        filterable: true,
                        sortable: true,
                    },
                    {
                        label: 'الحالة',
                        field: 'status',
                        filterable: true,
                        sortable: true,
                    },
                    {
                        label: this.$t('global.action'),
                        field: 'action',
                        sortable: false,

                    },
                ],

            }
        },

        computed: {

        },
        created() {
            this.onfilter();

            Fire.$on('getselected',(value)=>{

                this.selected_rows = value.selectedRows.map((item)=>{
                    return item.id
                })
            })


        },
        methods: {
            exportData(){

            },
            selectedDeleted(){
                if(this.selected_rows.length>0){
                    this.dropRow(this.selected_rows,'technical/bulk_delete');
                }else {
                    this.$swal({
                        icon: 'warning',
                        title: 'خطأ!',
                        text: 'يجب اختيار عدد من العناصر للمسح',
                        customClass: {
                            confirmButton: 'btn btn-warning',
                        },
                    })
                }
            },
            onfilter(){
                let appendedFilter = ''
                let filters=this.datatable;
                Object.keys(filters).forEach(key => {
                    appendedFilter+=`&${key}=${filters[key]}`
                });
                this.appendFilter=appendedFilter;
            },
            dropRow(id,url) {
                let RoutUrl=url?url:"/technical"
                this.$swal({
                    title: 'هل انت متأكد ؟ ',
                    text: "تريد حذف هذا!",
                    icon: 'warning',
                    showCancelButton: true,
                    cancelButtonText:"لا",
                    confirmButtonText: 'نعم , قم بالحذف',
                    customClass: {
                        confirmButton: 'btn btn-primary',
                        cancelButton: 'btn btn-outline-danger ml-1',
                    },
                    buttonsStyling: false,
                }).then(result => {
                    if (result.value) {
                        axios.delete(`${RoutUrl}/${id}`, {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                            },
                        }).then(response => {
                            this.$swal({
                                icon: 'success',
                                title: 'تم المسح !',
                                text: 'تم حذف هذا العنصر بنجاح.',
                                customClass: {
                                    confirmButton: 'btn btn-success',
                                },
                            })
                            Fire.$emit('deleted');
                        }).catch(error => {
                            this.$swal({
                                icon: 'error',
                                title: 'خطأ!',
                                text: 'حصل خطأ ما حاول في وقت لاحق',
                                confirmButtonText:"تاكيد",
                                customClass: {
                                    confirmButton: 'btn btn-danger',
                                },
                            })
                        })
                    } else if (result.dismiss === 'cancel') {
                        this.$swal({
                            title: 'رفض',
                            text: 'انت رفض الحذف :)',
                            icon: 'error',
                            confirmButtonText:"تاكيد",

                            customClass: {
                                confirmButton: 'btn btn-success',
                            },
                        })
                    }
                })
            },

        },
    }
</script>

<style lang="scss" >
    @import 'https://unpkg.com/vue-select@3.0.0/dist/vue-select.css';
    .v-select{
        width: 100% !important;
    }
</style>
