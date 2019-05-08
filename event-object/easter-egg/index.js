'use strict';

function checkCode(event) { 
  event.code == code[keyIndex] ? keyIndex += 1: keyIndex = 0;
  if(keyIndex == code.length) secret.classList.add('visible');  
  
  if(event.ctrlKey && event.altKey && event.code == 'KeyT') {
    console.log('ctrl+alt+t');
    panelNav.classList.contains('visible') ? panelNav.classList.remove('visible') : panelNav.classList.add('visible');
  }
}

let keyIndex = 0;

const code = ['KeyY', 'KeyT', 'KeyN', 'KeyJ', 'KeyK', 'KeyJ', 'KeyU', 'KeyB', 'KeyZ'];
const secret = document.getElementsByClassName('secret')[0];
const panelNav = document.getElementsByTagName('nav')[0];

document.addEventListener('keydown', checkCode);
