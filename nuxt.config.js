const pkg = require('./package')

module.exports = {
  mode: 'universal',
  head: {
    title: "Wisley and Company",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#fff' },

  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~assets/sass/global.css'
  ],

  plugins: [
    {src: '~plugins/element-ui', ssr: false,},
    {src: '~plugins/buefy', ssr: false,}
  ],

  build: {
    transpile: [/^element-ui/],
    extractCSS: true,
    extend(config, ctx) {
    }
  },

  generate: {
    transpile: [/^element-ui/],
    extractCSS: true,
    extend(config, ctx) {
    }
  }
}
