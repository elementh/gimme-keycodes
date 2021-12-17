'use strict'

const gimmekeycodes = require('./gimmekeycodes')

document.addEventListener('keydown', function (e) {
  if (!e.metaKey) {
    e.preventDefault()
  }
  gimmekeycodes.update(e)
  if (gtag)
  {
    gtag("event", "key_press",{
      key: e.key,
      keyCode: e.keyCode,
      eventCode: e.code
    })
  }
})
