'use strict'

function display (text) {
  let display = document.querySelector('.display')
  display.innerHTML = '<h1>' + text + '<h1>'
}

function key (text) {
  let key = document.querySelector('.key')
  if (isVowel(text)) {
    key.innerHTML = '<h3>You pressed an \'' + text + '\' key!</h3>'
  } else {
    key.innerHTML = '<h3>You pressed a \'' + text + '\' key!</h3>'
  }
}

function isVowel (text) {
  if (text.charAt(0) === 'a' || text.charAt(0) === 'e' || text.charAt(0) === 'i' || text.charAt(0) === 'o' || text.charAt(0) === 'u') {
    return true
  } else {
    return false
  }
}

module.exports = {
  display: display,
  key: key
}
