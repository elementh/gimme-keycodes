'use strict'

function display (text) {
  const displayElement = document.querySelector('.display')
  displayElement.innerHTML = '<h1>' + text + '<h1>'
}

function key (text, eventCode) {
  const keyElement = document.querySelector('.key')
  if (isVowel(text)) {
    keyElement.innerHTML = '<h3>You pressed an \'' + text + '\' key!</h3>'
  } else {
    keyElement.innerHTML = '<h3>You pressed a \'' + text + '\' key!</h3>'
  }
  keyElement.innerHTML += '<br>'
  keyElement.innerHTML += '<p>event.code: \'' + eventCode + '\'</p>'
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
