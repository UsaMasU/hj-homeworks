'use strict';

function addClick(event) {
  cartCount.innerHTML = +cartCount.innerHTML + 1 ;
  cartTotalPrice.innerHTML = getPriceFormatted(+((cartTotalPrice.innerHTML).replace(/\s+/g, '')) + (+(event.currentTarget.getAttribute('data-price'))));
}

const cartCount = document.querySelector('#container .cart .head #cart-count');
const cartTotalPrice = document.querySelector('#container .cart .head #cart-total-price');
const buttons = document.querySelectorAll('#container .box .add');

Array.from(buttons).forEach(button => { 
  button.addEventListener('click', addClick); 
});
