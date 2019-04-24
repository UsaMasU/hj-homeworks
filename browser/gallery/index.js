'use strict';

const img = document.getElementById('currentPhoto'); 
const pics = ["breuer-building.jpg", "guggenheim-museum.jpg", "headquarters.jpg", "IAC.jpg", "new-museum.jpg"];
let picNum = 0;

img.src = "i/" + pics[picNum];

function showPics(picNum) {
  img.src = "i/" + pics[picNum];
}

function handleNextClick() {
  picNum += 1;
  if(picNum > pics.length - 1) picNum = 0;
  showPics(picNum);
}

function handlePrevClick() {
   picNum -= 1;
   if(picNum < 0) picNum = 4;
   showPics(picNum);
}

const buttonNext = document.getElementById('nextPhoto');
buttonNext.onclick = handleNextClick;

const buttonPrev = document.getElementById('prevPhoto');
buttonPrev.onclick = handlePrevClick;