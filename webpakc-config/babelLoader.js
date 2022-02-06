const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            'chrome': '88',
            'ie': '11'
          },
          'corejs': '3',
          'useBuiltIns': 'usage'
        }
      ]
    ]
  }
}

module.exports = babelLoader