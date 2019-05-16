'use strict';

function showTab(event) {
  event.currentTarget.classList.add('ui-tabs-active');
  switch(event.currentTarget.querySelector('a').text) {
    case contentShopping.dataset.tabTitle:
      contentShopping.classList.remove('hidden');
      
      contentFood.classList.add('hidden');
      tabFood.classList.remove('ui-tabs-active');
      contentMusic.classList.add('hidden');
      tabMusic.classList.remove('ui-tabs-active');
      break;
    case contentFood.dataset.tabTitle:
      contentShopping.classList.add('hidden');
      tabShopping.classList.remove('ui-tabs-active');
      
      contentMusic.classList.add('hidden');
      tabMusic.classList.remove('ui-tabs-active');
      
      contentFood.classList.remove('hidden');
      break;
    case contentMusic.dataset.tabTitle:
      contentShopping.classList.add('hidden');
      tabShopping.classList.remove('ui-tabs-active');
      
      contentFood.classList.add('hidden');
      tabFood.classList.remove('ui-tabs-active');

      contentMusic.classList.remove('hidden');
      break;
    default:
      break;
  }      
}

const tabs = document.querySelector('#tabs');
const tabsNav = tabs.querySelector('.tabs-nav');
const tabTemplate = tabsNav.querySelector('li');

let tabShopping = tabTemplate.cloneNode(true);
let tabFood = tabTemplate.cloneNode(true);
let tabMusic = tabTemplate.cloneNode(true);

const tabsContent = tabs.querySelector('.tabs-content');
const contentShopping = tabsContent.firstElementChild;
const contentFood = contentShopping.nextElementSibling;
const contentMusic = contentFood.nextElementSibling;

tabMusic.innerHTML = `<a class="fa ${contentMusic.dataset.tabIcon}">${contentMusic.dataset.tabTitle}</a>`;
tabTemplate.parentNode.insertBefore(tabMusic, tabTemplate.nextSibling);

tabFood.innerHTML = `<a class="fa ${contentFood.dataset.tabIcon}">${contentFood.dataset.tabTitle}</a>`;
tabTemplate.parentNode.insertBefore(tabFood, tabTemplate.nextSibling);

tabShopping.innerHTML = `<a class="fa ${contentShopping.dataset.tabIcon}">${contentShopping.dataset.tabTitle}</a>`;
tabTemplate.parentNode.insertBefore(tabShopping, tabTemplate.nextSibling);

tabTemplate.parentNode.removeChild(tabTemplate);

tabShopping = tabsNav.firstElementChild;
tabFood = tabShopping.nextElementSibling;
tabMusic = tabFood.nextElementSibling;

tabShopping.classList.add('ui-tabs-active');

tabShopping.addEventListener("click", showTab); 
tabFood.addEventListener("click", showTab); 
tabMusic.addEventListener("click", showTab); 
