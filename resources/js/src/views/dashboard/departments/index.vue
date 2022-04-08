<template>
  <table-data
    :title-prop="title"
    :search-term-prop="searchTerm"
    :columns-prop="columns"
    :url="url"
  >
    <template v-slot:searchDiv>
      <div class="custom-search d-flex justify-content-end">
        <b-form-group>
          <div class="d-flex align-items-center">
            <label class="mr-1">Search</label>
            <b-form-input
              v-model="searchTerm"
              placeholder="Search"
              type="text"
              class="d-inline-block"
            />
          </div>
        </b-form-group>
      </div>
    </template>
    <template v-slot:actions='{row}'>
            <b-dropdown-item :to="{name:'edit-department',params:{'id':row.id}}">
                <feather-icon
                    icon="Edit2Icon"
                    class="mr-50"
                />
                <span>Edit</span>
              </b-dropdown-item>

              <b-dropdown-item @click.prevent="dropRow(row.id)">
                <feather-icon
                    icon="TrashIcon"
                    class="mr-50"
                />
                <span>Delete</span>
              </b-dropdown-item>

        </template>

  </table-data>
</template>

<script>
import axios from 'axios'
import {
  BCard, BAvatar, BBadge, BPagination, BFormGroup, BFormInput, BFormSelect, BDropdownItem, BDropdown, BRow, BCol,
} from 'bootstrap-vue'
import tableData from '../datatable/Index'

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
    // Prism,
    BDropdownItem,
    BDropdown,
    BRow,
    BCol,
  },
  data() {
    return {
      url: '/departments',
      searchTerm: '',
      title: 'Departments',
      columns: [
        {
          label: 'Name',
          field: 'name',
          filterable: true,
          sortable: true,
        },
        {
          label: 'Status',
          field: 'status',
          filterable: true,

        },
        {
          label: 'Organization',
          field: 'organization_id',
          filterable: true,

        },
        {
          label: 'Branch',
          field: 'branch_id',
          filterable: true,

        },
        {
          label: 'Created At',
          field: 'created_at',
          filterable: true,

        },
        {
          label: 'Phone',
          field: 'phone',
          filterable: true,

        },
        {
          label: 'Action',
          field: 'action',
          sortable: false,

        },
      ],

    }
  },
  computed: {

  },
  created() {

  },
  methods: {
  dropRow(id){
            alert(id)
        }
  },
}
</script>
