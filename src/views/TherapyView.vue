<template>
    <div>
        <!-- Hero -->
        <section class="hero is-medium has-bg-img">
            <img
                src="@/assets/images/iris_photo_2.webp"
                alt="Therapy_background"
                class="hero-bg-img"
            />
            <div class="hero-body container">
                <h1 class="title is-4 has-text-light" v-text="t('homeTab')"></h1>
                <p class="subtitle is-4 has-text-light" v-html="t('therapyTitle')"></p>
            </div>
        </section>
        <!-- Therapy -->
        <section class="section">
            <div class="container is-max-desktop">
                <h2 class="title is-5" v-text="t('therapyTitleOne')"></h2>
                <div class="block has-bg-img-right" v-text="t('therapyTextOne')"></div>

                <!-- Button to show/hide content -->
                <div class="block has-text-centered">
                    <button type="button" class="button is-warning is-outlined" :aria-expanded="showTextOne" aria-controls="therapy-details-one" v-text="readMoreTextOne" @click="showTextOne = !showTextOne"></button>
                </div>

                <!-- Transition effect for smooth appearance -->
                <transition name="fade">
                    <div id="therapy-details-one" v-show="showTextOne">
                        <div class="block" v-text="t('therapyTextTwo')"></div>
                        <div class="block" v-text="t('therapyTextThree')"></div>
                        <!-- Contact button -->
                        <div class="block has-text-centered">
                            <RouterLink class="button is-warning is-outlined is-wrap" :to="{ name: locale === 'en' ? 'contact_en' : 'contact' }">{{ t('contactPageButtonText') }}</RouterLink>
                        </div>
                    </div>
                </transition>
            </div>
        </section>
        <section class="section">
            <div class="container is-max-desktop">
                <h2 class="title is-5" v-text="t('therapyTitleTwo')"></h2>
                <div class="block" v-text="t('therapyTextFour')"></div>

                <!-- Button to show/hide content -->
                <div class="block has-text-centered">
                    <button type="button" class="button is-warning is-outlined" :aria-expanded="showTextTwo" aria-controls="therapy-details-two" v-text="readMoreTextTwo" @click="showTextTwo = !showTextTwo"></button>
                </div>

                <!-- Transition effect for smooth appearance -->
                <transition name="fade">
                    <div id="therapy-details-two" v-show="showTextTwo">
                        <div class="block" v-text="t('therapyTextFive')"></div>
                        <div class="block" v-text="t('therapyTextSix')"></div>
                        <div class="block" v-text="t('therapyTextSeven')"></div>
                    </div>
                </transition>
            </div>
        </section>
        <section class="section has-bg-img-left">
            <div class="container is-max-desktop has-border">
                <h2 class="title is-5" v-text="t('therapyTitleThree')"></h2>
                <div class="block" v-text="t('therapyTextEight')"></div>
            </div>
        </section>
    </div>
</template>

<script>
    import { useI18n } from 'vue-i18n';

    export default {
        name: "TherapyView",
        setup() {
            const { t, locale } = useI18n()
            return { t, locale }
        },
        data() {
            return {
                showTextOne: false,
                showTextTwo: false,
            };
        },
        computed: {
            readMoreTextOne() {
                return this.showTextOne ? this.t('readLess') : this.t('readMore');
            },
            readMoreTextTwo() {
                return this.showTextTwo ? this.t('readLess') : this.t('readMore');
            }
        }
    }
</script>

<style scoped lang="scss">
    @use '@/assets/variables.scss' as *;

    .has-border {
        border: 3px solid $color-orange-2; /* Adjust thickness if needed */
        padding: 1.5rem;
        border-radius: 2%;
    }

    .button.is-wrap {
        white-space: normal;
        word-break: break-word;
        overflow-wrap: break-word;
        text-align: center;
    }

    /* Transition effects */
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    }
    .fade-enter-from, .fade-leave-to {
        opacity: 0;
        transform: translateY(-10px);
    }
</style>
