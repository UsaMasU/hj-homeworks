'use strict';

function selectFromTable(currencyTable) {
  let optionsCountry;
  for(let country of currencyTable) {
    optionsCountry +=`
        <option title="${country.title}" value=${country.value}>${country.code}</option>
      `;
  }
  selectFrom.innerHTML = optionsCountry;
  selectTo.innerHTML = optionsCountry;  
  currencyFrom = selectFrom.options[0].value;
  currencyTo = selectTo.options[0].value;
}

function convercy(amount, from, to) {
  let converseAmount = (amount * from/to).toFixed(2);
  return converseAmount; 
}

function changeFrom() {
  currencyFrom = this.options[this.selectedIndex].value;
  result.value = convercy(amount.value, currencyFrom, currencyTo);
}

function changeTo() {
  currencyTo = this.options[this.selectedIndex].value;
  result.value = convercy(amount.value, currencyFrom, currencyTo);
}

function changeAmount() {
  result.value = convercy(amount.value, currencyFrom, currencyTo);
}

function onLoad() {
  if (request.status === 200) {
    const response = JSON.parse(request.responseText);
    selectFromTable(response);
    loader.classList.add('hidden');
    main.classList.remove('hidden');
    
    selectFrom.addEventListener("change", changeFrom);
    selectTo.addEventListener("change", changeTo);
    amount.addEventListener("input", changeAmount);
  }
}

const main = document.querySelector('main');
const selectFrom = main.querySelector('#from');
const selectTo = main.querySelector('#to');
const amount = main.querySelector('#source');
const result = main.querySelector('#result');
const loader = document.querySelector('#loader');

let currencyFrom;
let currencyTo;

const request = new XMLHttpRequest();
request.addEventListener("loadstart", () => {loader.classList.remove('hidden');});
request.addEventListener("load", onLoad);

request.open('GET', 'https://neto-api.herokuapp.com/currency', true);
request.send();




