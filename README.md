<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <br>
  <br>

  <h1>Webpack5 Multi Page</h1>
</div>

#### A simple [demo](https://ray1413.github.io/webpack-multi-page/dist/ "demo") about using webpack to build mutil page website (with jQuery, bootstrap and font awesome).

### 1. Project structure
```text
webpack-multi-page
│  .gitignore
│  .nojekyll
│  package.json
│  README.md
│  webpack.config.js
│  yarn.lock
│
├─dist
│  │  about.html
│  │  index.html
│  │  react-demo.html
│  │
│  ├─css
│  │      623.css
│  │      703.css
│  │      775.css
│  │      react-demo.css
│  │
│  ├─font
│  │      fa-brands-400.eot      
│  │      fa-brands-400.ttf      
│  │      fa-brands-400.woff     
│  │      fa-brands-400.woff2    
│  │
│  ├─img
│  │      fa-brands-400.svg      
│  │
│  └─js
│          169.js
│          169.js.LICENSE.txt    
│          623.js
│          623.js.LICENSE.txt
│          775.js
│          775.js.LICENSE.txt
│          about.js
│          index.js
│          react-demo.js
│
├─src
│  │  about.html
│  │  index.html
│  │  react-demo.html
│  │
│  ├─css
│  │      bootstrap.sass
│  │      react-demo.less
│  │
│  ├─img
│  │      webpack-logo.svg
│  │
│  ├─js
│  │  │  about.js
│  │  │  index.js
│  │  │  react-demo.jsx
│  │  │
│  │  ├─common
│  │  │      navbar.js
│  │  │
│  │  └─ReactComponents
│  │      │  App.jsx
│  │      │  AppContent.jsx
│  │      │  AppLayout.jsx
│  │      │  AppTitle.jsx
│  │      │
│  │      └─ComponentCardList
│  │              ButtonCard.jsx
│  │              IconCard.jsx
│  │              index.jsx
│  │              TypographyCard.jsx
│  │
│  └─partial
│          navbar.html
│
└─webpakc-config
        asset-module.js
        babelLoader.js
        css-rules.js
        entry-point.js
        extensions.js
        htmlRule.js
        jsRules.js
        jsxRules.js
        markdownRule.js
```

### 2. webpack.config.js
```javascript
const path = require('path')
const htmlRule = require('./webpakc-config/htmlRule')
const { jsRule, tsRule } = require('./webpakc-config/jsRules')
const { cssRule, lessRule, sassRule, miniCssExtractPlugin } = require('./webpakc-config/css-rules')
const { imgRule, fontRule } = require('./webpakc-config/asset-module')
const extensions = require('./webpakc-config/extensions')
const jsxRule = require('./webpakc-config/jsxRules')
const markdownRule = require('./webpakc-config/markdownRule')

module.exports = env => {
  const getEntryPoint = require('./webpakc-config/entry-point')
  const { entryPoints, HTMLWebpackPlugins } = getEntryPoint(env.gh)

  return {
    entry: {
      ...entryPoints,
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      clean: true,
      // environment: { // Compatible for IE, equals "target: ['web', 'es5']" below
      //   arrowFunction: false,
      //   const: false
      // }
    },
    optimization: {
      splitChunks: { // extract common dependencies
        chunks: 'all',
      },
    },
    target: ['web', 'es5'],
    module: {
      rules: [
        htmlRule,
        jsRule,
        tsRule,
        cssRule,
        lessRule,
        sassRule,
        imgRule,
        fontRule,
        jsxRule,
        markdownRule,
      ]
    },
    plugins: [
      ...HTMLWebpackPlugins,
      miniCssExtractPlugin,
    ],
    resolve: {
      extensions
    }
  }
}
```