<template>
<form-data title="Edit Service" :errors='errors'/>
</template>

<script>
import formData from './form.vue';
    export default {
        components: {
            formData,
        },
        data(){
            return {
                errors:{},
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
            editService(form){
                axios.patch(`/services/${this.$route.params.id}`,form)
                .then((data)=>{
                    console.log(data);
                     this.errors = {}
                    this.makeToast('success', data.data.message)
                    setTimeout(() => {
                        this.$router.push({ name: 'services' })
                    }, 1000)
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
             Fire.$on('submit-service',this.editService)
        }
    }
</script>

<style scoped>

</style>
