'use strict';
function btnClick(event) {
  //if(event.target.classList.contains('add-to-cart')) addToCart({'title': event.target.getAttribute('data-title'), 'price': event.target.getAttribute('data-price')});
  event.preventDefault();  
  if(event.target.classList.contains('add-to-cart')) 
    addToCart({
       'title': event.target.getAttribute('data-title'), 
       'price': event.target.getAttribute('data-price')
    });
}

document.addEventListener('click', btnClick);