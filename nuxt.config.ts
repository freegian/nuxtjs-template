import NuxtConfiguration from '@nuxt/config'
import { Configuration as WebpackConfiguration } from 'webpack'
// import theme from './config/vuetify'

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const config: NuxtConfiguration = {
  srcDir: 'src',

  devModules: ['@nuxtjs/vuetify'],
  vuetify: {
    // theme,
    customVariables: ['~/assets/css/_variables.scss'],
    treeShake: true
  },

  build: {
    extend(config: WebpackConfiguration, { isDev, loaders }) {
      if (isDev) {
        config.devtool = 'eval-source-map'
      }
      config.resolve = config.resolve || {}
      config.resolve.plugins = [new TsconfigPathsPlugin({ configFile: './tsconfig.json', extensions: ['.ts', '.vue'] })]
    }
  }
}

export default config
