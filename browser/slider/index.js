'use strict';

const img = document.getElementById('slider'); 
const pics = ["airmax.png", "airmax-jump.png", "airmax-on-foot.png", "airmax-playground.png", "airmax-top-view.png"];
let picNum = 1;

img.src = "i/" + pics[picNum - 1];

function showPics() {
  img.src = "i/" + pics[picNum];
  picNum += 1; 
  if(picNum > pics.length - 1) picNum = 0;
} setInterval(showPics, 5000);
