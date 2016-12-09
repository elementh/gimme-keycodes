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
