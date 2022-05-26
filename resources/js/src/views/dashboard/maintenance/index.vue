<template>
    <div>
        <div class="custom-search">
            <b-row>
                <b-col md="4">
                    <b-form-group
                        :label="$t('global.service')"
                        label-for="vi-service"
                    >
                        <v-select
                            v-model="datatable.service_filter"
                            :placeholder="$t('global.service')+'...'"
                            :options="services"
                            dir="rtl"
                            :reduce="serv => serv.id"
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
            <b-dropdown-item :to="{name:'edit-maintenance',params:{'id':row.id}}">
                <feather-icon
                    icon="Edit2Icon"
                    class="mr-50"
                />
                <span>{{$t('global.edit')}}</span>
              </b-dropdown-item>

              <b-dropdown-item @click.prevent="dropRow(row.id)">
                <feather-icon
                    icon="TrashIcon"
                    class="mr-50"
                />
                <span>{{$t('global.delete')}}</span>
              </b-dropdown-item>

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
      title: 'الصيانة',
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
          label: this.$t('global.desc'),
          field: 'desc',
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
      this.getServices();
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
              this.dropRow(this.selected_rows,'maintenance/bulk_delete');
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
          let RoutUrl=url?url:"/maintenance"
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
      getServices(){
          axios.get('/spinner/all-service').then(response => {
              this.services = response.data.service
          })
      },
  },
}
</script>
