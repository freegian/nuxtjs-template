const path = require('path')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        }
      }
    ]
  })
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  })
  config.module.rules.push({
    test: /\.vue$/,
    loader: 'storybook-addon-vue-info/loader',
    enforce: 'post'
  })
  config.resolve.alias = {
    vue: 'vue/dist/vue.esm.js',
    '@': path.resolve(__dirname, '../src'),
    '~': path.resolve(__dirname, '../src'),
    '@components': path.resolve(__dirname, '../src/components')
  }

  return config
}
