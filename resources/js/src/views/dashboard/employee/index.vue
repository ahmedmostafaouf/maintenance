<template>
    <div>
    <div class="custom-search">
        <b-row>
            <b-col md="4">
                <b-form-group
                    :label="$t('global.roles')"
                    label-for="vi-role"
                >
                    <v-select
                        v-model="datatable.role_filter"
                        :placeholder="$t('global.roles')+'...'"
                        :options="roles"
                        dir="rtl"
                        :reduce="role => role.id"
                        label="name"
                        @input="onfilter"
                    />
                </b-form-group>
            </b-col>
            <b-col md="4">
                <b-form-group
                    :label="$t('global.status')"
                    label-for="vi-status"
                >
                    <v-select
                        v-model="datatable.status_filter"
                        :placeholder="$t('global.status')+'...'"
                        :options="status"
                        dir="rtl"
                        :reduce="sta => sta.value"
                        label="name"
                        @input="onfilter"
                    />
                </b-form-group>

            </b-col>
        </b-row>
    </div>
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
                        <label class="mr-1">{{$t('users.search')}}</label>
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
                        class="">
                        <!-- Remove Button -->
                        <b-button
                            variant="gradient-danger"
                            class="btn-icon"
                            title="حذف الكل"
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
                             :to="{name:'edit-employee',params:{'id':row.id}}"
                        >
                            <feather-icon icon="Edit2Icon" />
                        </b-button>
                         <b-button
                            variant="gradient-primary"
                            class="btn-icon"
                            :title="$t('users.view')"
                            :to="{name:'view-employee',params:{'id':row.id}}"
                        >
                            <feather-icon icon="EyeIcon" />
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
     BButton,  BCard, BAvatar, BBadge, BPagination, BFormGroup, BFormInput, BFormSelect, BDropdownItem, BDropdown, BRow, BCol,
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
            BDropdownItem,
            BDropdown,
            BRow,
            BCol,
            BButton,
            vSelect

        },
        data() {
            return {
                url: '/employees',
                searchTerm: '',
                title: this.$t('users.employee'),
                appendFilter:'',
                selected_rows:"",
                datatable:{
                    status_filter:null,
                    role_filter:null
                },
                status:[
                    {name:'نشط',value:1},
                    {name:'غير نشط',value:0},
                ],
                roles:[],
                columns: [
                    {
                        label: this.$t('users.image'),
                        field: 'image',
                        filterable: true,

                    },
                    {
                        label: this.$t('users.name'),
                        field: 'name',
                        filterable: true,
                        sortable: true,
                    },
                    {
                        label: this.$t('users.email'),
                        field: 'email',
                        filterable: true,

                    },
                    {
                        label: this.$t('users.phone'),
                        field: 'phone',
                        filterable: true,

                    },
                    {
                        label: this.$t('users.status'),
                        field: 'status',
                        filterable: true,

                    },
                    {
                        label: this.$t('users.roles'),
                        field: 'group',
                        filterable: true,

                    },
                    {
                        label: this.$t('users.created at'),
                        field: 'created_at',
                        filterable: true,

                    },

                    {
                        label: this.$t('users.action'),
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
            this.getroles();
            Fire.$on('getselected',(value)=>{
                this.selected_rows = value.selectedRows.map((item)=>{
                    return item.id
                })
            })
        },
        methods: {
            selectedDeleted(){
                if(this.selected_rows.length>0){
                    this.dropRow(this.selected_rows,'employee/bulk_delete');
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
            exportData(){
                axios.get('/employee/export',{
                    responseType: 'blob', // important
                }).then(response => {
                    const blob = new Blob([response.data], { type: "application/json" });
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.download = 'employee.xlsx';
                    link.click();
                    //window.location.href = response.config.url;
                })
            },

            dropRow(id,url) {
                let RoutUrl=url?url:"/employees"
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
            getroles(){
                axios.get('/spinner/roles').then(response => {
                    this.roles = response.data.roles
                })
            },
        },
    }
</script>
