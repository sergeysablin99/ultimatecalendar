const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({

  outputDir: '../docs/',

  publicPath: process.env.NODE_ENV === 'production'
      ? '././'
      : '/',

  chainWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config
          .output
          .filename('[name].[hash].js')
          .end()
    }
  }
})
