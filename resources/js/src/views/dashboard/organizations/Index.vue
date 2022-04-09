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
    <template v-slot:actions="{row}">
      <b-dropdown-item :to="{name:'edit-organization',params:{'id':row.id}}">
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
import { reactive, toRefs } from 'vue'
import {
  BCard, BAvatar, BBadge, BPagination, BFormGroup, BFormInput, BFormSelect, BDropdownItem, BDropdown, BRow, BCol,
} from 'bootstrap-vue'
import tableData from '../datatable/Index'

export default {
  name: 'Organization',
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
      url: '/organizations',
      searchTerm: '',
      title: 'Organization',
      columns: [
        {
          label: 'Logo',
          field: 'logo',
        },
        {
          label: 'Name',
          field: 'name',
          filterable: true,
          sortable: true,
        },
        {
          label: 'Email',
          field: 'email',
          filterable: true,
        },
        {
          label: 'Phone',
          field: 'phone',
          filterable: true,
        },
        {
          label: 'Website Url',
          field: 'website_url',
        },
        {
          label: 'latitude',
          field: 'lat',
          filterable: true,
        },
        {
          label: 'longitude',
          field: 'long',
          filterable: true,
        },
        {
          label: 'Created At',
          field: 'created_at',
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
    dropRow() {
    },
  },
}
</script>

<style>
.vgt-left-align span{
    white-space: nowrap!important;
}
</style>
