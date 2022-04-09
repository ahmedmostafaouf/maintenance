<template>
  <b-form @submit.prevent="saveDepartment">
    <b-row>
      <!-- reset and submit -->
      <b-col
        cols="12"
        class="mt-2"
      >
        <b-row>
          <b-col cols="12">
            <FormData />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import {
  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BInputGroup, BInputGroupPrepend, BFormTextarea, BFormValidFeedback,
  BFormInvalidFeedback,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import axios from 'axios'
import FormData from './form'

export default {
  name: 'AddBranch',
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
    FormData,
  },
  methods: {
    saveDepartment() {
      const instance = this
      axios.post('/departments', this.branch, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }).then(response => {
        this.errors = {}
        this.makeToast('success', 'Branch Stored Succeffully')
        setTimeout(() => {
          instance.$router.push({ name: 'departments' })
        }, 1000)
      })
        .catch(error => {
          this.makeToast('warning', error.response.data.message)
          this.errors = error.response.data.errors
        })
    },
  },
}
</script>

<style lang="scss" >
@import 'https://unpkg.com/vue-select@3.0.0/dist/vue-select.css';
@import '~@core/scss/vue/libs/vue-wizard.scss';
.v-select{
    width: 100% !important;
}
</style>
