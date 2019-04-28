'use strict';

function btnClick(event) {
  switch(event.target.className) {
    case 'playstate':
    case 'fa fa-pause':
    case 'fa fa-play': 
      if((music.currentTime > 0) && (!music.paused)) {
        music.pause();
        statePause.style.display = 'none';
        statePlay.style.display = 'block'
        break;
      }  
      if(music.paused) {
        songTitle.title = musicNames[songIndex];
        music.play();
        statePlay.style.display = 'none';
        statePause.style.display = 'block'
      }   
      break;
    case 'stop':
    case 'fa fa-stop':
      music.pause();
      music.currentTime = 0;
      statePause.style.display = 'none';
      statePlay.style.display = 'block'
      break;
    case 'next':
    case 'fa fa-forward':
      songIndex += 1; 
      if(songIndex > musicStore.length - 1) songIndex = 0;
      music.src = musicStore[songIndex];
      songTitle.title = musicNames[songIndex];
      statePause.style.display = 'none';
      statePlay.style.display = 'block'
      break;
    case 'back':
    case 'fa fa-backward':
      songIndex -= 1; 
      if(songIndex < 0) songIndex = musicStore.length - 1;
      music.src = musicStore[songIndex];
      songTitle.title = musicNames[songIndex];
      statePause.style.display = 'none';
      statePlay.style.display = 'block'
      break;  
    default:
      break;
  }
}

let musicStore = ['mp3/LA Chill Tour.mp3', 'mp3/LA Fusion Jam.mp3', 'mp3/This is it band.mp3'];
let musicNames = ['LA Chill Tour', 'LA Fusion Jam', 'This is it band'];
let songIndex = 0;
const music = document.getElementsByTagName('audio')[0];
music.src = musicStore[songIndex];

const statePlay = document.getElementsByClassName('fa fa-play')[0];
const statePause = document.getElementsByClassName('fa fa-pause')[0];
const songTitle = document.getElementsByClassName('title')[0];

const buttons = document.getElementsByClassName('buttons')[0];
buttons.onclick = btnClick;