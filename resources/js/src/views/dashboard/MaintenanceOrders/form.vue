<template>
  <div>
    <b-form @submit.prevent="save">
      <b-row>
        <!-- Logo Preview -->
        <b-col
            v-if="filePreview"
            md="12"
        >
          <b-form-group
              label="Image"
              label-for="vi-previewBlock"
          >
            <a
                download="organization_Logo"
                :href="filePreview"
                title="ImageName"
            >
              <div
                  id="vi-previewBlock"
                  class="previewBlock"
                  :style="{ 'background-image': `url(${filePreview})` }"
              />
            </a>
          </b-form-group>
        </b-col>
        <!-- Image -->
        <b-col md="12">
          <b-form-group
              label="Image"
              label-for="vi-logo"
          >
            <b-input-group class="input-group-merge">
              <b-form-file
                  id="vi-logo"
                  ref="fileInput"
                  v-model="data.image"
                  accept="image/*"
                  placeholder="Image"
                  @input="selectImgFile"
              />
            </b-input-group>
            <label
                v-if="Object.keys(errors).length > 0 && errors.image !== undefined"
                class="text-danger"
            >
              {{ errors.image[0] }}
            </label>
          </b-form-group>
        </b-col>
        <!-- Maintenance Types-->
        <b-col cols="12">
          <b-form-group
              :label="$i18n.t('global.maintenance')"
              label-for="vi-status"
          >
            <b-input-group class="input-group-merge">
              <v-select
                  v-model="data.maintenance_id"
                  :placeholder="$i18n.t('global.choose')"
                  :options="maintenanceTypes"
                  :reduce="type => type.id"
                  v-on:input="getServicesInMaintenanceType"
                  dir="rtl"
                  label="name"
              />
            </b-input-group>
            <label
                v-if="Object.keys(errors).length > 0 && errors.maintenance_id !== undefined"
                class="text-danger"
            >
              {{ this.errors.maintenance_id[0] }}
            </label>
          </b-form-group>
        </b-col>
         <!-- Departments -->
        <b-col cols="12">
          <b-form-group
              :label="$t('global.required-department')"
              label-for="vi-branch"
          >
            <b-input-group class="input-group-merge">
              <v-select
                  v-model="data.department_id"
                  :placeholder="$t('global.department')+'...'"
                  :options="data.type==1?departments:departmentCar"
                  :reduce="dep => dep.id"
                  label="name"
                  v-on:input="get_devicesInDepartment"
                  dir="rtl"
              />
            </b-input-group>
            <label
                v-if="Object.keys(errors).length > 0 && errors.department_id !== undefined"
                class="text-danger"
            >
              {{ this.errors.department_id[0] }}
            </label>
          </b-form-group>
        </b-col>
        <!-- Services -->
        <b-col cols="12" v-if="services.length > 0">
          <b-form-group
              :label="$t('global.services')"
              label-for="vi-branch"
          >
            <b-input-group class="input-group-merge">
              <v-select
                  v-model="data.service_id"
                  :placeholder="$t('global.choose')+'...'"
                  :options="services"
                  :reduce="service => service.id"
                  label="name"
                  dir="rtl"
              />
            </b-input-group>
            <label
                v-if="Object.keys(errors).length > 0 && errors.service_id !== undefined"
                class="text-danger"
            >
              {{ this.errors.service_id[0] }}
            </label>
          </b-form-group>
        </b-col>
        <!-- related_data -->
        <b-col cols="12" v-if="related_data.length > 0">
          <b-form-group
              :label="(data.type==2) ? $t('global.cars') : ((data.type==1) ? 'الاجهزه': 'nothing')"
              label-for="vi-branch"
          >
            <b-input-group class="input-group-merge">
              <v-select
                  v-model="data.related_data"
                  :placeholder="$t('global.choose')+'...'"
                  :options="related_data"
                  :reduce="related => related.id"
                  :label="(data.type==2) ?'type':'name'"
                  dir="rtl"
              />
            </b-input-group>
            <label
                v-if="Object.keys(errors).length > 0 && errors.related_data !== undefined"
                class="text-danger"
            >
              {{ this.errors.related_data[0] }}
            </label>
          </b-form-group>
        </b-col>
       
        <!-- location -->
        <b-col cols="12">
          <b-form-group
              :label="$t('global.location')"
              label-for="vi-branch"
          >
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="LinkIcon" />
              </b-input-group-prepend>
              <b-form-input
                  id="vi-location"
                  v-model="data.location"
                  :placeholder="$i18n.t('global.location')"
              /><br>
            </b-input-group>
            <label
                v-if="Object.keys(errors).length > 0 && errors.location !== undefined"
                class="text-danger"
            >
              {{this.errors.location[0]}}
            </label>
          </b-form-group>
        </b-col>
        <!-- desc -->
        <b-col cols="12">
          <label for="desc">{{$t('global.desc')}}</label>
          <b-input-group class="input-group-merge">
            <b-form-textarea
                id="desc"
                v-model="data.desc"
                :placeholder="$t('global.desc')"
                rows="3"
                class="mb-1"
            /><br>
          </b-input-group>
          <label
              v-if="Object.keys(errors).length > 0 && errors.desc !== undefined"
              class="text-danger"
          >
            {{this.errors.desc[0]}}

          </label>
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
            {{ $i18n.t('users.submit') }}
          </b-button>
          <b-button
              v-ripple.400="'rgba(186, 191, 199, 0.15)'"
              type="reset"
              variant="outline-secondary"
          >
            {{ $i18n.t('users.reset') }}
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>
<script>
import {
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BFormCheckbox,
  BForm,
  BButton,
  BInputGroup,
  BInputGroupPrepend,
  BFormTextarea,
  BFormValidFeedback,
  BFormInvalidFeedback,
  BFormDatepicker,
  BFormFile,


} from 'bootstrap-vue'
import {BFormTimepicker} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import axios from 'axios'


export default {
  name: 'MaintenanceOrderForm',
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
    BFormDatepicker,
    BFormTimepicker,
    BFormFile,
  },
  directives: {
    Ripple,
  },
  props: ['submitType'],
  data() {
    return {
      filePreview: null,
      departments: [],
      services: [],
      maintenanceTypes: [],
      related_data:[],
      departmentCar:[
                    {name:'الحركة',id:2},
                    {name:'الاسعافات',id:1},
                ],
      errors: {},
      data: {
        maintenance_id: '',
        type:'',
        service_id: '',
        department_id: '',
        related_data:'',
        location: '',
        desc: '',
        image: null
      }
    };
  },
  created() {
    this.getDepartments();
    this.getMaintenanceOrders()
    if (this.submitType == 'edit') {
      this.getData()
    }
  },
  methods: {
    selectImgFile() {
      const { fileInput } = this.$refs
      const imgFile = fileInput.files
      if (imgFile && imgFile[0]) {
        const reader = new FileReader()
        reader.onload = e => {
            console.log( e.target.result )
          this.filePreview = e.target.result
          this.data.image = imgFile[0]
        }
        reader.readAsDataURL(imgFile[0])
        this.$emit('fileInput', imgFile[0])
      }
    },
    makeToast(variant = null, body) {
      this.$bvToast.toast(body, {
        title: `Variant ${variant || 'default'}`,
        variant,
        solid: true,
      })
    },
    getDepartments() {
      axios.get('/spinner/all-departments').then(response => {
        this.departments = response.data.departments
      })
    },
    getMaintenanceOrders() {
      axios.get('/spinner/get-maintenance-types').then(response => {
        this.maintenanceTypes = response.data.maintenanceTypes
      })
    },
    getServicesInMaintenanceType() {
        if (!this.submitType == 'edit') {
        this.data.related_data = ''
      this.data.department_id = ''
    }
    
      axios.get(`/spinner/get-services-maintenance-type/${this.data.maintenance_id}`).then(response => {
        this.services = response.data.maintenance.services
        this.data.type = response.data.maintenance.type
        this.related_data = []
      })
    },
     get_devicesInDepartment() {
        if (!this.submitType == 'edit') {
        this.data.related_data = ''
        }

      axios.get(`/spinner/get-devices-department/${this.data.department_id}/${this.data.type}`).then(response => {
      
        this.related_data = response.data.related_data
      })
    },
    save() {
      const instance = this
      let authHeader = {Authorization: `Bearer ${localStorage.getItem('accessToken')}`,};
        const formData = new FormData()
        for (const key in this.data) {
            if (this.data[key]) {
                formData.append(key, this.data[key])
            }
        }
      if (this.submitType == 'create') {
        axios.post('/maintenance-orders', formData, {headers: authHeader,})
            .then(response => {
              this.errors = {}
              this.makeToast('success', response.data.message)
              setTimeout(() => {
                instance.$router.push({name: 'maintenanceOrders'})
              }, 1000)
            })
            .catch(error => {
              this.makeToast('warning', error.response.data.message)
              this.errors = error.response.data.errors
            })
      } else if (this.submitType == 'edit') {
        let id = this.$route.params.id
        axios.post(`/maintenance-orders/${id}?_method=put`, formData, {headers: authHeader,})
            .then(response => {
              this.errors = {}
              this.makeToast('success', response.data.message)
              setTimeout(() => {
                instance.$router.push({name: 'maintenanceOrders'})
              }, 1000)
            })
            .catch(error => {
              this.makeToast('warning', error.response.data.message)
              this.errors = error.response.data.errors
            })
      }
    },
    getData() {
      let id = this.$route.params.id
      axios.get(`/maintenance-orders/${id}/edit`).then(response => {
        this.data = response.data.data
        this.filePreview = this.data.filePreview
        // this.getServicesInMaintenanceType()
        this.get_devicesInDepartment();
      })

    }
  }
}
</script>
<style scoped>
.container {
  max-width: 600px;
}
</style>
<style scoped>
.previewBlock {
    display: block;
    cursor: pointer;
    width: 150px;
    height: 150px;
    margin: 0 auto 20px;
    background-position: center center;
    background-size: cover;
}
</style>
