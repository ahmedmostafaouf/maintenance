<template>
    <div>
        <b-card
            no-body
            class="card-statistics"
        >
            <b-card-header>
                <b-card-title>احصائيات طلبات الصيانه </b-card-title>
            </b-card-header>
            <b-card-body class="statistics-body">
                <b-row>
                    <b-col
                        v-for="item in statistics"
                        :key="item.icon"
                        md="4"
                        sm="6"
                        class="mb-2 mb-md-0"
                        :class="item.customClass"
                    >
                        <b-media no-body>
                            <b-media-aside

                                class="mr-2"
                            >
                                <b-avatar
                                    size="48"
                                    :variant="item.color"
                                >
                                    <feather-icon
                                        size="24"
                                        :icon="item.icon"
                                    />
                                </b-avatar>
                            </b-media-aside>
                            <b-media-body class="my-auto">
                                <h4 class="font-weight-bolder mb-0">
                                    {{ item.count }}
                                </h4>
                                <b-card-text class="font-small-3 mb-0">
                                    {{ item.subtitle }}
                                </b-card-text>
                            </b-media-body>
                        </b-media>
                    </b-col>
                </b-row>
            </b-card-body>
        </b-card>
    </div>
</template>
<script>
import {
    BCard,BFormGroup, BCardHeader, BCardTitle, BCardText, BCardBody, BRow, BCol, BMedia, BMediaAside, BAvatar, BMediaBody,
} from 'bootstrap-vue'

export default {
    name:'OrderStatistics',
    components: {
        BRow,
        BCol,
        BCard,
        BCardHeader,
        BCardTitle,
        BCardText,
        BCardBody,
        BMedia,
        BAvatar,
        BMediaAside,
        BMediaBody,
        BFormGroup
    },
    props:['statistics'],

}
</script>
<style scoped>
.previewBlock {
    display: block;
    cursor: pointer;
    width: 80px;
    height: 80px;
    margin: 0 auto 20px;
    background-position: center center;
    background-size: cover;
}
</style>

