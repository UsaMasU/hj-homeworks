'use strict';

const cartHeader = document.querySelector('.container header');
const bio = cartHeader.querySelector('.bio img');
const username = cartHeader.querySelector('.bio .desc h3');
const description = cartHeader.querySelector('.bio .desc p');
const avatar = cartHeader.querySelector('.avatarcontainer img');
const counters = document.querySelectorAll('.content .data ul output');

function loadData(url) { 
  return new Promise((done, fail) => {
    window.callback = done;
    const script = document.createElement('script'); 
    script.src = url; 
    document.body.appendChild(script);
  });
}

loadData('https://neto-api.herokuapp.com/twitter/jsonp')
.then(data => {
  bio.src = data['wallpaper'];
  username.textContent = data['username'];
  description.textContent = data['description'];
  avatar.src = data['pic'];
  for(let item of counters) {
    if(item.hasAttribute('data-tweets')) item.value = data['tweets'];
    if(item.hasAttribute('data-followers')) item.value = data['followers'];
    if(item.hasAttribute('data-following')) item.value = data['following'];    
  } 
});