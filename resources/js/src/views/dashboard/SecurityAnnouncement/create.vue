<template>
    <SecurityForm :submitType="'create'" />
</template>

<script>
    import SecurityForm from './form'
export default {
    name: 'AddSecurityAnnouncement',
    components: {
        SecurityForm
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
