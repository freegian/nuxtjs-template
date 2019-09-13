const path = require('path')

const sassLoaderOptions = {
  implementation: require('sass'),
  fiber: require('fibers')
}

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
  const sassExtensions = ['.sass', '.scss']
  sassExtensions.forEach(extension => {
    config.module.rules.push({
      test: new RegExp(extension + '$'),
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: Object.assign(
            {},
            sassLoaderOptions,
            { data: extension === '.sass' ? "@import 'src/assets/css/_variables.scss'" : "@import 'src/assets/css/_variables.scss';" }
          )
        }
      ]
    })
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
