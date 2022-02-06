const babelLoader = require('./babelLoader')

const jsRule = {
  test: /\.js$/,
  use: [
    babelLoader
  ],
  exclude: /node_modules/
}

const tsRule = {
  test: /\.ts$/,
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