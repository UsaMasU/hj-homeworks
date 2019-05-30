'use strict';

let canvas = document.querySelector('#wall');
canvas.setAttribute('width', window.innerWidth);
canvas.setAttribute('height', window.innerHeight);
let ctx = canvas.getContext("2d");

let tickCounter = 0;

class ScreenObj {
  constructor(x = 0, y = 0, size = 0, type = '', color = 'white', moveType = 'wave_1') {
    this.x = x;
    this.y = y;
    this.size = size * 5;
    this.type = type;
    this.color = color;
    this.moveType = moveType;
  }
  
  nextPoint_1(x, y, time) {
      this.x =  x + Math.sin((50 + x + (time / 10)) / 100) * 3;
      this.y = y + Math.sin((45 + x + (time / 10)) / 100) * 4;
    }
  
  nextPoint_2(x, y, time) {
    this.x = x + Math.sin((x + (time / 10)) / 100) * 5;
    this.y = y + Math.sin((10 + x + (time / 10)) / 100) * 2;
  }
  
  move(x, y, time) {
    switch(this.moveType) {
      case 'wave_1':
        this.nextPoint_1(x, y, time);
        break;
      case 'wave_2':
        this.nextPoint_2(x, y, time);
        break;
      default:
    }
    this.draw();
  }
  
  draw() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;  
    switch(this.type) {
      case 'circle':
        ctx.arc(this.x, this.y, this.size, 0, (Math.PI/180) * 360);
        break;
      case 'cross':
        ctx.moveTo(this.x, this.y + this.size);
        ctx.lineTo(this.x, this.y + this.size);
        ctx.moveTo(this.x, this.y - this.size);
        ctx.lineTo(this.x, this.y + this.size);
        ctx.moveTo(this.x + this.size, this.y);
        ctx.lineTo(this.x + this.size, this.y);
        ctx.lineTo(this.x - this.size, this.y);
        ctx.lineTo(this.x + this.size, this.y);
        break;
      default:
    }
    ctx.stroke();
    ctx.closePath();
  }
  
}


function nextPoint_1(x, y, time) {
  return {
    x: x + Math.sin((50 + x + (time / 10)) / 100) * 3,
    y: y + Math.sin((45 + x + (time / 10)) / 100) * 4
  };
}

function nextPoint_2(x, y, time) {
  return {
    x: x + Math.sin((x + (time / 10)) / 100) * 5,
    y: y + Math.sin((10 + x + (time / 10)) / 100) * 2
  }
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor(starColors) {
  return starColors[Math.floor(Math.random() * starColors.length)];   
}

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

   let circles = [];
   let crosses = [];
   
    let circlesQuant = 0;
    let crossesQuant = 0;    
    let objects = randomInt(200, 400);
    if(objects % 2 == 0) {
       circlesQuant = objects / 2;
    }
    else {
      circlesQuant = (objects + 1) / 2;
    }
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
      let moveType = '';
      randomInt(1, 2) == 1 ? moveType = 'wave_1': moveType = 'wave_2';
      crosses.push(new ScreenObj(posX, posY, size, 'cross', 'white', moveType));
    }

    
function tick () {  
   tickCounter += 1;
   if(tickCounter == 20) {
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;

     for(let circ of circles) {
       circ.move(circ.x, circ.y, Date.now());
     }
     
     for(let cross of crosses) {
       cross.move(cross.x, cross.y, Date.now());
     }

//circles[0].move(circles[0].x, circles[0].y, Date.now());
     tickCounter = 0;
   }
  
  window.requestAnimationFrame(tick);
}

tick();    
    