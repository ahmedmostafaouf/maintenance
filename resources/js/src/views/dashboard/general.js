import axios from "axios";

export default class general{

    dropRow(id,url) {
        this.$swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-outline-danger ml-1',
            },
            buttonsStyling: false,
        }).then(result => {
            if (result.value) {
                axios.delete(`/${url}/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                }).then(response => {
                    this.$swal({
                        icon: 'success',
                        title: 'Deleted!',
                        text: 'Your Department has been deleted.',
                        customClass: {
                            confirmButton: 'btn btn-success',
                        },
                    })
                }).catch(error => {
                    this.$swal({
                        icon: 'error',
                        title: 'Error!',
                        text: error.response.data.message,
                        customClass: {
                            confirmButton: 'btn btn-danger',
                        },
                    })
                })
            } else if (result.dismiss === 'cancel') {
                this.$swal({
                    title: 'Cancelled',
                    text: 'Your imaginary file is safe :)',
                    icon: 'error',
                    customClass: {
                        confirmButton: 'btn btn-success',
                    },
                })
            }
        })
    }
}
