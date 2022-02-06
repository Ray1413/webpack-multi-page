function getEntryPoint(gh) {
  const path = require('path')
  const fs = require('fs');
  const HTMLWebpackPlugin = require('html-webpack-plugin')
  const extensions = require('./extensions')

  const srcPath = path.join(__dirname, '../src');
  const entryPoints = {}
  const HTMLWebpackPlugins = []

  try {
    let filenames = fs.readdirSync(srcPath)
    filenames = filenames.filter(file => path.extname(file) === '.html')

    filenames.forEach(filename => {
      const baseName = path.basename(filename, '.html')

      for (let i = 0; i < extensions.length; i++) {
        if (fs.existsSync(`${srcPath}/js/${baseName}${extensions[i]}`)) {
          entryPoints[baseName] = `${srcPath}/js/${baseName}${extensions[i]}`
          break
        }
      }

      const options = {
        filename: `${baseName}.html`,
        template: `${srcPath}/${baseName}.html`,
        chunks: [`${baseName}`],
      }

      if (gh) {
        options.base = { 'href': 'https://ray1413.github.io/webpack-multi-page/dist/' }
      }

      HTMLWebpackPlugins.push(new HTMLWebpackPlugin(options))
    })


    return {
      entryPoints,
      HTMLWebpackPlugins
    }
    // console.log(entryPoints)
  } catch (e) {
    console.log(e)
    return {}
  }
}

module.exports = getEntryPoint
