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
                        <b-col class="mr-2">
                            <b-button
                                variant="gradient-info"
                                class="btn-icon"
                                @click="selectedChangeStatus"
                            >
                                <span>تغيير الحالة </span>
                            </b-button>
                            <!-- Remove Button -->

                            <b-button
                                variant="gradient-danger"
                                class="btn-icon"
                                @click="selectedDeleted"
                            >
                                <feather-icon icon="Trash2Icon" />
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
                             :to="{name:'edit-maintenanceOrders',params:{'id':row.id}}"
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
                        <b-button v-b-modal.modal-prevent-closing
                           @click="modalRequestSystem(row.id)">
                               <span> تكليف فني</span>
                        </b-button>
            </template>
        </table-data>

<b-modal
            id="modal-prevent-closing"
            ref="my-modal"
            title="طلب صرف"
            cancel-variant="outline-secondary"
        >

            <b-form >
                <b-row>

                     <b-col cols="12">
                    <b-form-group
                        label="امور الصرف"
                        label-for="vi-status"
                    >
                        <b-input-group class="input-group-merge">
                            <v-select
                                v-model="data.technical"
                                placeholder="اختار فني"
                                :options="technicals"
                                :reduce="technical => technical.id"
                                multiple
                                dir="rtl"
                                label="name"
                            />
                        </b-input-group>
                      
                    </b-form-group>
                </b-col>


                </b-row>
            </b-form>
            <template #modal-footer>
                <b-button block  variant="gradient-primary" class="" block @click="RequestSave">حفظ </b-button>
                <b-button block  variant="gradient-dark" class="" block @click="$refs['my-modal'].hide()">غلق</b-button>
            </template>
        </b-modal>

        <ChangeStatus :selected_rows="selected_rows" />
    </div>
</template>

<script>
import axios from 'axios'
import {
    BButton,
    BCard,
    BAvatar,
    BBadge,
    BPagination,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BForm,
    BInputGroup,
    BDropdownItem,
    BDropdown,
    BRow,
    BCol,
    VBModal,
} from 'bootstrap-vue'
import tableData from '../datatable/Index'
import vSelect from 'vue-select'
import ChangeStatus from './ChangeStatus'


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
        BCol,
        BForm,
        vSelect,
        ChangeStatus,
        BInputGroup


    },
    data() {
        return {
            status:[
                {name:'معلق',value:'1'},
                {name:'تم التاكيد',value:'0'},
            ],
            technicals:[],
            order:'',
            data:{
                technical:'',
            },
            url: '/maintenance-orders',
            searchTerm: '',
            title: 'طلبات الصيانه',
            appendFilter:'',
            selected_rows:"",
            datatable:{
                status_filter:null,
                department_filter:null
            },
            columns: [
                {
                    label: 'نوع الصيانه',
                    field: 'maintenance_type',
                    filterable: true,
                    sortable: true,
                },
                {
                    label: 'اسم القسم',
                    field: 'department',
                    filterable: true,
                    sortable: true,
                },
                {
                    label: 'اسم الخدمه',
                    field: 'service',
                    filterable: true,
                    sortable: true,
                },
                {
                    label: 'اسم الجهاز',
                    field: 'device',
                    filterable: true,
                    sortable: true,
                },
                {
                    label: 'اسم السياره',
                    field: 'car',
                    filterable: true,
                    sortable: true,
                },
                {
                    label: this.$t('global.status'),
                    field: 'order_status',
                    sortable: false,

                },
                {
                    label: 'اللوكيشن',
                    field: 'location',
                    filterable: false,
                    sortable: false,
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
 this.getTechnical()

    },
    methods: {
        modalRequestSystem(id){
            this.order=id
            },
            RequestSave(){
                if(!this.data.technical){
                     this.$swal({
                    icon: 'warning',
                    title: 'اختر فني!',
                    text: 'اختر فني',
                    customClass: {
                        confirmButton: 'btn btn-warning',
                    },
                })
                }
                 let authHeader = {Authorization: `Bearer ${localStorage.getItem('accessToken')}`,};
                axios.post(`/maintenance_order/${this.order}`,this.data, {headers: authHeader,}).then(response => {
                   this.$refs['my-modal'].hide()
                  this.$swal({
                    icon: 'success',
                    title: 'تم!',
                    text: 'تتكلييف فني بنجاح',
                    customClass: {
                        confirmButton: 'btn btn-success',
                    },
                });
                    Fire.$emit('deleted');

                })
            },
            getTechnical(){
                axios.get(`/spinner/get-technical`).then(response => {
                    this.technicals = response.data.technical

                })
            },
          
        selectedDeleted(){
            if(this.selected_rows.length>0){
                this.dropRow(this.selected_rows,'maintenance-orders/bulk-delete');
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
        selectedChangeStatus(){
            if(this.selected_rows.length>0){
                this.$bvModal.show('modal-primary')
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
            let RoutUrl=url?url:"/maintenance-orders/bulk-delete"
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
