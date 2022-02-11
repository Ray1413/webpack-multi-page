const markdownRule = {
  test: /\.md$/i,
  use: [
    {
      loader: "html-loader"
    },
    {
      loader: "markdown-loader",
    }
  ]
}

module.exports = markdownRule