'use strict';

function btnClick(event) {
 if(!(event.target.className == 'drum-kit')) {
   if(event.target.className == 'drum-kit__drum__type') {
     event.path[1].getElementsByTagName('audio')[0].play();
   }
   else event.target.getElementsByTagName('audio')[0].play();
 }
 else return;
}

const buttons = document.getElementsByClassName('drum-kit')[0];
buttons.onclick = btnClick;