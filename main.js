'use strict';

let quickguide = document.querySelector('.quickguide');
let hiddeninput = document.querySelector('input');
let dummyinput = document.querySelector('.dummy');
let keycodeDisplay = document.querySelector('.keycodeDisplay');
let charcodeDisplay = document.querySelector('.charcodeDisplay');
let keyboardKey = document.querySelector('.keyboardKey');
let tip = document.querySelector('.tip');
let keyCodeOnKeyDown = 0;
let charCodeOnKeyPress = 0;

ultimatefocus(hiddeninput);
eventFire(hiddeninput, 'click');

hiddeninput.onkeydown = function(event) {
  keyCodeOnKeyDown = (event.keyCode ? event.keyCode : event.which);
  if (!event.metaKey && keyCodeOnKeyDown !== 0) {
    event.preventDefault();
  }
  //Styling
  quickguide.style.display = 'none';
  keycodeDisplay.style.display = 'inline-block';
  tip.style.display = 'none';
  keyboardKey.style.display = 'inline-block';
  keycodeDisplay.innerHTML = '<h1 class="keycodeNum">' + keyCodeOnKeyDown + '</h1>';

  copyToClipboard(dummyinput);
  ultimatefocus(hiddeninput);
  displayKeyCodeName();
};
hiddeninput.onkeypress = function(event) {
  charCodeOnKeyPress = event.charCode;
  if (keyCodeOnKeyDown !== 0) {
    return;
  } else if (charCodeOnKeyPress === 209 || charCodeOnKeyPress === 241) {
    keycodeDisplay.innerHTML = '<h1 class="keycodeNum">192</h1>';
  } else if (charCodeOnKeyPress === 199 || charCodeOnKeyPress === 231) {
    keycodeDisplay.innerHTML = '<h1 class="keycodeNum">191</h1>';
  }
  copyToClipboard(dummyinput);
  ultimatefocus(hiddeninput);
  displayKeyCodeName();
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
  displayKeyCodeName();
}

document.onclick = function() {
  ultimatefocus(hiddeninput);
};

//This is for firefox, some key events are not triggered if a text input isn't on focus!
function ultimatefocus(target) {
  target.focus();
  target.value = '';
}


function copyToClipboard(target) {
  let keycodeNum = document.querySelector('.keycodeNum');
  target.value = keycodeNum.innerHTML;
  target.select();
  try {
    let successful = document.execCommand('copy');
    let msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
};

function displayKeyCodeName() {
  let keycodesKeys = {
    3: "break",
    8: "backspace' or 'delete",
    9: "tab",
    12: 'clear',
    13: "enter",
    16: "shift",
    17: "ctrl",
    18: "alt",
    19: "pause' or 'break",
    20: "caps lock",
    27: "escape",
    32: "space bar",
    33: "page up",
    34: "page down",
    35: "end",
    36: "home",
    37: "left arrow",
    38: "up arrow",
    39: "right arrow",
    40: "down arrow ",
    41: "select",
    42: "print",
    43: "execute",
    44: "print screen",
    45: "insert",
    46: "delete",
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    58: ":",
    59: "firefox semicolon' or 'equals",
    60: "<",
    61: "firefox equals",
    65: "a",
    66: "b",
    67: "c",
    68: "d",
    69: "e",
    70: "f",
    71: "g",
    72: "h",
    73: "i",
    74: "j",
    75: "k",
    76: "l",
    77: "m",
    78: "n",
    79: "o",
    80: "p",
    81: "q",
    82: "r",
    83: "s",
    84: "t",
    85: "u",
    86: "v",
    87: "w",
    88: "x",
    89: "y",
    90: "z",
    91: "windows (left)', 'chromebook search' or '⌘ (left)",
    92: "windows (right)",
    93: "windows menu' or ⌘ '(right)",
    96: "numpad 0",
    97: "numpad 1",
    98: "numpad 2",
    99: "numpad 3",
    100: "numpad 4",
    101: "numpad 5",
    102: "numpad 6",
    103: "numpad 7",
    104: "numpad 8",
    105: "numpad 9",
    106: "multiply",
    107: "add",
    108: "firefox numpad period",
    109: "subtract",
    110: "decimal point",
    111: "divide",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    124: "F13",
    125: "F14",
    126: "F15",
    127: "F16",
    128: "F17",
    129: "F18",
    130: "F19",
    131: "F20",
    132: "F21",
    133: "F22",
    134: "F23",
    135: "F24",
    144: "num lock",
    145: "scroll lock",
    160: "^",
    163: "#",
    167: "chromebook page forward",
    171: "~ + *' or '* + ]",
    173: "mute' or 'unmute",
    174: "decrease volume level",
    175: "increase volume level",
    176: "next",
    177: "previous",
    178: "stop",
    179: "play' or 'pause",
    180: "e-mail",
    186: "semi-colon' or 'ñ",
    187: "equal sign' or '* + ]",
    188: "comma",
    189: "dash",
    190: "period",
    191: "forward slash' or 'ç",
    192: "grave accent' or 'ñ",
    193: "?, /' or '°",
    194: "chrome numpad period",
    219: "open bracket",
    220: "back slash",
    221: "close bracket",
    222: "single quote' or '¨ ´ {",
    223: "`",
    224: "firefox left ⌘' or 'firefox right ⌘",
    225: "altgr",
    226: "< /git >",
    230: "GNOME Compose",
    233: "XF86Forward",
    234: "XF86Back",
    255: "toggle touchpad"
  };
  let keycodeNum = document.querySelector('.keycodeNum');
  let keypressed = keycodesKeys[keycodeNum.innerHTML];
  if (keycodeNum.innerHTML === '0') {
    ultimatefocus(hiddeninput);
    keyboardKey.innerHTML = "<h3>Wish i knew what you pressed! <a href='https://github.com/elementh/gimme-keycodes/issues/new?title=Found a missing keycode&body=I also accept pull requests! ;)'>Why don't you let me know?</a></h3>"
  } else if (keypressed.charAt(0) === 'a' || keypressed.charAt(0) === 'e' || keypressed.charAt(0) === 'i' || keypressed.charAt(0) === 'o' || keypressed.charAt(0) === 'u') {
    keyboardKey.innerHTML = "<h3>You pressed an '" + keypressed + "' key!</h3>"
  } else {
    keyboardKey.innerHTML = "<h3>You pressed a '" + keypressed + "' key!</h3>"
  };
};
