'use strict'

const gimmekeycodes = require('./gimmekeycodes')

document.addEventListener('keydown', function (e) {
  if (!e.metaKey) {
    e.preventDefault()
  }
  gimmekeycodes.update(e)
})
