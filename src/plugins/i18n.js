import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import nl from '@/locales/nl.json'

export default function createAppI18n(locale = 'nl') {
  return createI18n({
    locale,
    fallbackLocale: 'nl',
    messages: {
      en,
      nl,
    },
    allowComposition: true,
    legacy: false,
    warnHtmlMessage: false,
  })
}
