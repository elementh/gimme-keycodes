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
