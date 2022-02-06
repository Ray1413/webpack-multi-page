let babelLoader = require('./babelLoader')
babelLoader = JSON.parse(JSON.stringify(babelLoader))
babelLoader.options.presets.unshift('@babel/preset-react')

const jsxRule = {
  test: /\.jsx$/,
  use: [
    babelLoader
  ],
  exclude: /node_modules/
}

module.exports = jsxRule