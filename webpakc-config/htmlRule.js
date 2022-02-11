const htmlRule = {
  test: /\.html$/i,
  loader: 'html-loader',
  options: {
    interpolate: 'require',
  }
}

module.exports = htmlRule