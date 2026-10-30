<template>
    <div>
        <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-brand">
                    <RouterLink class="navbar-item" :to="{ name: locale === 'en' ? 'home_en' : 'home' }" @click="isMenuActive = false;">
                        <img src="@/assets/images/logo.webp" alt="Sandra_Postma_logo">
                    </RouterLink>
                    <p class="navbar-item" v-text="t('homeTitle')"></p>
                    <button
                        type="button"
                        :class="['navbar-burger', { 'is-active' : isMenuActive }]"
                        aria-label="menu" 
                        :aria-expanded="isMenuActive"
                        aria-controls="navMenu"
                        data-target="navMenu"
                        @click="isMenuActive = !isMenuActive"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>

                <div id="navMenu" :class="['navbar-menu', { 'is-active' : isMenuActive }]">
                    <div class="navbar-end">
                        <RouterLink class="navbar-item" :to="{ name: locale === 'en' ? 'home_en' : 'home' }" @click="isMenuActive = false;">Home</RouterLink>
                        <RouterLink class="navbar-item" :to="{ name: locale === 'en' ? 'therapy_en' : 'therapy' }" @click="isMenuActive = false;">{{ t('homeTab') }}</RouterLink>
                        <RouterLink class="navbar-item" :to="{ name: locale === 'en' ? 'sessions_en' : 'sessions' }" @click="isMenuActive = false;">{{ t('sessions') }}</RouterLink>
                        <RouterLink class="navbar-item" :to="{ name: locale === 'en' ? 'about_en' : 'about' }" @click="isMenuActive = false;">{{ t('about') }}</RouterLink>
                        <RouterLink class="navbar-item" :to="{ name: locale === 'en' ? 'contact_en' : 'contact' }" @click="isMenuActive = false;">Contact</RouterLink>
                        <div class="navbar-item">
                            <div class="buttons has-addons">
                                <RouterLink :to="route.meta.dutchPath || '/'" hreflang="nl" lang="nl" aria-label="Nederlands" :aria-current="locale === 'nl' ? 'page' : undefined" :class="['button is-small', { 'is-ghost': locale === 'nl' }]" @click="isMenuActive = false">NL</RouterLink>
                                <RouterLink :to="route.meta.englishPath || '/en/'" hreflang="en" lang="en" aria-label="English" :aria-current="locale === 'en' ? 'page' : undefined" :class="['button is-small', { 'is-ghost': locale === 'en' }]" @click="isMenuActive = false">EN</RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <main>
            <RouterView />
        </main>
        <footer class="footer">
            <div class="container">
                <div class="columns is-mobile is-multiline">
                    <div class="column is-half-mobile is-offset-2-desktop is-3-desktop">
                        <h2><strong>Contact</strong></h2>
                        <ul>
                            <!-- <li>
                                <a href="tel:+31611803343" class="icon-text">
                                    <span class="icon">
                                        <font-awesome-icon icon="fa-solid fa-phone" />
                                    </span>
                                    <span>+31 6 11 80 33 43</span>
                                </a>
                            </li> -->
                            <li>
                                <a href="mailto:praktijk@sandra-postma.nl" class="icon-text">
                                    <span class="icon">
                                        <font-awesome-icon icon="fa-regular fa-envelope" />
                                    </span>
                                    <span>praktijk@sandra-postma.nl</span>
                                </a>
                            </li>
                            <li><br></li>
                            <li>
                                <a href="https://maps.app.goo.gl/S5p3iRL47HS2mxTK9" target="_blank" rel="noopener noreferrer" class="icon-text">
                                    <span class="icon">
                                        <font-awesome-icon icon="fa-solid fa-location-dot" />
                                    </span>
                                    <span>Sandra Postma<br>Ypeijstraat 27<br>8933 DT, Leeuwarden</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="column is-half-mobile is-3-desktop">
                        <h2><strong v-text="t('linkAndLegal')"></strong></h2>
                        <ul>
                            <li><a href="/static/privacy_beleid_july_2026.pdf" target="_blank" rel="noopener noreferrer">Privacy Beleid</a></li>
                            <li><a href="/static/voorwaarden_july_2026.pdf" target="_blank" rel="noopener noreferrer">Algemene Voorwaarden</a></li>
                            <li><a href="/static/document_vergoedingen_2026.pdf" target="_blank" rel="noopener noreferrer">Vergoedingen Zorgverzekeraars 2026</a></li>
                            <li><br></li>
                            <li>KvK-nummer: 71289232</li>
                            <li>AGB-code praktijk: 90093781</li>
                            <li>AGB zorgverlener: 90117815</li>
                        </ul>
                    </div>
                    <div class="column is-full-mobile is-2-desktop">
                        <div class="columns is-mobile is-multiline">
                            <div class="column is-half-mobile is-full-tablet">
                                <figure>
                                    <a href="https://www.vit-therapeuten.nl/vind-therapeut/therapeut/2240/10242" target="_blank" rel="noopener noreferrer">
                                        <img src="@/assets/images/logo_vit.webp" alt="Sandra_Postma_vit">
                                    </a>
                                </figure>
                            </div>
                            <div class="column is-half-mobile is-full-tablet">
                                <figure>
                                    <a href="https://rbcz.nu/therapeut/s-postma/" target="_blank" rel="noopener noreferrer">
                                        <img src="@/assets/images/logo_rbcz.webp" alt="Sandra_Postma_rbcz">
                                    </a>
                                </figure>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="has-text-centered pt-2">
                    <p class="has-text-grey">Sandra Postma <font-awesome-icon icon="fa-regular fa-copyright" /> 2026</p>
                    <p style="font-size: x-small;"><i><a class="has-text-grey" href="https://www.kotnik.si" target="_blank"><span v-text="t('madeBy')"></span> kotnik.si</a></i></p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n';

export default {
  	name: 'App',
    setup() {
        const { t, locale } = useI18n()

        return { t, locale, route: useRoute() }
    },
    data() {
            return {
                isMenuActive: false,
            }
        },
}
</script>

<style scoped lang="scss">
    @use '@/assets/variables.scss' as *;

    .navbar-end .navbar-item.router-link-exact-active {
        background-color: $color-orange-2;
    }

    footer img {
        width: 90%;
    }
</style>
