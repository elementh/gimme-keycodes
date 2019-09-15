(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict'

const selectors = require('./selectors')

function update (e) {
  changehtml(e.key, e.keyCode, e.code)
}

function changehtml (key, keycode, eventCode) {
  selectors.display(keycode)
  selectors.key(key, eventCode)
}

module.exports = {
  update: update
}

},{"./selectors":3}],2:[function(require,module,exports){
'use strict'

const gimmekeycodes = require('./gimmekeycodes')

document.addEventListener('keydown', function (e) {
  if (!e.metaKey) {
    e.preventDefault()
  }
  gimmekeycodes.update(e)
})

},{"./gimmekeycodes":1}],3:[function(require,module,exports){
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

},{}]},{},[2]);
