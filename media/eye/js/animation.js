'use strict';

const eye = document.querySelector('.big-book__eye');
const pupil = eye.querySelector('.big-book__pupil');

const pupilRadius = pupil.clientWidth / 2;

document.addEventListener('mousemove', event => {
  const mouseCursorX = event.pageX;
  const mouseCursorY = event.pageY;
  
  const pupilLocation = pupil.getBoundingClientRect();
  const pupilCenterX = pupilLocation.x + pupilRadius;
  const pupilCenterY = pupilLocation.y + pupilRadius;
  
  const posX = mouseCursorX - pupilCenterX + document.body.scrollLeft;
  const posY = mouseCursorY - pupilCenterY + document.body.scrollTop;
  
  let eyeX = posX;
  let eyeY = posY;
  
  if(posX * posX + posY * posY > pupilRadius * pupilRadius) {
    if(posX !== 0) {
      let coef = posY / posX;
      eyeX = Math.sqrt(pupilRadius * pupilRadius / (coef * coef + 1));
      eyeX = (posX > 0) ? eyeX : -eyeX;
      eyeY = Math.abs(coef * eyeX);
      eyeY = (posY > 0) ? eyeY : -eyeY;
    } 
    else {
      eyeY = posY > 0 ? pupilRadius : -pupilRadius;
    }
  }
  
  let pupilSizeX = Math.abs((mouseCursorX - pupilCenterX)) ;
  let pupilSizeY = Math.abs((mouseCursorY - pupilCenterY)) ;
  let size = (((pupilSizeX + pupilSizeY) / 100) - 3) / (1 - 3) * 3;
  if(size < 1.0) size = 1.0;
  if(size > 3.0) size = 3.0;
  
  pupil.style.setProperty('--pupil-x', eyeX + 'px');
  pupil.style.setProperty('--pupil-y', eyeY + 'px');
  pupil.style.setProperty('--pupil-size', size);
});
