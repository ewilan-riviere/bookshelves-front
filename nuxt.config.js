export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Bookshelves',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/app', '~/assets/css/tooltip'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  loading: {
    color: '#800080',
    height: '5px',
  },

  plugins: [
    '~/plugins/icons-loader',
    {
      src: '~/plugins/vue-tailwind-screens',
      ssr: false,
    },
    // https://github.com/ndelvalle/v-click-outside
    '~/plugins/v-click-outside',
    '~/plugins/v-tooltip',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components/global',
    {
      path: '~/components/global',
      global: true,
      prefix: 'global',
      extensions: ['vue'],
    },
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/router-module
    // '@nuxtjs/router',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.API_URL,
  },

  // router: {
  //   middleware: ['auth'],
  // },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
