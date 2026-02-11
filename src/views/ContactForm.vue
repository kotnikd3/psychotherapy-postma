<template>
    <!-- Contact form -->
    <form ref="form" @submit.prevent="sendEmail">
        <!-- Name -->
        <div class="field">
            <label class="label" v-text="t('name')"></label>
            <div class="control">
                <input class="input" type="text" :placeholder="t('name')" v-model="form.name" required>
            </div>
        </div>
        <!-- Email -->
        <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
                <input class="input" type="email" placeholder="Email" v-model="form.email" required>
                <span class="icon is-small is-left">
                    <font-awesome-icon icon="fa-regular fa-envelope" />
                </span>
            </div>
        </div>
        <!-- Message -->
        <div class="field">
            <label class="label" v-text="t('message')"></label>
            <div class="control">
                <textarea class="textarea" :placeholder="t('message')" rows="10" v-model="form.message" required></textarea>
            </div>
        </div>
        <!-- Button -->
        <div class="field has-text-centered">
            <div class="control">
                <button :class="['button is-warning is-outlined', { 'is-loading' : isLoading }]" v-text="t('submit')"></button>
            </div>
        </div>
        <!-- Notification Success -->
        <div v-if="notificationSuccess.show" class="notification is-success is-light">
            <button class="delete" @click="notificationSuccess.show = false"></button>
            <p v-text="notificationSuccess.message"></p>
        </div>
        <!-- Notification Error -->
        <div v-if="notificationError.show" class="notification is-danger is-light">
            <button class="delete" @click="notificationError.show = false"></button>
            <p v-text="notificationError.message"></p>
        </div>
    </form>
</template>
  
<script>
    import emailjs from '@emailjs/browser';
    import { useI18n } from 'vue-i18n';
    
    export default {
        name: "ContactForm",
        setup() {
            const { t } = useI18n()
            return { t }
        },
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    message: '',
                },
                notificationSuccess: {
                    show: false,
                    message: this.t('notificationEmailSuccess'),
                },
                notificationError: {
                    show: false,
                    message: this.t('notificationEmailError'),
                },
                isLoading: false,
            };
        },
        methods: {
            async sendEmail() {
                this.isLoading = true;
                
                // service key, template key, form data, {public key}
                emailjs.send('service_3w3cg7n', 'template_pxuq39a', this.form, {publicKey: 'V62KdOFyQ_XL6WTtd'})
                .then(
                    () => {
                        console.log('Email sent!');
                        
                        this.isLoading = false;
                        this.notificationSuccess.show = true;

                        // Reset form after success
                        this.form = { name: '', email: '', message: '' };
                    },
                    (error) => {
                        console.log('Error: ', error.text);
                        
                        this.isLoading = false;
                        this.notificationError.show = true;
                    },
                );
            },
        },
    };
</script>