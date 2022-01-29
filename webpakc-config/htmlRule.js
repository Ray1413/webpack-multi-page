const htmlRule = {
  test: /\.html$/,
  loader: 'html-loader',
  options: {
    interpolate: 'require',
  }
}

module.exports = htmlRule