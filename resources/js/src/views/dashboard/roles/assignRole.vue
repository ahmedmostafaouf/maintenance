<template>
     <b-row>
        <b-col cols="4">
            <b-form-group
            label="Roles"
            label-for="vi-roles"
            >
            <b-input-group class="input-group-merge">
                 <b-form-input id="vi-name" v-model="role" placeholder="Name" />
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
                    <tr v-for="r in all_permissions" :key="r.name">
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
export default {
    components: {
        BRow,
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
            errors:{},
            role:'',
            all_permissions:[],
        }
    },
    methods:{
        assignRole(){
            let data = JSON.stringify(this.all_permissions)
            axios.post('roles',{'role':this.role,'permissions' : data})
            .then((res)=>{
                if(res.status === 200){
                    this.makeToast('success', res.data.message);
                }
            })

        },
        makeToast(variant = null, body) {
            this.$bvToast.toast(body, {
                title: `Variant ${variant || 'default'}`,
                variant,
                solid: true,
            })
        },
        permissions(){
            axios.get('/spinner/permissions')
            .then(({data})=>{
                data.permissions.forEach(permission=>{
                    this.all_permissions.push({
                        name: permission , read: false,write: false,delete: false,update: false
                    })
                })
            })
        }
    },
    created(){
        this.permissions();
    }

}
</script>
<style lang="scss" >
@import 'https://unpkg.com/vue-select@3.0.0/dist/vue-select.css';
.v-select{
    width: 100% !important;
}
</style>
