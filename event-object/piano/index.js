'use strict';

function btnClick(event) {
 let soundPath;
 let keyNum;
 
 if(piano.classList.contains('lower')) soundPath = 'sounds/lower/';
 if(piano.classList.contains('middle')) soundPath = 'sounds/middle/';
 if(piano.classList.contains('higher')) soundPath = 'sounds/higher/';
 
 if(event.currentTarget === buttons[0]) keyNum = 1;
 else if(event.currentTarget === buttons[1]) keyNum = 2;
 else if(event.currentTarget === buttons[2]) keyNum = 3;
 else if(event.currentTarget === buttons[3]) keyNum = 4;
 else if(event.currentTarget === buttons[4]) keyNum = 5;
 else return;
 
 sounds[keyNum - 1].src = soundPath + soundStore[keyNum - 1];
 sounds[keyNum - 1].play();
}


function pianoMode(event) {
  event.preventDefault();
  const mode = event.target.getElementsByTagName('ul')[0];
  

  if (event.shiftKey) { 
    if(mode.classList.contains('middle')) mode.classList.remove('middle'); 
    if(mode.classList.contains('higher')) mode.classList.remove('higher');
    mode.classList.add('lower');
    return;
  } 
  
  if (event.altKey) { 
    if(mode.classList.contains('middle')) mode.classList.remove('middle');
    if(mode.classList.contains('lower')) mode.classList.remove('lower');
    mode.classList.add('higher'); 
    return;
  } 
  
  if(!(event.altKey || event.altKey)) {
    if(mode.classList.contains('higher')) mode.classList.remove('higher');
    if(mode.classList.contains('lower')) mode.classList.remove('lower');
    mode.classList.add('middle');
  }
}

const soundStore = ['first.mp3', 'second.mp3', 'third.mp3', 'fourth.mp3','fifth.mp3'];
const piano = document.getElementsByClassName('set')[0]; 
const buttons = piano.getElementsByTagName('li'); 
const sounds = piano.getElementsByTagName('audio');

document.addEventListener('keydown', pianoMode);
document.addEventListener('keyup', pianoMode);
Array.from(buttons).forEach(button => { button.addEventListener('click', btnClick); });