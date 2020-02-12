const execCopy = (code) => {
  let temp = document.createElement('div')
  temp.appendChild(document.createElement('pre')).textContent = code
  let s = temp.style
  s.position = 'fixed'
  s.left = '-100%'
  document.body.appendChild(temp)
  document.getSelection().selectAllChildren(temp)
  let result = document.execCommand('copy')
  document.body.removeChild(temp)
  if (result) {
    alert('コピーできました')
  } else {
    alert('このブラウザでは対応していません')
  }
}

export default execCopy