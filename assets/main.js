'use strict'

const gimmekeycodes = require('./gimmekeycodes')

document.addEventListener('keydown', function (e) {
  gimmekeycodes.update(e)
})
