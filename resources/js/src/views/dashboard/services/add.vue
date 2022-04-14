<template>
<form-data title="Add Service" :errors="errors"/>
</template>

<script>
import formData from './form.vue';
    export default {
        components: {
            formData,
        },
        data(){
            return{
                errors:{}
            }
        },
        methods: {
            makeToast(variant = null, body) {
                this.$bvToast.toast(body, {
                    title: `Variant ${variant || 'default'}`,
                    variant,
                    solid: true,
                })
            },
            addService(form){
                axios.post('services',form)
                .then((data)=>{
                    console.log(data);
                     this.errors = {}
                    this.makeToast('success', data.data.message)
                    this.$router.push({ name: 'services' })
                })
                 .catch(error => {
                     if(error.response){
                         this.makeToast('warning', error.response.data.message)
                         this.errors = error.response.data.errors
                     }
                })
            }
        },
        mounted(){
            Fire.$on('add-service',this.addService)
        }
    }
</script>

<style scoped>

</style>
