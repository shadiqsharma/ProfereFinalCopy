export default {

    generate: {
        fallback: true
    },

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'Profere',
        titleTemplate: '%s || Profere',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          {rel: 'font', type: 'text/css', href:'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'},
          {rel: 'stylesheet',href:"mdbvue/lib/mdbvue.css"},
          {rel: 'stylesheet', href:'https://cdn.jsdelivr.net/npm/mdb-vue-ui-kit/css/mdb.min.css'},
          {rel: 'script', src:"https://cdn.jsdelivr.net/npm/mdb-vue-ui-kit/js/mdb.umd.min.js"}],



    },



    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        'assets/scss/style.scss',
        'mdbvue/lib/css/mdb.min.css'

    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/vue-awesome-swiper.js',
        '~/plugins/silentbox.js',
        '~/plugins/vuejs-paginate.js',
        '~/plugins/Mixitup.client.js',
      '~/plugins/auth.client.js',
        {
            src: "~/plugins/aos",
            ssr: false
        },
        {
            src: "~/plugins/typed.js",
            ssr: false
        },
      { src: "~plugins/crisp.js", mode: "client" },
      { src: "~/plugins/vuecount.js", mode: "client"} ,



    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
      '@nuxtjs/vuetify'
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        '@nuxtjs/style-resources',
      'mdbvue/nuxt',
      '@nuxtjs/apollo',
    ],
  mdbvue: {
   roboto:true,

  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || "http://typebyte.xyz:1337/graphql"
      }
    }
  },

    styleResources: {
        scss: [
            '~/assets/scss/_variables.scss',




        ],
      css:['mdbvue/lib/css/mdb.min.css','/assets/css/tailwindcss',]
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        extend(config, ctx) {
        },
      "transpile":[ 'mdbvue/lib/components'],
      extractCSS: true,
      loaders: {
          limit: 0,
      }
    },
    publicRuntimeConfig:{
      auth:{
        cookieName:'idToken',
        clientId: '289500001802-515nghj3up5ikfvutt50diefs44fagpc.apps.googleusercontent.com',
      },
    },
    privateRuntimeConfig:{

    },

}
