<template>
    <!-- Hero -->
    <section class="hero is-medium has-bg-img">
        <img 
            src="@/assets/images/iris_photo_4.webp" 
            alt="Session_background" 
            class="hero-bg-img"
        />
        <div class="hero-body container">
            <h3 class="subtitle is-3 has-text-light" v-text="t('sessionsTitle')"></h3>
        </div>
    </section>
    <div class="section has-text-centered">
        <div class="container is-max-desktop">
            <div class="block">
                <h2 class="title is-4" v-text="t('sessionsTitleTwo')"></h2>
                <p class="has-text-weight-bold" v-text="t('sessionsTextTwo')"></p>
                <ol>
                    <li v-text="t('sessionsTextTwoFirstPoint')"></li>
                    <li v-text="t('sessionsTextTwoSecondPoint')"></li>
                </ol>
            </div>
            <div class="block has-bg-img-left">
                <h2 class="title is-4" v-text="t('sessionsTitleThree')"></h2>
                <p v-text="t('sessionsTextThree')"></p>
            </div>
            <div class="block has-bg-img-left">
                <h2 class="title is-4" v-text="t('sessionsTitleThreeAndAHalf')"></h2>
                <p v-text="t('sessionsTextThreeAndAHalf')"></p>
            </div>
            <div class="block">
                <h2 class="title is-4" v-text="t('sessionsTitleFour')"></h2>
                <p v-text="t('sessionsTextFour')"></p>
            </div>
            <div class="block has-bg-img-right">
                <h2 class="title is-4" v-text="t('sessionsTitleFive')"></h2>
                <p v-text="t('sessionsTextFive')"></p>
            </div>
            <div class="block">
                <h2 class="title is-4" v-text="t('sessionsTitleSix')"></h2>
                <p v-html="t('sessionsTextSix')"></p>
            </div>
            <div class="block has-bg-img-left">
                <h2 class="title is-4" v-text="t('sessionsTitleSeven')"></h2>
                <p v-html="t('sessionsTextSeven')"></p>
            </div>
            <div class="block">
                <h2 class="title is-4" v-text="t('sessionsTitleEight')"></h2>
                <p v-text="t('sessionsTextEight')"></p>
            </div>
            <div class="block">
                <h2 class="title is-4" v-text="t('sessionsTitleEleven')"></h2>
                <p v-text="t('sessionsTextEleven')"></p>
            </div>
            <div class="block has-bg-img-right">
                <h2 class="title is-4" v-text="t('sessionsTitleNine')"></h2>
                <p v-html="t('sessionsTextNine')"></p>
            </div>
            <div class="block">
                <h2 class="title is-4" v-text="t('sessionsTitleTen')"></h2>
                <p v-html="t('sessionsTextTen')"></p>
            </div>
        </div>
    </div>
</template>

<script>
    import { useI18n } from 'vue-i18n';
    
    export default {
        name: "SessionsView",
        setup() {
            const { t } = useI18n()
            return { t }
        },
    }
</script>
