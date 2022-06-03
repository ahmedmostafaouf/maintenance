<template>
    <div>
        <!-- modal -->
        <b-modal
            id="modal-primary"
            ok-only
            :ok-title="$i18n.t('users.submit')"
            modal-class="modal-primary"
            centered
            title="Primary Modal"
            ref="changeStatus"
            @ok="save"
        >
            <b-row>
                <!-- Status Types-->
                <b-col cols="12">
                    <b-form-group
                        :label="$i18n.t('global.status')"
                        label-for="vi-status"
                    >
                        <b-input-group class="input-group-merge">
                            <v-select
                                v-model="data.status"
                                :placeholder="$i18n.t('global.choose')"
                                :options="orderStatuses"
                                :reduce="status => status.id"
                                dir="rtl"
                                label="name"
                            />
                        </b-input-group>
                        <label
                            v-if="Object.keys(errors).length > 0 && errors.status !== undefined"
                            class="text-danger"
                        >
                            {{ this.errors.status[0] }}
                        </label>
                    </b-form-group>
                    <!-- comment -->
                    <b-col cols="12">
                        <label for="comment">{{$t('global.comment')}}</label>
                        <b-input-group class="input-group-merge">
                            <b-form-textarea
                                id="desc"
                                v-model="data.comment"
                                :placeholder="$t('global.comment')"
                                rows="3"
                                class="mb-1"
                            /><br>
                        </b-input-group>
                        <label
                            v-if="Object.keys(errors).length > 0 && errors.comment !== undefined"
                            class="text-danger"
                        >
                            {{this.errors.comment[0]}}

                        </label>
                    </b-col>
                </b-col>
            </b-row>
        </b-modal>
    </div>
</template>
<script>
import {
    BButton,
    BCol,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BInputGroup,
    BInputGroupPrepend,
    BModal,
    BRow,
    VBModal
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import axios from "axios";
import vSelect from "vue-select";

export default {
    name:"ChangeStatus",
    components: {
        BButton,
        BModal,
        BRow,
        BCol,
        vSelect,
        BFormTextarea,
        BFormGroup,
        BFormInput,
        BInputGroup,
        BInputGroupPrepend,
    },
    props:['selected_rows'],
    directives: {
        'b-modal': VBModal,
        Ripple,
    },
    data(){
        return {
            errors: {},
            orderStatuses:[],
            data:{
                status:'',
                comment:'',
                ids:null
            }
        }
    },
    methods:{
        getMaintenanceOrderStatus(){
            axios.get('/spinner/get-maintenance-order-statuses').then(response => {
                this.orderStatuses = response.data.status
            })
        },
        save(){
            this.data.ids = this.selected_rows
            this.$swal({
                title: 'هل انت متأكد ؟ ',
                text: "تريد تغيير الحاله!",
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText:"لا",
                confirmButtonText: 'نعم , قم بالتعديل',
                customClass: {
                    confirmButton: 'btn btn-primary',
                    cancelButton: 'btn btn-outline-danger ml-1',
                },
                buttonsStyling: false,
            }).then(result => {
                if (result.value) {
                    axios.post(`maintenance-orders/bulk-change-status`,this.data, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                        },
                    }).then(response => {
                        this.$swal({
                            icon: 'success',
                            title: 'تم التعديل !',
                            text: 'تم تعديل العناصر بنجاح.',
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
        }
    },
    created() {
        this.getMaintenanceOrderStatus()

    }
}
</script>
