if (window.globalVar) {
  const div = document.createElement('div')
  div.innerText = window.globalVar
  div.style.cssText = 'text-align: center; height: 100vh; background: green'
  document.body.appendChild(div)
}