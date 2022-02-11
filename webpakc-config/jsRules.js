const babelLoader = require('./babelLoader')

const jsRule = {
  test: /\.js$/i,
  use: [
    babelLoader
  ],
  exclude: /node_modules/
}

const tsRule = {
  test: /\.ts$/i,
  use: [
    babelLoader,
    'ts-loader'
  ],
  exclude: /node_modules/
}

module.exports = {
  jsRule,
  tsRule
}