'use strict';

const BRUSH_RADIUS = 6;

let canvas = document.querySelector('#draw');
let ctx = canvas.getContext("2d");
canvas.setAttribute('width', window.innerWidth);
canvas.setAttribute('height', window.innerHeight);

let mouse = { x:0, y:0};
let draw = false;
let hue = 0;
let lineWidth = 0;
let widthDir = 'up'

  ctx.lineWidth = BRUSH_RADIUS;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';


canvas.addEventListener("mousedown", function(e) {				
		mouse.x = e.pageX - this.offsetLeft;
		mouse.y = e.pageY - this.offsetTop;
		draw = true;
		ctx.beginPath();
          
		ctx.moveTo(mouse.x, mouse.y);
          
});

canvas.addEventListener("mousemove", function(e) {
		if(draw==true) {	

				mouse.x = e.pageX - this.offsetLeft;
				mouse.y = e.pageY - this.offsetTop;
    
				ctx.lineTo(mouse.x, mouse.y);

    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = 'hsl(' + hue +', 100%, 50%)';

    
			 ctx.stroke();
      	 //ctx.closePath();
   	//ctx.beginPath();
		}
});

canvas.addEventListener("mouseup", function(e) {				
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
	 ctx.lineTo(mouse.x, mouse.y);
		ctx.stroke();
		ctx.closePath();
		draw = false;
});


window.addEventListener('resize', event => {
  console.log('resize');
  canvasClear();
});

canvas.addEventListener("dblclick", function(e) {	
  console.log('dblclick');
  canvasClear();
});

function canvasClear() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';  
}

function tick () {
  //if(needsRepaint) {
  //  repaint();
  //  needsRepaint = false;
  //}
  hue += 1;
  if(hue == 359 ) hue = 0;
 
  switch(widthDir) {
    case 'up':
      lineWidth += 1;
      if(lineWidth == 100 ) widthDir = 'down';
      break;
    case 'down':
      lineWidth -= 1;
      if(lineWidth == 0 ) widthDir = 'up';
      break;
    default:
      break;
  }

  
  ctx.beginPath();
  window.requestAnimationFrame(tick);
}

tick();