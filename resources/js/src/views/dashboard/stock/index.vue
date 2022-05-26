<template>
    <div>
        <div class="custom-search">
            <b-row>
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

                <b-col md="4">
                    <b-form-group
                        :label="$t('global.request_order')"
                        label-for="vi-status"
                    >
                        <b-button
                            variant="gradient-success"
                            class="btn-icon"
                            v-b-modal.modal-prevent-closing
                        >
                            <feather-icon icon="AlertCircleIcon" />
                        </b-button>
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
            <b-dropdown-item :to="{name:'edit-stock',params:{'id':row.id}}">
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

        <b-modal
            id="modal-prevent-closing"
            ref="my-modal"
            title="طلب صرف"
            cancel-variant="outline-secondary"
        >

                <b-form >
                <b-row>
                <!-- status -->
                <b-col cols="6" >
                    <b-form-group
                        label="اختر الحالة"
                        label-for="vi-status"
                    >
                        <b-input-group class="input-group-merge">
                            <v-select
                                placeholder=" اختر الحالة... "
                                :options="status"
                                v-model="request.status"
                                dir="rtl"
                                class="selectField"
                                :reduce="sta => sta.value"
                                label="name"
                            />
                        </b-input-group>
                    </b-form-group>
                </b-col>
                    <!--  stock-->
                    <b-col cols="6"  >
                        <b-form-group
                            label="المخزون"
                            label-for="vi-status"
                        >
                            <b-input-group class="input-group-merge">
                                <v-select
                                    placeholder=" المخزون..."
                                    :options="stocks"
                                    v-model="request.stock"
                                    dir="rtl"
                                    class="selectField"
                                    :reduce="stock => stock.id"
                                    label="name"
                                />
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                    <!-- amount -->
                    <b-col v-if="request.stock" cols="6">
                        <b-form-group
                            label="المخزون"
                            label-for="vi-status"
                        >
                            <b-input-group class="input-group-merge">

                                <b-form-input
                                    id="vi-amount"
                                    v-model="request.amount"
                                    disabled
                                />
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                    <!-- code -->
                    <b-col v-if="request.stock" cols="6">
                        <b-form-group
                           label="الكود"
                            label-for="vi-name"
                        >
                            <b-input-group class="input-group-merge">
                                <b-form-input
                                    id="vi-code"
                                    v-model="request.code"
                                    disabled
                                />
                            </b-input-group>
                        </b-form-group>
                    </b-col>

                    <!-- type -->
                    <b-col v-if="request.stock" cols="6">
                        <b-form-group
                            label="النوع"
                            label-for="vi-status"
                        >
                            <b-input-group class="input-group-merge">
                                <b-form-input
                                    id="vi-type"
                                    v-model="request.type"
                                    disabled
                                />
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                    <!--رقم امر عمل -->
                    <b-col v-if="request.stock" cols="6">
                        <b-form-group
                            label="يتم الصرف لامر عمل رقم"
                            label-for="vi-status"
                        >
                            <b-input-group class="input-group-merge">
                                <b-form-input
                                    id="vi-amar"
                                    v-model="request.rquest_num"
                                    placeholder="يتم الصرف لامر عمل رقم"
                                    disabled
                                />
                            </b-input-group>
                        </b-form-group>
                    </b-col>

                    <!-- amount -->
                    <b-col v-if="request.stock" cols="12">
                        <b-form-group
                            label="الكمية"
                            label-for="vi-status"
                        >
                            <b-input-group class="input-group-merge">
                                                                <b-form-spinbutton
                                                                    id="sb-small"
                                                                    size="sm"
                                                                    placeholder="--"
                                                                    class="mb-1"
                                                                    min="1" :max="request.amount"
                                                                    v-model="request.order"
                                                                />

                            </b-input-group>

                        </b-form-group>
                    </b-col>
                    <!-- Note -->
                    <b-col cols="12" v-if="request.stock">
                        <label for="textarea-default">الملاجظات</label>
                        <b-input-group class="input-group-merge">
                            <b-form-textarea
                                id="textarea-default"
                                v-model="request.note"
                                placeholder="الملاحظات"
                                rows="3"
                            /><br>
                        </b-input-group>
                    </b-col>

                </b-row>



            </b-form>
            <template #modal-footer>
                    <b-button block  variant="gradient-primary" class="" block @click="RequestSave">حفظ الطلب</b-button>
                    <b-button block  variant="gradient-success" class="" block @click="RequestDone">تنفيذ الطلب</b-button>
                    <b-button block  variant="gradient-dark" class="" block @click="$refs['my-modal'].hide()">غلق</b-button>
            </template>
        </b-modal>
    </div>

</template>

<script>
import axios from 'axios'
import {
 BButton,BCard,VBModal,BFormSpinbutton,BModal,BFormTextarea,BInputGroup, BAvatar,BForm, BBadge, BPagination, BFormGroup, BFormInput, BFormSelect, BDropdownItem, BDropdown, BRow, BCol,
} from 'bootstrap-vue'
import tableData from '../datatable/Index'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'


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
      BFormSpinbutton,
     BFormTextarea,
      BModal,
    BDropdownItem,
    BDropdown,
    BRow,
    BCol,
      BInputGroup,
      BButton,vSelect,BForm
  },
    directives: {
        'b-modal': VBModal,
        Ripple,
    },
    watch:{
        'request.status'(val){
           this.getStock(val);
        },
        'request.stock'(val){
            this.stocks.filter((item)=>{
                if(item.id==val){
                this.request.amount=item.amount;
                this.request.code=item.code;
                this.request.type=(item.type==1)?'طقم':'عدد';
                }

            })
        }
    },
  data() {
    return {
      url: '/stock',
      searchTerm: '',
      title: 'المخزون',
        status:[
            {name:'قطع غيار',value:'1'},
            {name:'المستهلكات',value:'2'},
            {name:'مواد النظافة',value:'3'},
        ],
        stocks:[],
        request:{
            status:'',
            amount:'',
            stock:'',
            code:"",
            type:"",
            note:'',
            order:"",
            rquest_num:Math.floor(Math.random() * 9999),

        },
        errors:[],
        types:[
            {name:'طقم',value:'1'},
            {name:'عدد',value:'2'},
        ],
        appendFilter:'',
        selected_rows:"",
        datatable:{
            status_filter:null,
        },
      columns: [
        {
          label: this.$t('global.name'),
          field: 'name',
          filterable: true,
          sortable: true,
        },
        {
          label: 'نوع المخزون',
          field: 'status_stock',
          filterable: true,

        },
        {
          label: this.$t('global.type'),
          field: 'type',
          filterable: true,

        },

        {
          label: 'رقم التعميد',
          field: 'number',
          filterable: true,

        },
        {
          label: 'الكود',
          field: 'code',
          sortable: false,

        },
          {
              label: 'تاريخ التوريد',
              field: 'supply_date',
              sortable: false,

          },
          {
              label: 'الكمية',
              field: 'amount',
              sortable: false,

          }, {
              label: 'اسم المستودع',
              field: 'warehouse_name',
              sortable: false,

          }, {
              label: 'ملاجظات',
              field: 'note',
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
      // this.getStock();
      Fire.$on('getselected',(value)=>{

          this.selected_rows = value.selectedRows.map((item)=>{
              return item.id
          })
      })
  },
  methods: {
      exportData(){

      },
      RequestDone(bvModalEvt){
          bvModalEvt.preventDefault()
          if (!this.request.order) {
              this.$swal({
                  icon: 'warning',
                  title: 'خطأ!',
                  text: 'يجب اختيار الكمية',
                  customClass: {
                      confirmButton: 'btn btn-warning',
                  },
              })
          }else{
              this.$nextTick(() => {
                  axios.post('/make-requestDone',this.request)
                      .then(({data,status})=>{
                          if(data.status){
                              this.errors = {}
                              this.$refs['my-modal'].toggle('#toggle-btn')
                              this.$swal({
                                  icon: 'success',
                                  title: 'نجاح',
                                  text: 'تم الحفظ بنجاح',
                                  customClass: {
                                      confirmButton: 'btn btn-success',
                                  },
                              })
                          }
                      })
                      .catch(({response})=>{
                          if(response){
                              if(response.data.message)
                                  //this.makeToast('warning', response.data.message)
                                  if(response.data.errors)
                                      this.errors = response.data.errors
                          }
                      })
              })
          }
      },
      RequestSave(bvModalEvt) {
          bvModalEvt.preventDefault()
          if (!this.request.order) {
              this.$swal({
                  icon: 'warning',
                  title: 'خطأ!',
                  text: 'يجب اختيار الكمية',
                  customClass: {
                      confirmButton: 'btn btn-warning',
                  },
              })
          }else{
              this.$nextTick(() => {
                  axios.post('/make-request',this.request)
                      .then(({data,status})=>{
                          if(data.status){
                              this.errors = {}
                              this.$refs['my-modal'].toggle('#toggle-btn')
                              this.$swal({
                                  icon: 'success',
                                  title: 'نجاح',
                                  text: 'تم الحفظ بنجاح',
                                  customClass: {
                                      confirmButton: 'btn btn-success',
                                  },
                              })
                          }
                      })
                      .catch(({response})=>{
                          if(response){
                              if(response.data.message)
                                  //this.makeToast('warning', response.data.message)
                              if(response.data.errors)
                                  this.errors = response.data.errors
                          }
                      })
              })
          }

      },
      selectedDeleted(){
          if(this.selected_rows.length>0){
              this.dropRow(this.selected_rows,'service/bulk_delete');
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
          let RoutUrl=url?url:"/service"
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

      getStock(status){
          axios.get(`/spinner/get-stocks/${status}`)
              .then(response=> this.stocks = response.data.stocks)
              .catch(error=>console.log(error))
      }
  },
}
</script>
<style>
    .selectField{
        width: inherit;
    }
</style>
