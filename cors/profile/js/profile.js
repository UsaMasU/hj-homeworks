'use strict';

const content = document.querySelector('.content');
const cardInfo = content.querySelector('.card .firstinfo');
const profileInfo = cardInfo.querySelector('.profileinfo');
const avatar = cardInfo.querySelector('img');
const name = profileInfo.querySelector('h1');
const position = profileInfo.querySelector('h3');
const description = profileInfo.querySelector('.bio');
const technologies = content.querySelector('.badgescard');

function loadData(nameFunc, url) { 
  return new Promise((done, fail) => {
    window[nameFunc] = done;
    const script = document.createElement('script'); 
    script.src = `${url}?jsonp=${nameFunc}`; 
    document.body.appendChild(script);  
  });
}

loadData('getProfile', 'https://neto-api.herokuapp.com/profile/me')
.then(profile => {
  name.textContent = profile['name'];
  avatar.src = profile['pic'];
  position.textContent = profile['position'];
  description.textContent = profile['description'];  
  return loadData('getTechnos', `https://neto-api.herokuapp.com/profile/${profile['id']}/technologies`)
})
.then(thechnos => {
  for(let techno of thechnos) 
    technologies.innerHTML += `<span class="devicons devicons-${techno}"></span>`;
  content.style.display = 'initial';
});
 
