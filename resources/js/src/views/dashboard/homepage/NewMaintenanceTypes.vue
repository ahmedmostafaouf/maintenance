<template>
    <div>
        <table-data
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
    BButton, BCard, BAvatar, BBadge, BPagination, BFormGroup, BFormInput, BFormSelect, BDropdownItem, BDropdown, BRow, BCol,
} from 'bootstrap-vue'
import tableData from '../datatable/Index'
import vSelect from 'vue-select'


export default {
    name:"NewMaintenanceTypes",
    components: {
        tableData,
        BCard,
        BAvatar,
        BBadge,
        BPagination,
        BFormGroup,
        BFormInput,
        BFormSelect,
        // Prism,
        BDropdownItem,
        BDropdown,
        BRow,
        BCol,
        BButton,
        vSelect
    },
    data() {
        return {
            status:[
                {name:'نشط',value:'1'},
                {name:'غير نشط',value:'0'},
            ],
            services:[],

            url: '/maintenance',
            searchTerm: '',
            title: ' انواع الصيانة',
            appendFilter:'',
            selected_rows:"",
            datatable:{
                status_filter:null,
                service_filter:null
            },
            columns: [
                {
                    label: this.$t('global.name'),
                    field: 'name',
                    filterable: true,
                    sortable: true,
                },
                {
                    label: this.$t('global.status'),
                    field: 'status',
                    filterable: true,

                },
                {
                    label: this.$t('global.service'),
                    field: 'service',
                    filterable: true,

                }
                ,
                {
                    label: this.$t('global.created_at'),
                    field: 'created_at',
                    filterable: true,

                },
            ],

        }
    },
    computed: {

    },
    methods: {
    },
}
</script>
