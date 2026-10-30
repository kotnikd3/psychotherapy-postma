<template>
    <div>
        <!-- Hero -->
        <section class="hero is-medium">
            <img
                src="@/assets/images/iris_photo_1.webp"
                alt="Home_background"
                class="hero-bg-img"
            />
            <div class="hero-body container">
                <h1 class="title is-size-5-mobile is-size-3-tablet has-text-light" v-text="t('homeSubtitle')"></h1>
                <p class="subtitle is-size-6-mobile is-size-4-tablet has-text-light" v-text="t('homeTitle')"></p>
            </div>
        </section>
        <!-- Quotes -->
        <section class="section">
            <div class="container is-max-desktop has-text-left has-bg-img-right">
                <p class="has-text-orange is-italic is-size-5" v-html="t('quoteOne')"></p>
            </div>
            <div class="container is-max-desktop has-text-right mt-5 has-bg-img-left">
                <p class="has-text-orange is-italic is-size-5" v-html="t('quoteTwo')"></p>
            </div>
        </section>
        <!-- Welcome -->
        <section class="section">
            <div class="container is-max-desktop">
                <h2 class="title is-5" v-text="t('welcomeTitle')"></h2>
                <div class="block" v-text="t('welcomeTextOne')"></div>
                <div class="block has-text-weight-bold has-text-centered" v-text="t('welcomeTextTwo')"></div>
                <div class="block" v-text="t('welcomeTextThree')"></div>
                <div class="has-text-centered">
                    <RouterLink class="button is-warning is-outlined" :to="{ name: locale === 'en' ? 'therapy_en' : 'therapy' }"><span v-html="t('welcomeButtonText')"></span></RouterLink>
                </div>
            </div>
        </section>
        <!-- When can it help -->
        <section class="section">
            <div class="container is-max-desktop">
                <h2 class="title is-5" v-text="t('whenCanItHelpTitle')"></h2>
                <p v-text="t('whenCanItHelpText')"></p>
                <div class="content">
                    <ul>
                        <li v-text="t('whenCanItHelpBulletOne')"></li>
                        <li v-text="t('whenCanItHelpBulletTwo')"></li>
                        <li v-text="t('whenCanItHelpBulletThree')"></li>
                        <li v-text="t('whenCanItHelpBulletFour')"></li>
                        <li v-text="t('whenCanItHelpBulletFive')"></li>
                        <li v-text="t('whenCanItHelpBulletSix')"></li>
                        <li v-text="t('whenCanItHelpBulletSeven')"></li>
                        <li v-text="t('whenCanItHelpBulletEight')"></li>
                        <li v-text="t('whenCanItHelpBulletNine')"></li>
                    </ul>
                </div>
                <p v-text="t('whatCanItBringText')"></p>
                <div class="content has-bg-img-right">
                    <ul>
                        <li v-text="t('whatCanItBringBulletOne')"></li>
                        <li v-text="t('whatCanItBringBulletTwo')"></li>
                        <li v-text="t('whatCanItBringBulletThree')"></li>
                        <li v-text="t('whatCanItBringBulletFour')"></li>
                        <li v-text="t('whatCanItBringBulletFive')"></li>
                        <li v-text="t('whatCanItBringBulletSix')"></li>
                        <li v-text="t('whatCanItBringBulletSeven')"></li>
                        <li v-text="t('whatCanItBringBulletEight')"></li>
                    </ul>
                </div>
                <div class="has-text-centered">
                    <RouterLink class="button is-warning is-outlined" :to="{ name: locale === 'en' ? 'contact_en' : 'contact' }">{{ t('contactButtonText') }}</RouterLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import { useI18n } from 'vue-i18n';

    export default {
        name: "HomeView",
        setup() {
            const { t, locale } = useI18n()
            return { t, locale }
        },
    }
</script>
