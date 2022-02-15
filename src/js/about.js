import 'bootstrap'
import '../css/bootstrap.sass'
import './common/navbar'
import readme from '../../README.md'
import 'github-markdown-css'
import hljs from 'highlight.js'
import 'highlight.js/styles/vs.css'

const body = document.querySelector('body')
const mdContainer = document.createElement('div')

mdContainer.innerHTML = `
<div class='container mt-5 p-3 rounded' style='max-width: 980px;background-color: white;'>
  <div class='border-bottom mb-2 pb-2'>README.md</div>
  <div class='markdown-body'>${readme}</div>
</div>
`

mdContainer.querySelectorAll('pre code').forEach((el) => {
  if (el.className.indexOf('language-') >= 0) {
    hljs.highlightElement(el)
  }
})

body.append(mdContainer)