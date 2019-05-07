'use strict';

function getContent(link) {
  tab.open('GET', link, true);
  tab.send(); 
}

function onLoad() {
   content.innerHTML = tab.responseText;
   preloader.classList.add('hidden');
}

function btnClick(event) {
 event.preventDefault();
 preloader.classList.remove('hidden'); 
 document.querySelector('.tabs nav .active').classList.remove('active');
 event.currentTarget.classList.add('active');
 getContent(event.currentTarget.href);
}

const tab = new XMLHttpRequest();
tab.addEventListener("load", onLoad);

const tabs = document.querySelectorAll('.tabs nav a');
Array.from(tabs).forEach(button => { 
  button.onclick = btnClick; 
});

document.addEventListener('DOMContentLoaded', (event) => { 
  tab.open('GET', document.querySelector('.tabs nav .active').href, true);
  tab.send();  
});
