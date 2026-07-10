// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  future: {
    compatibilityVersion: 4, 
  },

  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxt/eslint'
  ],

  css: ['~/assets/css/style.css'],

  app: {
    baseURL: '/rassi_web/',
    head: {
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css' 
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
        },
      ],
      script: [
        { 
          src: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
          defer: true 
        }
      ]
    }
  },

  devtools: { enabled: true }
})
