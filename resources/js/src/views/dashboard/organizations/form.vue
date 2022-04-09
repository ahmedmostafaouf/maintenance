<template>
  <div>
    <form-wizard
      color="#7367F0"
      :title="null"
      :subtitle="null"
      finish-button-text="Submit"
      back-button-text="Previous"
      class="steps-transparent mb-3"
      @on-complete="formSubmitted"
    >
      <!-- Organization detail tab -->
      <tab-content
        title="Details"
        icon="feather icon-file-text"
      >
        <b-row>
          <!-- Logo -->
          <b-col
            v-if="filePreview"
            md="6"
          >
            <b-form-group
              label="Logo"
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
          <!-- QR code -->
          <b-col
            v-if="qr_code"
            md="6"
          >
            <b-form-group
              label="QR code"
              label-for="vi-qrcode"
            >
              <a
                download="organization_Qrcode"
                :href="qr_code"
                title="ImageName"
              >
                <div
                  id="vi-qrcode"
                  class="previewBlock"
                  :style="{ 'background-image': `url(${qr_code})` }"
                />
              </a>

            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Organization Details
            </h5>
            <small class="text-muted">
              Enter Your Organization Details.
            </small>
          </b-col>
          <!-- Logo -->
          <b-col md="6">
            <b-form-group
              label="Logo"
              label-for="vi-logo"
            >
              <b-input-group class="input-group-merge">
                <b-form-file
                  id="vi-logo"
                  ref="fileInput"
                  v-model="organization.logo"
                  accept="image/*"
                  placeholder="Logo"
                  @input="selectImgFile"
                />
              </b-input-group>
              <label
                v-if="Object.keys(errors).length > 0 && errors.logo !== undefined"
                class="text-danger"
              >
                {errors.logo[0]}}
              </label>
            </b-form-group>
          </b-col>
          <!-- name -->
          <b-col md="6">
            <b-form-group
              label="Name"
              label-for="vi-name"
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="UserIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-name"
                  v-model="organization.name"
                  placeholder="Name"
                />
              </b-input-group>
              <label
                v-if="Object.keys(errors).length > 0 && errors.name !== undefined"
                class="text-danger"
              >
                {{ errors.name[0] }}
              </label>
            </b-form-group>
          </b-col>
          <!-- phone -->
          <b-col md="6">
            <b-form-group
              label="Phone"
              label-for="vi-phone"
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="SmartphoneIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-phone"
                  v-model="organization.phone"
                  type="number"
                  placeholder="Phone"
                />
              </b-input-group>
              <label
                v-if="Object.keys(errors).length > 0 && errors.phone !== undefined"
                class="text-danger"
              >
                {{ errors.phone[0] }}
              </label>
            </b-form-group>
          </b-col>
          <!-- Email -->
          <b-col md="6">
            <b-form-group
              label="Email"
              label-for="vi-email"
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="MailIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-email"
                  v-model="organization.email"
                  type="email"
                  placeholder="Email"
                />
              </b-input-group>
              <label
                v-if="Object.keys(errors).length > 0 && errors.email !== undefined"
                class="text-danger"
              >
                {{ errors.email[0] }}
              </label>
            </b-form-group>
          </b-col>
          <!-- website_url -->
          <b-col cols="6">
            <b-form-group
              label="Website Url"
              label-for="vi-website_url"
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="LinkIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-website_url"
                  v-model="organization.website_url"
                  type="url"
                  placeholder="Website Url"
                />
              </b-input-group>
              <label
                v-if="Object.keys(errors).length > 0 && errors.website_url !== undefined"
                class="text-danger"
              >
                {{ errors.website_url[0] }}
              </label>
            </b-form-group>
          </b-col>
          <!-- description -->
          <b-col cols="12">
            <label for="textarea-default">Description</label>
            <b-input-group class="input-group-merge">
              <b-form-textarea
                id="textarea-default"
                v-model="organization.desc"
                placeholder="Description"
                rows="3"
              />
            </b-input-group>
            <label
              v-if="Object.keys(errors).length > 0 && errors.desc !== undefined"
              class="text-danger"
            >
              {{ errors.desc[0] }}
            </label>
          </b-col>
        </b-row>
      </tab-content>

      <!-- Organization address -->
      <tab-content
        title="Address"
        icon="feather icon-map-pin"
      >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Organization Address
            </h5>
            <small class="text-muted">
              Enter Your Organization Address.
            </small>
          </b-col>
          <!-- Address -->
          <b-col cols="12">
            <b-form-group
              label="Address"
              label-for="vi-address"
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="MapIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-address"
                  v-model="organization.address"
                  type="text"
                  placeholder="Address"
                />
              </b-input-group>
              <label
                v-if="Object.keys(errors).length > 0 && errors.address !== undefined"
                class="text-danger"
              >
                {{ errors.address[0] }}
              </label>
            </b-form-group>
          </b-col>
          <!-- Latitude -->
          <b-col cols="6">
            <b-form-group
              label="Latitude"
              label-for="vi-latitude"
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="MapIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-latitude"
                  v-model="organization.lat"
                  type="text"
                  placeholder="Latitude"
                />
              </b-input-group>
              <label
                v-if="Object.keys(errors).length > 0 && errors.lat !== undefined"
                class="text-danger"
              >
                {{ errors.lat[0] }}
              </label>
            </b-form-group>
          </b-col>
          <!-- Longitude -->
          <b-col cols="6">
            <b-form-group
              label="Longitude"
              label-for="vi-long"
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="MapIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-long"
                  v-model="organization.long"
                  type="text"
                  placeholder="Longitude"
                />
              </b-input-group>
              <label
                v-if="Object.keys(errors).length > 0 && errors.long !== undefined"
                class="text-danger"
              >
                {{ errors.long[0] }}
              </label>
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>

      <!-- Organization chatbot -->
      <tab-content
        title="chatBot"
        icon="feather icon-message-square"
      >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Organization chatBot
            </h5>
            <small class="text-muted">
              Enter Your Organization chatBot.
            </small>
          </b-col>
          <!-- token -->
          <b-col cols="6">
            <b-form-group
              label="Token"
              label-for="vi-token"
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="ShieldIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-token"
                  v-model="organization.token"
                  type="text"
                  placeholder="Token"
                />
              </b-input-group>
              <label
                v-if="Object.keys(errors).length > 0 && errors.token !== undefined"
                class="text-danger"
              >
                {{ errors.token[0] }}
              </label>
            </b-form-group>
          </b-col>
          <!-- instance_id -->
          <b-col cols="6">
            <b-form-group
              label="Instance Id"
              label-for="vi-instance_id"
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="SidebarIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-instance_id"
                  v-model="organization.instance_id"
                  type="text"
                  placeholder="Instance Id"
                />
              </b-input-group>
              <label
                v-if="Object.keys(errors).length > 0 && errors.instance_id !== undefined"
                class="text-danger"
              >
                {{ errors.instance_id[0] }}
              </label>
            </b-form-group>
          </b-col>
          <!-- temp_msg -->
          <b-col cols="12">
            <b-form-group
              label="Temp Message"
              label-for="vi-temp_msg"
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="MessageCircleIcon" />
                </b-input-group-prepend>
                <b-form-textarea
                  id="vi-temp_msg"
                  v-model="organization.temp_msg"
                  rows="5"
                  type="text"
                  placeholder="Temp Message"
                />
              </b-input-group>
              <label
                v-if="Object.keys(errors).length > 0 && errors.temp_msg !== undefined"
                class="text-danger"
              >
                {{ errors.temp_msg[0] }}
              </label>
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import vSelect from 'vue-select'
import {
  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BInputGroup, BInputGroupPrepend, BFormTextarea, BFormValidFeedback,
  BFormInvalidFeedback, BFormFile,
} from 'bootstrap-vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import Ripple from 'vue-ripple-directive'
import axios from 'axios'

export default {
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
    FormWizard,
    TabContent,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    vSelect,
    BFormFile,
    ToastificationContent,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      errors: {},
      organization: {
        name: '',
        phone: '',
        email: '',
        address: '',
        website_url: '',
        lat: '',
        long: '',
        desc: '',
        token: '',
        instance_id: '',
        temp_msg: '',
        logo: null,
        qr_code: '',
      },
      filePreview: null,
      qr_code: '',
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.getOrganization()
    }
  },
  methods: {
    formSubmitted() {
      if (this.$route.params.id) {
        alert('Edit')
      } else {
        this.create('organizations')
      }
    },
    chooseFile() {
      this.$refs.fileInput.click()
    },
    selectImgFile() {
      const { fileInput } = this.$refs
      const imgFile = fileInput.files
      if (imgFile && imgFile[0]) {
        const reader = new FileReader()
        reader.onload = e => {
          this.filePreview = e.target.result
          this.organization.logo = imgFile[0]
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
    create(url) {
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      }
      const formData = new FormData()
      for (const key in this.organization) {
        formData.append(key, this.organization[key])
      }

      axios.post(url, formData, config)
        .then(data => {
          this.errors = {}
          this.makeToast('success', data.data.message)
          this.$router.push({ name: 'organizations' })
        })
        .catch(error => {
          if (error.response) {
            this.makeToast('danger', error.response.data.message)
            this.errors = error.response.data.errors
          }
        })
    },
    getOrganization() {
      axios.get(`/organizations/${this.$route.params.id}/edit`)
        .then(({ data }) => {
          if (data.status) {
            Object.keys(this.organization).forEach(key => {
              if (key == 'logo') this.filePreview = data.organization[key]
              else this.organization[key] = data.organization[key]
            })
            this.qr_code = data.organization.qr_code
          }
        })
    },
  },
}
</script>
<style scoped>
.previewBlock {
    display: block;
    cursor: pointer;
    width: 80px;
    height: 80px;
    margin: 0 auto 20px;
    background-position: center center;
    background-size: cover;
}
</style>
