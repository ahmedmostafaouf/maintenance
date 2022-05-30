<template>
    <MaintenanceOrderForm :submitType="'create'" />
</template>

<script>
    import MaintenanceOrderForm from './form'
export default {
    name: 'AddMaintenanceOrder',
    components: {
        MaintenanceOrderForm
    },
    methods:{

    }
}
</script>

<style lang="scss" >
@import 'https://unpkg.com/vue-select@3.0.0/dist/vue-select.css';
.v-select{
    width: 100% !important;
}
</style>
