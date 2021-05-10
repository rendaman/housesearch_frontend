const GAID = 'G-3WBC205G07'
const GAcode = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GAID}');`

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ハウスメーカー日本最大級口コミサイト HOUSE SEARCH',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'keywords', name: 'keywords', content: 'ハウスメーカー,口コミ,見積もり' },

      { hid: 'og:site_name', property: 'og:site_name', content: 'ハウスメーカー日本最大級口コミサイト HOUSE SEARCH' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://rendaman.net' },
      { hid: 'og:title', property: 'og:title', content: 'ハウスメーカー日本最大級口コミサイト HOUSE SEARCH' },
      { hid: 'og:description', property: 'og:description', content: '全国のハウスメーカーの口コミ、費用明細が見られるのはHOUSE SEARCHだけ！人気のハウスメーカーランキングや工務店、設計事務所も検索' },
      { hid: 'og:image', property: 'og:image', content: 'https://rendaman.net' },

      { hid: 'fb:app_id', property: 'fb:app_id', content: 'App-ID' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@Twitter' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css', integrity:'sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1', crossorigin: 'anonymous'},
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css'},
      { rel: 'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'}
    ],
    script: [
      { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js", integrity:"sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW", crossorigin:"anonymous"},
      { src: "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js" },
      { src: "https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js" },
      {
        hid: 'GAsrc',
        src: 'https://www.googletagmanager.com/gtag/js?id=' + GAID
      },
      {
        hid: 'GAcode',
        innerHTML: GAcode
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'GAsrc': ['innerHTML'],
      'GAcode': ['innerHTML']
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/base.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  axios: {
    proxy: true,
  },
  
  proxy: {
    '/api/': 'http://localhost:8000',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
