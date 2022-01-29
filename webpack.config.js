const path = require('path')
const { entryPoints, HTMLWebpackPlugins } = require('./webpakc-config/entry-point')
const htmlRule = require('./webpakc-config/htmlRule')
const { jsRule, tsRule } = require('./webpakc-config/jsRules')
const { cssRule, lessRule, sassRule, miniCssExtractPlugin } = require('./webpakc-config/css-rules')
const { imgRule, fontRule } = require('./webpakc-config/asset-module')

module.exports = {
  entry: {
    ...entryPoints,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    clean: true,
    // environment: { // Compatible for IE, equals "target: ['web', 'es5']" below
    //   arrowFunction: false,
    //   const: false
    // }
  },
  optimization: {
    splitChunks: { // extract common dependencies
      chunks: 'all',
    },
  },
  target: ['web', 'es5'],
  module: {
    rules: [
      htmlRule,
      jsRule,
      tsRule,
      cssRule,
      lessRule,
      sassRule,
      imgRule,
      fontRule,
    ]
  },
  plugins: [
    ...HTMLWebpackPlugins,
    miniCssExtractPlugin,
  ],
  resolve: {
    extensions: ['.ts', '.js']
  }
}