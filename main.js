'use strict';

let quickguide = document.querySelector('.quickguide');
let hiddeninput = document.querySelector('input');
let dummyinput = document.querySelector('.dummy');
let keycodeDisplay = document.querySelector('.keycodeDisplay');
let charcodeDisplay = document.querySelector('.charcodeDisplay');
let keyCodeOnKeyDown = 0;
let charCodeOnKeyPress = 0;
ultimatefocus(hiddeninput);

hiddeninput.onkeydown = function(event) {
  keyCodeOnKeyDown = (event.keyCode ? event.keyCode : event.which);
  quickguide.style.display = 'none';
  keycodeDisplay.style.display = 'table-cell';
  keycodeDisplay.innerHTML = '<h1 class="keycodeNum">' + keyCodeOnKeyDown + '</h1>';
  copyToClipboard(dummyinput);
  ultimatefocus(hiddeninput);
};
hiddeninput.onkeypress = function(event) {
  charCodeOnKeyPress = event.charCode;
  if (keyCodeOnKeyDown !== 0) {} else if (charCodeOnKeyPress === 209 || charCodeOnKeyPress === 241) {
    keycodeDisplay.innerHTML = '<h1 class="keycodeNum">192</h1>';
  } else if (charCodeOnKeyPress === 199 || charCodeOnKeyPress === 231) {
    keycodeDisplay.innerHTML = '<h1 class="keycodeNum">191</h1>';
  }
  copyToClipboard(dummyinput);
  ultimatefocus(hiddeninput);
};
hiddeninput.onkeyup = function(event) {
  if (keyCodeOnKeyDown === 0 && hiddeninput.value === "´") {
    keycodeDisplay.innerHTML = '<h1 class="keycodeNum">222</h1>';
    copyToClipboard(dummyinput);
    ultimatefocus(hiddeninput);
  } else if (keyCodeOnKeyDown === 0 && hiddeninput.value === "`") {
    keycodeDisplay.innerHTML = '<h1 class="keycodeNum">219</h1>';
    copyToClipboard(dummyinput);
    ultimatefocus(hiddeninput);
  } else if (keyCodeOnKeyDown === 0 && hiddeninput.value === "¡") {
    keycodeDisplay.innerHTML = '<h1 class="keycodeNum">221</h1>';
    copyToClipboard(dummyinput);
    ultimatefocus(hiddeninput);
  }

}



document.onclick = function() {
  ultimatefocus(hiddeninput);
};

//This is for firefox, some key events are not triggered if a text input isn't on focus!
function ultimatefocus(target) {
  target.focus();
  target.value = '';
};
/*
try {
  var successful = document.execCommand('copy');
  var msg = successful ? 'successful' : 'unsuccessful';
  console.log('Copying text command was ' + msg);
} catch (err) {
  console.log('Oops, unable to copy');
}*/

function copyToClipboard(target) {
  let keycodeNum = document.querySelector('.keycodeNum');
  target.value = keycodeNum.innerHTML;
  target.select();
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
};
