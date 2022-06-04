<template>
    <div>
        <table-data
            v-if="canShowOrders"
            :title-prop="title"
            :search-term-prop="searchTerm"
            :columns-prop="columns"
            :url="url"
            :datatable-filter="appendFilter"
        >
        </table-data>
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
    BDropdownItem,
    BDropdown,
    BRow,
    BCol,
    VBModal,
} from 'bootstrap-vue'
import tableData from '../datatable/Index'
import vSelect from 'vue-select'


export default {
    name:"NewMaintenanceOrders",
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
        vSelect,
    },
    props:['canShowOrders'],
    data() {
        return {
            url: '/spinner/get-new-maintenance-orders',
            searchTerm: '',
            title: 'طلبات الصيانه الحديثه',
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
            ],

        }
    },

    computed: {

    },
    methods: {
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
    },
}
</script>

<style lang="scss" >
@import 'https://unpkg.com/vue-select@3.0.0/dist/vue-select.css';
.v-select{
    width: 100% !important;
}
</style>
