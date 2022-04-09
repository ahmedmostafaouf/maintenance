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
            <button class="btn btn-success mt-2 mb-2" :loading="is_sending" :disabled="is_sending" @click="assignRole">Assign</button>
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
            is_sending:false,
            roles:[],
            errors:{},
            role_id:'',
            all_routes:[],
            default_all_routes:[]
        }
    },
    watch:{
        'role_id'(val){
            this.roles.map((item) => {
                if(item.id == val){
                    if(item.permissions){
                        if(typeof JSON.parse(item.permissions) == 'object'){
                            this.all_routes = JSON.parse(item.permissions)
                        }else{
                            this.all_routes = JSON.parse(JSON.parse(item.permissions))
                        }
                    }
                }
            })
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
                if(response.data.data.length > 0){
                    this.role_id = response.data.data[0].id
                    if(response.data.data[0].permissions)
                        this.all_routes = JSON.parse(response.data.data[0].permissions)
                }
            })
        },
        async assignRole(){
            let data = JSON.stringify(this.all_routes)
            const res = await axios.post('assign-role',{'role':this.role_id,'permissions' : data}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });
            if(res.status === 200){
                this.makeToast('success', 'Permissions updated successfully');
            }

        },
        makeToast(variant = null, body) {
            this.$bvToast.toast(body, {
                title: `Variant ${variant || 'default'}`,
                variant,
                solid: true,
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
                this.default_all_routes.push({
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
