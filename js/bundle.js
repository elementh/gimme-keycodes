(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict'

const selectors = require('./selectors')

function update (e) {
  changehtml(e.key, e.keyCode)
}

function changehtml (key, keycode) {
  selectors.display(keycode)
  selectors.key(key)
}

module.exports = {
  update: update
}

},{"./selectors":3}],2:[function(require,module,exports){
'use strict'

const gimmekeycodes = require('./gimmekeycodes')

document.addEventListener('keydown', function (e) {
  gimmekeycodes.update(e)
})

},{"./gimmekeycodes":1}],3:[function(require,module,exports){
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

},{}]},{},[2]);
