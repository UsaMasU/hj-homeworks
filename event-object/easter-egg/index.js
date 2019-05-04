'use strict';

function checkCode(event) { 
  event.code == code[keyIndex] ? keyIndex += 1: keyIndex = 0;
  if(keyIndex == code.length) secret.classList.add('visible');  
}

let keyIndex = 0;

const code = ['KeyY', 'KeyT', 'KeyN', 'KeyJ', 'KeyK', 'KeyJ', 'KeyU', 'KeyB', 'KeyZ'];
const secret = document.getElementsByClassName('secret')[0];

document.addEventListener('keydown', checkCode);
