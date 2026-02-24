<template>
    <!-- Hero -->
    <section class="hero is-medium has-bg-img">
        <img 
            src="@/assets/images/iris_photo_2.webp" 
            alt="Therapy_background" 
            class="hero-bg-img"
        />
        <div class="hero-body container">
            <h2 class="subtitle is-4 has-text-light" v-html="t('therapyTitle')"></h2>
        </div>
    </section>
    <!-- Therapy -->
    <section class="section">
        <div class="container is-max-desktop">
            <h3 class="title is-5" v-text="t('therapyTitleOne')"></h3>
            <div class="block has-bg-img-right" v-text="t('therapyTextOne')"></div>

            <!-- Button to show/hide content -->
            <div class="block has-text-centered">
                <a class="button is-warning is-outlined" v-text="readMoreTextOne" @click="showTextOne = !showTextOne"></a>
            </div>

            <!-- Transition effect for smooth appearance -->
            <transition name="fade">
                <div v-if="showTextOne">
                    <div class="block" v-text="t('therapyTextTwo')"></div>
                    <div class="block" v-text="t('therapyTextThree')"></div>
                    <!-- Contact button -->
                    <div class="block has-text-centered">
                        <RouterLink class="button is-warning is-outlined is-wrap" v-text="t('contactPageButtonText')" :to="{ name: 'contact' }"></RouterLink>
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
                <a class="button is-warning is-outlined" v-text="readMoreTextTwo" @click="showTextTwo = !showTextTwo"></a>
            </div>

            <!-- Transition effect for smooth appearance -->
            <transition name="fade">
                <div v-if="showTextTwo">
                    <div class="block" v-text="t('therapyTextFive')"></div>
                    <div class="block" v-text="t('therapyTextSix')"></div>
                    <div class="block" v-text="t('therapyTextSeven')"></div>
                </div>
            </transition>
        </div>
    </section>
    <section class="section has-bg-img-left">
        <div class="container is-max-desktop has-border">
            <h3 class="title is-5" v-text="t('therapyTitleThree')"></h3>
            <div class="block" v-text="t('therapyTextEight')"></div>
        </div>
    </section>
</template>

<script>
    import { useI18n } from 'vue-i18n';
    
    export default {
        name: "TherapyView",
        setup() {
            const { t } = useI18n()
            return { t }
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
