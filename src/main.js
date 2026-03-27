import './main.scss'
import { renderHeader } from './components/header.js'

document.querySelector('#app').innerHTML = `
  ${renderHeader()}
`