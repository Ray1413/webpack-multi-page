const path = require('path')
const fs = require('fs');
const HTMLWebpackPlugin = require('html-webpack-plugin')

const srcPath = path.join(__dirname, '../src');
const entryPoints = {}
const HTMLWebpackPlugins = []

try {
  let filenames = fs.readdirSync(srcPath)
  filenames = filenames.filter(file => path.extname(file) === '.html')

  filenames.forEach(filename => {
    const baseName = path.basename(filename, '.html')

    if (fs.existsSync(`${srcPath}/js/${baseName}.js`)) {
      entryPoints[baseName] = `${srcPath}/js/${baseName}.js`
    } else if (fs.existsSync(`${srcPath}/js/${baseName}.ts`)) {
      entryPoints[baseName] = `${srcPath}/js/${baseName}.ts`
    }

    HTMLWebpackPlugins.push(new HTMLWebpackPlugin({
      filename: `${baseName}.html`,
      template: `${srcPath}/${baseName}.html`,
      chunks: [`${baseName}`]
    }))

  })

  // console.log(entryPoints)
} catch (e) {
  console.log(e)
}

module.exports = {
  entryPoints,
  HTMLWebpackPlugins
}
