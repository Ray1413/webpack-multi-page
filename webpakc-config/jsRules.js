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