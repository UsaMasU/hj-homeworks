'use strict';

let canvas = document.querySelector('#wall');
canvas.setAttribute('width', window.innerWidth);
canvas.setAttribute('height', window.innerHeight);
let ctx = canvas.getContext("2d");

let circles = [];
let crosses = [];
   
let circlesQuant = 0;
let crossesQuant = 0; 
let objects;

class ScreenObj {
  constructor(x = 0, y = 0, size = 0, type = '', color = 'white', moveType = 'wave_1', rotateAngle = 0, rotateSpeed = 0.2) {
    this.x = x;
    this.y = y;
    this.baseX = x;
    this.baseY = y;
    this.type = type;
    this.size = size;
    if(this.type == 'circle') this.circleSize = size * 12; 
    if(this.type == 'cross') this.crossSize = size * 20; 
    this.color = color;
    this.moveType = moveType;
    this.rotateSpeed = rotateSpeed;
    this.rotateAngle = rotateAngle;
  }
  
  nextPoint_1(time) {
    this.x =  this.baseX + Math.sin((50 + this.baseX + (time / 10)) / 100) * 3;
    this.y = this.baseY + Math.sin((45 + this.baseX + (time / 10)) / 100) * 4;
  }
  
  nextPoint_2(time) {
    this.x = this.baseX + Math.sin((this.baseX + (time / 10)) / 100) * 5;
    this.y = this.baseY + Math.sin((10 + this.baseX + (time / 10)) / 100) * 2;
  }
  
  move(time) {
    switch(this.moveType) {
      case 'wave_1':
        this.nextPoint_1(time);
        break;
      case 'wave_2':
        this.nextPoint_2(time);
        break;
      default:
    }
    this.draw();
  }
  
  draw() {
    ctx.beginPath();
    ctx.lineWidth = this.size * 5;
    ctx.strokeStyle = this.color;  
    switch(this.type) {
      case 'circle': 
        ctx.arc(this.x, this.y, this.circleSize, 0, (Math.PI/180) * 360);
        break;
   
   case 'cross':
        //this.rotateAngle += this.rotateSpeed;
        //if(this.rotateAngle > 360) this.rotateAngle = 0;
        //if(this.rotateAngle < 0) this.rotateAngle = 360;
        //ctx.translate(this.x, this.y);
        ctx.rotate(this.rotateAngle * Math.PI/180); 
              
        ctx.moveTo(this.x, this.y + this.crossSize);
        ctx.lineTo(this.x, this.y + this.crossSize);
        ctx.moveTo(this.x, this.y - this.crossSize);
        ctx.lineTo(this.x, this.y + this.crossSize);
        ctx.moveTo(this.x + this.crossSize, this.y);
        ctx.lineTo(this.x + this.crossSize, this.y);
        ctx.moveTo(this.x - this.crossSize, this.y);
        ctx.lineTo(this.x + this.crossSize, this.y);
        break;
      default:
    }
    ctx.stroke();
    ctx.closePath();
  }
  
}


function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
  
objects = randomInt(50, 200);
if(objects % 2 == 0) circlesQuant = objects / 2;
else circlesQuant = (objects + 1) / 2;
crossesQuant = circlesQuant;
    
for(let circle = 0; circle < circlesQuant; circle ++) {
  let posX =  randomInt(0, canvas.width);
  let posY =  randomInt(0, canvas.height);
  let size = randomFloat(0.1, 0.6);
  let moveType = '';
  randomInt(1, 2) == 1 ? moveType = 'wave_1': moveType = 'wave_2';
  circles.push(new ScreenObj(posX, posY, size, 'circle', 'white', moveType));
}
    
for(let cross = 0; cross < crossesQuant; cross ++) {
  let posX =  randomInt(0, canvas.width);
  let posY =  randomInt(0, canvas.height);
  let size = randomFloat(0.1, 0.6);
  let angle = randomFloat(0.0, 360.0);
  let angleSpeed = randomFloat(-0.2, 0.2);
  let moveType = '';
  randomInt(1, 2) == 1 ? moveType = 'wave_1': moveType = 'wave_2';
  crosses.push(new ScreenObj(posX, posY, size, 'cross', 'white', moveType, angle , angleSpeed));
}
  
function draw() {  
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;

     for(let circ of circles) {
       circ.move(Date.now());
     }
     
     for(let cross of crosses) {
       cross.move(Date.now());
     }
}
       
const FPS = 20;
function syncFrame() {
  draw();
  setTimeout(function() {         
    requestAnimationFrame(syncFrame);
  }, 1000 / FPS);
}   

syncFrame();
