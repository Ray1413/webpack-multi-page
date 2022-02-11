let babelLoader = require('./babelLoader')
babelLoader = JSON.parse(JSON.stringify(babelLoader))
babelLoader.options.presets.unshift('@babel/preset-react')

const jsxRule = {
  test: /\.jsx$/i,
  use: [
    babelLoader
  ],
  exclude: /node_modules/
}

module.exports = jsxRule