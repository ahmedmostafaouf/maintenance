<template>
     <b-row>
        <b-col cols="4">
            <b-form-group
            label="Roles"
            label-for="vi-roles"
            >
            <b-input-group class="input-group-merge">
                <v-select
                v-model="role_id"
                placeholder="Roles..."
                :options="roles"
                :reduce="rol => rol.id"
                label="roleName"
                />
            </b-input-group>
            <label
                v-if="Object.keys(errors).length > 0 && errors.rol !== undefined"
                class="text-danger"
            >
                Role is required
            </label>
            </b-form-group>
        </b-col>
        <b-col cols="12">
            <table class="table table-responsive table-striped">
                <thead>
                    <tr>
                        <th class="text-center" colspan="5">Routes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="r in all_routes" :key="r.name">
                        <td>{{r.name}}</td>
                        <td>read <input type="checkbox" v-model="r.read" /></td>
                        <td>write <input type="checkbox" v-model="r.write" /></td>
                        <td>update <input type="checkbox" v-model="r.update" /></td>
                        <td>delete <input type="checkbox" v-model="r.delete" /></td>
                    </tr>
                </tbody>
            </table>
        </b-col>
     </b-row>
</template>
<script>
import {
  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BInputGroup, BInputGroupPrepend, BFormTextarea, BFormValidFeedback,
  BFormInvalidFeedback,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
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
    },
  directives: {
    Ripple,
  },
    data(){
        return{
            roles:[],
            errors:{},
            role_id:'',
            all_routes:[]
        }
    },
    methods:{
        getAllRoles() {
            axios.get('all-roles', {
                headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            }).then(response => {
                this.roles = response.data.data
            })
        },
    },
    created(){
        this.getAllRoles()

        this.$router.options.routes.forEach(route => {
            if(route.name){
                this.all_routes.push({
                    name: route.name , read: false,write: false,delete: false,update: false
                })
            }
        })

    }

}
</script>
<style lang="scss" >
@import 'https://unpkg.com/vue-select@3.0.0/dist/vue-select.css';
.v-select{
    width: 100% !important;
}
</style>
