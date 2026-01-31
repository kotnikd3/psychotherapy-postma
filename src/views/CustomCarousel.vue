<template>
    <div class="container is-max-desktop">
        <carousel :items-to-show="1" :autoplay="10000" wrap-around>
            <slide v-for="(text, index) in slides" :key="index">
                <p class="subtitle is-6 has-text-orange is-italic" v-html="text"></p>
            </slide>
            
            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>
    </div>
</template>
  
<script setup>
    import { useI18n } from 'vue-i18n';
    import 'vue3-carousel/dist/carousel.css';
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

    const { t } = useI18n();
    
    const slides = [
        t('aboutExperienceQuoteOne'),
        t('aboutExperienceQuoteTwo'),
    ]
</script>

<style lang="scss">
    @use '@/assets/variables.scss' as *;

    .carousel__next, .carousel__prev {
        font-size: 3rem;
        width: 60px;
        height: 60px;
        color: $color-grey-1;
    }

    .carousel__pagination-button--active {
        background-color: $color-orange-1;
    }
</style>