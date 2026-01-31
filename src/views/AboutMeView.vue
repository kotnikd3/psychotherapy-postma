<template>
    <!-- Blank section, so that 'nth-child' CSS rule can be used -->
    <section class="section" style="display: none;"></section>
    <!-- About Sandra -->
    <section class="section">
        <div class="container">
            <div class="columns is-vcentered reverse-columns">
                <!-- Column -->
             	<div class="column is-golden-side has-text-centered">
                    <img class="img-main" src="@/assets/images/sandra_photo.webp" alt="Sandra_Postma">
                </div>
                <!-- Column -->
                <div class="column is-golden-main">
                    <h2 class="title is-5" v-text="t('about')"></h2>
                    <div class="block" v-text="t('aboutQuote')"></div>
                    <div class="block" v-text="t('aboutTextOne')"></div>
                    <div class="block has-bg-img-right" v-text="t('aboutTextTwo')"></div>
                    <div class="block" v-html="t('aboutTextThree')"></div>
                    <div class="block" v-text="t('aboutTextFour')"></div>
                    <div class="block" v-text="t('aboutTextFive')"></div>
                </div>
            </div>
        </div>
    </section>
    <!-- Experience -->
     <section class="section">
        <CustomCarousel></CustomCarousel>
    </section>
</template>

<script>
    import { useI18n } from 'vue-i18n';
    import CustomCarousel from '@/views/CustomCarousel.vue';
    
    export default {
        name: "AboutMeView",
        components: {
            CustomCarousel,
        },
        setup() {
            const { t } = useI18n()
            return { t }
        },
    }
</script>

<style scoped>
    .img-main {
        width: 80%;
        border-radius: 2%;
    }

    @media(max-width: 767px) { /* <== You can change this break point as per your  needs */
        .reverse-columns {
            flex-direction: column-reverse;
            display: flex;
        }
    }
</style>