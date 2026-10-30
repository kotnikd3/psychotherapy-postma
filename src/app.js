import { createApp, createSSRApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCopyright, faEnvelope, faFile } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import createAppRouter from './router'
import createAppI18n from './plugins/i18n'

library.add(faCopyright, faEnvelope, faLocationDot, faFile, faPhone)

export function createApplication({ history, hydrate = false } = {}) {
    const app = (hydrate ? createSSRApp : createApp)(App)
    const router = createAppRouter(history)
    const i18n = createAppI18n()
    app.component('font-awesome-icon', FontAwesomeIcon)
    router.beforeEach(to => {
        i18n.global.locale.value = to.meta.locale || 'nl'
    })
    app.use(i18n)
    app.use(router)
    return { app, router, i18n }
}