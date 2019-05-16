'use strict';

function sliderNavClick(event) {
  if(event.currentTarget.classList.contains('disabled')) return;
  updateSlide(event.currentTarget.dataset.action);
}

function updateSlide(action) {
  slideCurrent.classList.remove('slide-current');
  
  if(action == 'next') slideCurrent = slideCurrent.nextElementSibling;
  if(action == 'last') slideCurrent = slides.lastElementChild;
  if(action == 'prev') slideCurrent = slideCurrent.previousElementSibling;
  if(action == 'first') slideCurrent = slides.firstElementChild;
  
  slideCurrent.classList.add('slide-current');
  
  if((action == 'next') || (action == 'last')) {
    if(slideCurrent.nextElementSibling == null) {
      btnNext.classList.add('disabled');
      btnLast.classList.add('disabled');
    }
    btnPrev.classList.remove('disabled');
    btnFirst.classList.remove('disabled');
    return;
  }
  if((action == 'prev') || (action == 'first')) {
    if(slideCurrent.previousElementSibling == null) {       
      btnPrev.classList.add('disabled');
      btnFirst.classList.add('disabled');
    }
    btnNext.classList.remove('disabled');
    btnLast.classList.remove('disabled');
    return;
  }
}

const sliderMain = document.querySelector('.slider');
const sliderNav = sliderMain.querySelectorAll('.slider-nav a');
const slides = sliderMain.querySelector('.slides');

let btnNext;
let btnPrev; 
let btnFirst;
let btnLast; 

Array.from(sliderNav).forEach(btn => {
  switch(btn.dataset.action) {
    case 'next':
      btnNext = btn;
      btnNext.addEventListener("click", sliderNavClick); 
      break;
    case 'prev':
      btnPrev = btn;
      btnPrev.addEventListener("click", sliderNavClick); 
      break;
    case 'first':
      btnFirst = btn;
      btnFirst.addEventListener("click", sliderNavClick); 
      break;
    case 'last':
      btnLast = btn;
      btnLast.addEventListener("click", sliderNavClick); 
      break;
    default:
      break;
  } 
});

let slideCurrent = slides.firstElementChild;
slideCurrent.classList.add('slide-current');
updateSlide('first');
