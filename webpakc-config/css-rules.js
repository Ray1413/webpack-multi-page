const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [
        [
          'postcss-preset-env',
          {
            browsers: 'last 2 version'
          }
        ]
      ]
    }
  }
}

// const styleLoader = 'style-loader'
const styleLoader = MiniCssExtractPlugin.loader

const cssRule = {
  test: /\.css$/i,
  use: [
    styleLoader,
    'css-loader',
    postcssLoader
  ]
}

const lessRule = {
  test: /\.(less)$/i,
  use: [
    styleLoader,
    'css-loader',
    postcssLoader,
    'less-loader'
  ]
}

const sassRule = {
  test: /\.s[ac]ss$/i,
  use: [
    styleLoader,
    'css-loader',
    postcssLoader,
    'sass-loader'
  ]
}

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: 'css/[name].css'
})

module.exports = {
  cssRule,
  lessRule,
  sassRule,
  miniCssExtractPlugin
}