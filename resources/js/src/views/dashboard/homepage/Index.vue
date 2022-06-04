<template>
    <section id="dashboard-analytics">
        <b-row class="match-height">
            <b-col
                lg="3"
                md="12"
            >
                <congratulation :welcome="data.welcome_msg"/>
            </b-col>
            <b-col
                lg="9"
                sm="12"
            >
                <!--          maintenance order statisitc-->
                <OrderStatistics :statistics="data.orderStatistics"/>
            </b-col>
            <!--         new maintenance order-->
            <b-col
                lg="12"
                sm="12"
            >
                <NewMaintenanceOrders :canShowOrders="data.canShowOrders"/>
            </b-col>
            <!--         new maintenance types-->
            <b-col
                lg="12"
                sm="12"
            >
                <NewMaintenanceTypes />
            </b-col>
        </b-row>
    </section>
</template>

<script>
import {BRow, BCol} from 'bootstrap-vue'

import StatisticCardWithAreaChart from '@core/components/statistics-cards/StatisticCardWithAreaChart.vue'
import {kFormatter} from '@core/utils/filter'
import Congratulation from './Congratulation.vue'
import axios from "axios";
import OrderStatistics from './MaintenanceOrderStatistics'
import NewMaintenanceOrders from './MaintenanceNewOrders'
import NewMaintenanceTypes from './NewMaintenanceTypes'
export default {
    components: {
        BRow,
        BCol,
        Congratulation,
      //  AvgSessions,
        StatisticCardWithAreaChart,
        // SupportTracker,
        // Timeline,
        // SalesRadarChart,
        // AppDesign,
        OrderStatistics,
        NewMaintenanceOrders,
        NewMaintenanceTypes
    },
    data() {
        return {
            data: {
                welcome_msg: '',
                orderStatistics: [],
                canShowOrders: false,
            },
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        kFormatter,
        getData() {
            axios.get('/spinner/get-statistics-data').then(response => {
                this.data.welcome_msg = response.data.statistics.welcome_msg
                this.data.orderStatistics = response.data.statistics.orderStatistics
                this.data.canShowOrders = response.data.statistics.canShowOrders
            })
        }
    },
}
</script>
