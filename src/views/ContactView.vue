<template>
    <!-- Hero -->
    <section class="hero is-medium has-bg-img">
        <img 
            src="@/assets/images/iris_photo_7.webp" 
            alt="Session_background" 
            class="hero-bg-img"
        />
        <div class="hero-body"></div>
    </section>
    <section class="section">
        <div class="container is-max-desktop has-bg-img-right">
            <div class="block" v-text="t('contactTextOne')"></div>
            <div class="block" v-text="t('contactTextTwo')"></div>
            <div class="columns is-centered has-text-centered mt-5">
                <div class="column is-half">
                    <p class="subtitle is-5">
                        <a href="tel:+31611803343" class="icon-text">
                            <span class="icon">
                                <font-awesome-icon icon="fa-solid fa-phone" />
                            </span>
                            <span>+31 6 11 80 33 43</span>
                        </a>
                    </p>
                </div>
                <div class="column is-half">
                    <p class="subtitle is-5">
                        <a href="mailto:praktijk@sandra-postma.nl" class="icon-text">
                            <span class="icon">
                                <font-awesome-icon icon="fa-regular fa-envelope" />
                            </span>
                            <span>praktijk@sandra-postma.nl</span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact -->
    <section class="section">
        <div class="container is-max-tablet">
            <ContactForm></ContactForm>
        </div>
    </section>
</template>

<script>
    import { useI18n } from 'vue-i18n';
    import ContactForm from '@/views/ContactForm.vue';
    
    export default {
        name: "ContactView",
        components: {
            ContactForm,
        },
        setup() {
            const { t } = useI18n()
            return { t }
        },
    }
</script>
