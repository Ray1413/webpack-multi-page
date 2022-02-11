import 'bootstrap'
import '../css/bootstrap.sass'
import './common/navbar'
import readme from '../../README.md'

const body = document.querySelector('body')
const mdContainer = document.createElement('div')
const mdTitle = document.createElement('div')
const mdContent = document.createElement('div')

mdTitle.innerText = 'README.md'
mdTitle.classList.add('border-bottom', 'mb-2', 'pb-2')
mdContent.innerHTML = readme
mdContainer.append(mdTitle, mdContent)
mdContainer.classList.add('container', 'mt-5', 'p-3', 'bg-white', 'rounded')

body.append(mdContainer)