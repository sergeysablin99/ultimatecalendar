const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'quasar'
  ],

  outputDir: '../docs/',

  publicPath: process.env.NODE_ENV === 'production'
      ? '././'
      : '/',

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  }
})
