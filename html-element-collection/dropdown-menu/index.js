'use strict';

function btnClick() {
 this.classList.toggle('active');
}

const buttons = document.getElementsByClassName('wrapper-dropdown')[0];
buttons.onclick = btnClick;
