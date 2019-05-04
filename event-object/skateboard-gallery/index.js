'use strict';

function linkClick(event) {
 event.preventDefault();

 for(let skate of skateLinks) {
  if(skate.classList.contains('gallery-current')) skate.classList.remove('gallery-current');
 }
 
 event.currentTarget.classList.add('gallery-current');
 
 view.src = event.currentTarget.href;

 const skateName = event.currentTarget.getElementsByTagName('img')[0];
 title.innerHTML = skateName.title;
}

const title = document.getElementsByTagName('h2')[0];
const view = document.getElementById('view'); 
const gallery = document.getElementById('nav'); 
const skateLinks = gallery.getElementsByTagName('a'); 

Array.from(skateLinks).forEach(skate => { 
  skate.addEventListener('click', linkClick); 
});