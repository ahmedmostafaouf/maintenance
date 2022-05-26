<template>
    <b-form @submit.prevent="saveStock">
        <b-row>

            <!-- first name -->
            <b-col cols="12">
                <b-form-group
                    label="الاسم"
                    label-for="vi-name"
                >
                    <b-input-group class="input-group-merge">
                        <b-form-input
                            id="vi-name"
                            v-model="stock.name"
                            placeholder="الاسم"
                        /><br>
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.name !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.name[0]}}
                    </label>
                </b-form-group>
            </b-col>

            <!-- first name -->
            <b-col cols="12">
                <b-form-group
                    label="رقم التعميد"
                    label-for="vi-name"
                >
                    <b-input-group class="input-group-merge">

                        <b-form-input
                            id="vi-number"
                            v-model="stock.number"
                            placeholder="رقم التعميد"
                        /><br>
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.number !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.number[0]}}
                    </label>
                </b-form-group>
            </b-col>
            <!-- first name -->
            <b-col cols="12">
                <b-form-group
                    label="الكود"
                    label-for="vi-name"
                >
                    <b-input-group class="input-group-merge">

                        <b-form-input
                            id="vi-code"
                            v-model="stock.code"
                            placeholder="الكود"
                        /><br>
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.code !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.code[0]}}
                    </label>
                </b-form-group>
            </b-col>
            <!-- first name -->
            <b-col cols="12">
                <b-form-group
                    label="تاريخ التوريد"
                    label-for="vi-name"
                >
                    <b-input-group class="input-group-merge">
                        <b-form-datepicker
                            id="example-datepicker"
                            v-model="stock.supply_date"
                            class="mb-1"
                        />
                        <br>
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.supply_date !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.supply_date[0]}}
                    </label>
                </b-form-group>
            </b-col>

            <!-- status -->
            <b-col cols="12">
                <b-form-group
                    label="نوع المخزون"
                    label-for="vi-status"
                >
                    <b-input-group class="input-group-merge">
                        <v-select
                            v-model="stock.status"
                            placeholder="نوع المخزون"
                            :options="status"
                            dir="rtl"
                            :reduce="sta => sta.value"
                            label="name"
                        />
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.status !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.status[0]}}
                    </label>
                </b-form-group>
            </b-col>
            <!-- type -->
            <b-col cols="12">
                <b-form-group
                    label="النوع"
                    label-for="vi-status"
                >
                    <b-input-group class="input-group-merge">
                        <v-select
                            v-model="stock.type"
                            placeholder="النوع"
                            :options="types"
                            dir="rtl"
                            :reduce="ty => ty.value"
                            label="name"
                        />
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.types !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.types[0]}}
                    </label>
                </b-form-group>
            </b-col>
            <!-- amount -->
            <b-col cols="12">
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
                            v-model="stock.amount"
                        />
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.amount !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.amount[0]}}
                    </label>
                </b-form-group>
            </b-col>

            <!-- warehouse_name -->
            <b-col cols="12">
                <b-form-group
                    label="اسم المستودع"
                    label-for="vi-warehouse_name"
                >
                    <b-input-group class="input-group-merge">
                        <b-form-input
                            id="vi-warehouse_name"
                            v-model="stock.warehouse_name"
                            placeholder="اسم المستودع"
                        /><br>
                    </b-input-group>
                    <label
                        v-if="Object.keys(errors).length > 0 && errors.warehouse_name !== undefined"
                        class="text-danger"
                    >
                        {{this.errors.warehouse_name[0]}}
                    </label>
                </b-form-group>
            </b-col>

            <!-- Note -->
            <b-col cols="12">
                <label for="textarea-default">ملاحظات</label>
                <b-input-group class="input-group-merge">
                    <b-form-textarea
                        id="textarea-default"
                        v-model="stock.note"
                        placeholder="ملاحظات"
                        rows="3"
                    /><br>
                </b-input-group>
                <label
                    v-if="Object.keys(errors).length > 0 && errors.note !== undefined"
                    class="text-danger"
                >
                    {{this.errors.note[0]}}

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
                    {{$t('global.save')}}
                </b-button>
                <b-button
                    v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                    type="reset"
                    variant="outline-secondary"
                >
                    {{$t('global.reset')}}
                </b-button>
            </b-col>
        </b-row>
    </b-form>
</template>

<script>
import {
    BFormDatepicker,BFormSpinbutton,BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BInputGroup, BInputGroupPrepend, BFormTextarea, BFormValidFeedback,
    BFormInvalidFeedback,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import axios from 'axios'

export default {
    name: 'AddMaintenance',
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
        BFormSpinbutton
    },
    directives: {
        Ripple,
    },
    data(){
        return{
            errors: {},
            status:[
                {name:'قطع غيار',value:'1'},
                {name:'المستهلكات',value:'2'},
                {name:'مواد النظافة',value:'3'},
            ],
            types:[
                {name:'طقم',value:'1'},
                {name:'عدد',value:'2'},
            ],
            stock:{
                name:'',
                status:'',
                type:'',
                "code":'',
                "number":"",
                'amount':'',
                'supply_date':'',
                "warehouse_name":'',
                "note":"note"
            }
        };
    },
    created() {
    },
    methods:{
        makeToast(variant = null, body) {
            this.$bvToast.toast(body, {
                title: `Variant ${variant || 'default'}`,
                variant,
                solid: true,
            })
        },
        saveStock(){
            const instance = this
            axios.post('/stock', this.stock, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            }).then(response => {
                this.errors = {}
                this.makeToast('success', 'Department Stored Succeffully')
                setTimeout(() => {
                    instance.$router.push({ name: 'stock' })
                }, 1000)
            })
                .catch(error => {
                    this.makeToast('warning', error.response.data.message)
                    this.errors = error.response.data.errors
                })
        },


    }
}
</script>

<style lang="scss" >
@import 'https://unpkg.com/vue-select@3.0.0/dist/vue-select.css';
.v-select{
    width: 100% !important;
}
</style>
