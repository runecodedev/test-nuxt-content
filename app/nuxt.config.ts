// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      { code: 'en', name: 'English', language: 'en-US' },
      { code: 'pl', name: 'Polski', language: 'pl-PL' },
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'pl',
  },
  content: {
    renderer: {
      anchorLinks: {
        h2: false,
        h3: false,
        h4: false,
        h5: false,
        h6: false,
      }
    }
  }
})