const path = require('path')
const htmlRule = require('./webpakc-config/htmlRule')
const { jsRule, tsRule } = require('./webpakc-config/jsRules')
const { cssRule, lessRule, sassRule, miniCssExtractPlugin } = require('./webpakc-config/css-rules')
const { imgRule, fontRule } = require('./webpakc-config/asset-module')
const extensions = require('./webpakc-config/extensions')
const jsxRule = require('./webpakc-config/jsxRules')

module.exports = env => {
  const getEntryPoint = require('./webpakc-config/entry-point')
  const { entryPoints, HTMLWebpackPlugins } = getEntryPoint(env.gh)

  return {
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
        jsxRule,
      ]
    },
    plugins: [
      ...HTMLWebpackPlugins,
      miniCssExtractPlugin,
    ],
    resolve: {
      extensions
    }
  }
}