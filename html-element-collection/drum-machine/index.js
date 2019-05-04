'use strict';

function btnClick() {
 this.getElementsByTagName('audio')[0].currentTime = 0
 this.getElementsByTagName('audio')[0].play()
}

const drum = document.getElementsByClassName('drum-kit')[0];
const buttons = drum.getElementsByTagName('li');

Array.from(buttons).forEach(button => { 
  button.onclick = btnClick; 
});