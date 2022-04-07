<template>
    <b-row>
        <b-col cols="12">
    <b-card :title="titleProp">

        <slot name="searchDiv"></slot>
        <!-- table -->
        <vue-good-table
            mode="remote"
            :totalRows="totalRecords"
            :isLoading.sync="isLoading"
            @on-sort-change="onSortChange"
            :pagination-options="{
                enabled: true,
              }"
              :sort-options="{
                    enabled: true,
                }"
            :rows="rows"
            :columns="columns">

            <template
                slot="table-row"
                slot-scope="props"
            >
            <!-- Column: Name -->
            <span
                v-if="props.column.field === 'name'"
                class="text-nowrap"
            >
          <span class="text-nowrap">{{ props.row.name }}</span>
        </span>

            <!-- Column: Status -->
            <span v-else-if="props.column.field === 'status'">
          <b-badge :variant="statusVariant(props.row.status)">
            {{ (props.row.status=='0')?'In Active':"Active" }}
          </b-badge>
        </span>

            <!-- Column: Action -->
            <span v-else-if="props.column.field === 'action'">
          <span>
            <b-dropdown
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
            >
              <template v-slot:button-content>
                <feather-icon
                    icon="MoreVerticalIcon"
                    size="16"
                    class="text-body align-middle mr-25"
                />
              </template>
              <slot name="actions" :row="props.row"/>

            </b-dropdown>
          </span>
        </span>
            </template>
            <!-- pagination -->
            <template
                slot="pagination-bottom"
                slot-scope="props"
            >
                <div class="d-flex justify-content-between flex-wrap">

                    <!-- page length -->
                    <div class="d-flex align-items-center mb-0 mt-1">
            <span class="text-nowrap ">
              Showing 1 to
            </span>
                        <b-form-select
                            v-model="pageLength"
                            :options="pages"
                            class="mx-1"
                            @input="onPerPageChange"
                        />
                        <span class="text-nowrap"> of {{ props.total }} entries </span>
                    </div>

                    <!-- pagination -->
                    <div>
                        <b-pagination
                            :value="1"
                            :total-rows="totalRecords"
                            :per-page="pageLength"
                            first-number
                            last-number
                            align="right"
                            prev-class="prev-item"
                            next-class="next-item"
                            class="mt-1 mb-0"
                            @change="onPageChange"
                        >
                            <template #prev-text>
                                <feather-icon
                                    icon="ChevronLeftIcon"
                                    size="18"
                                />
                            </template>
                            <template #next-text>
                                <feather-icon
                                    icon="ChevronRightIcon"
                                    size="18"
                                />
                            </template>
                        </b-pagination>
                    </div>
                </div>
            </template>

        </vue-good-table>

    </b-card>
    </b-col>
    </b-row>
</template>

<script>
    import {
        BCard,BAvatar, BBadge, BPagination, BFormGroup, BFormInput, BFormSelect, BDropdownItem, BDropdown,BRow, BCol
    } from 'bootstrap-vue'
    import { VueGoodTable } from 'vue-good-table'
    import 'prismjs/themes/prism-tomorrow.css'

    import store from '@/store/index'
    import  axios from 'axios'

    export default {
        components: {
            BCard,
            VueGoodTable,
            BAvatar,
            BBadge,
            BPagination,
            BFormGroup,
            BFormInput,
            BFormSelect,
            // Prism,
            BDropdownItem,
            BDropdown,
            BRow, BCol
        },
        props:['columnsProp','titleProp','url','searchTermProp'],
        data() {
            return {
                isLoading: false,
                searchTerm:'',
                dir: false,
                pageLength: 3,
                pages: ['3', '5', '10'],
                columns: [
                ],
                rows: [],
                totalRecords: 0,
                serverParams: {
                    columnFilters: {},
                    sort:
                        {
                            field: 'name',
                            type: 'desc'
                        }
                    ,
                    page: 1,
                    perPage: 3
                }
            }
        },
        watch:{
            'searchTermProp'(val){
                this.searchTerm = val;
                 this.loadItems()
            }
        },
        computed: {
            statusVariant() {
                const statusColor = {
                    0: 'light-danger',
                    1: 'light-success',
                }
                return status => statusColor[status]
            },
            direction() {
                if (store.state.appConfig.isRTL) {
                    this.dir = true
                    return this.dir
                }
                this.dir = false
                return this.dir
            },
        },
        mounted() {
            this.columns=this.columnsProp
            this.loadItems()

        },
        methods: {
            getdata(){
                alert(1)
            },
             updateParams(newProps) {
            this.serverParams = Object.assign({}, this.serverParams, newProps);
          },
            onPageChange(val) {
                this.serverParams.page=val
                this.loadItems();
            },

            onPerPageChange() {
                this.serverParams.perPage=this.pageLength
                this.loadItems();
            },
            handleSearch(){
                this.loadItems();
            },

            onSortChange(params) {
                if(params[0].type === 'none'){
                    params[0].type = 'asc'
                }
             this.updateParams({
                sort: {
                    type: params[0].type,
                    field: params[0].field
                }
            });
            this.loadItems();

            },
            loadItems() {
                 axios.get(`${this.url}?searchTerm=${this.searchTerm}&page=${this.serverParams.page}&per_page=${this.serverParams.perPage}&field=${this.serverParams.sort.field}&type=${this.serverParams.sort.type}`,{
                     headers: {
                         Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
                     }
                 }).then((response) => {
                     console.log(response)
                     this.rows = response.data.data
                     this.totalRecords = response.data.meta.total;
                })

            }
        }
    }
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss';
</style>
