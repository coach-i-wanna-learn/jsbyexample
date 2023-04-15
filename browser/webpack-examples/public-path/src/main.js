
import './dynamic-public-path' // 这个需要放在 entry 第一行
import './main.css'


document.body.innerHTML = "hello world"

import('./header.js')
import('./logo.svg').then(() => {
  console.log()
})
