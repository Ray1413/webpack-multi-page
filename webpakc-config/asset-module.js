const imgRule = {
  test: /\.(png|jpe?g|gif|svg)$/i,
  type: 'asset',
  generator: {
    filename: 'img/[name][ext]'
  }
}

const fontRule = {
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'font/[name][ext]'
  }
}

module.exports = {
  imgRule,
  fontRule,
}