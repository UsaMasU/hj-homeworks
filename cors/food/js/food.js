'use strict';

const recFood = document.querySelector('.wrapper .food');
const recPic = recFood.querySelector('.cover');
const recTitle = recPic.querySelector('font');
const recTable = recFood.querySelector('.content table');
const recRating = recTable.querySelector('tr td h1');
const recStars = recTable.querySelector('tr td .stars em');
const recVotes = recTable.querySelector('tr td small');
const recConsumers = recTable.querySelector('tr .consumers');

function loadData(nameFunc, url) { 
  return new Promise((done, fail) => {
    window[nameFunc] = done;
    const script = document.createElement('script'); 
    script.src = `${url}?jsonp=${nameFunc}`; 
    document.body.appendChild(script);  
  });
}
 
Promise.all([
  loadData('recipeData', `https://neto-api.herokuapp.com/food/42`),
  loadData('recipeRating', `https://neto-api.herokuapp.com/food/42/rating`),
  loadData('recipeCostumers', `https://neto-api.herokuapp.com/food/42/consumers`)
]).then(recipe => {
  recPic.style.backgroundImage = `url(${recipe[0].pic})`;
  recTitle.textContent = recipe[0].title;
  for(let item of recTable.querySelectorAll('tr td')) 
    if(item.hasAttribute('data-ingredients')) item.textContent = recipe[0].ingredients.join();
  recRating.textContent = recipe[1].rating.toFixed(2);
  recStars.style.width = `${recipe[1].rating * 10}px`;
  recVotes.textContent = `${recipe[1].votes} оценок`;
  for(let consumer of recipe[2].consumers) 
    recConsumers.innerHTML += `<img src="${consumer.pic}" title="${consumer.name}">`;
  recConsumers.innerHTML += `<span>(+${recipe[2].total})</span>`;
});