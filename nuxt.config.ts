// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: { port: 3030 },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/ui',
    '@tresjs/nuxt',
    '@nuxtjs/google-fonts'
  ],
  colorMode: { preference: 'light' },
  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    display: 'swap'
  }
})