// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,

  app: {
    head: {
      title: 'Cumple María 🎉',
      meta: [
        { name: 'description', content: 'Un portal romántico y personalizado 💖' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'motion-v/nuxt',
  ],
  components: [
    {
      path: './app/components',
      pathPrefix: false,
    }
  ],
  nitro: {
    preset: 'vercel'
  }
})