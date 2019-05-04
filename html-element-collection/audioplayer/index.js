'use strict';

function btnClick() {
  switch(this.className) {
    case 'playstate':
      if((music.currentTime > 0) && (!music.paused)) {
        music.pause();
        playerState.classList.remove('play');
        break;
      }  
      if(music.paused) {
        songTitle.title = musicNames[songIndex];
        music.play();
        playerState.classList.add('play');
      }   
      break;
    case 'stop':
      music.pause();
      music.currentTime = 0;
      playerState.classList.remove('play');
      break;
    case 'next':
      songIndex += 1; 
      if(songIndex > musicStore.length - 1) songIndex = 0;
      music.src = musicStore[songIndex];
      songTitle.title = musicNames[songIndex];
      if(playerState.classList.contains('play')) music.play();
      break;
    case 'back':
      songIndex -= 1; 
      if(songIndex < 0) songIndex = musicStore.length - 1;
      music.src = musicStore[songIndex];
      songTitle.title = musicNames[songIndex];
      if(playerState.classList.contains('play')) music.play();
      break;
    default:
      break;
  }
}

const musicStore = ['mp3/LA Chill Tour.mp3', 'mp3/LA Fusion Jam.mp3', 'mp3/This is it band.mp3'];
const musicNames = ['LA Chill Tour', 'LA Fusion Jam', 'This is it band'];
const songTitle = document.getElementsByClassName('title')[0];
let songIndex = 0;
const music = document.getElementsByTagName('audio')[0];
music.src = musicStore[songIndex];

const playerState = document.getElementsByClassName('mediaplayer')[0];

const buttonsPanel = document.getElementsByClassName('buttons')[0];
const buttons = buttonsPanel.getElementsByTagName('button');

Array.from(buttons).forEach(button => { 
  button.onclick = btnClick; 
});