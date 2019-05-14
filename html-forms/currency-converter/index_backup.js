'use strict';

function currencyOfflineJSON() {
  return [{"value":1,"title":"Российский рубль","code":"RUR"},{"value":45.7971,"title":"Австралийский доллар","code":"AUD"},{"value":38.449,"title":"Азербайджанский манат","code":"AZN"},{"value":85.1495,"title":"Фунт стерлингов Соединенного королевства","code":"GBP"},{"value":1353.57,"title":"Армянских драмов","code":"AMD"},{"value":30.9287,"title":"Белорусский рубль","code":"BYN"},{"value":37.3761,"title":"Болгарский лев","code":"BGN"},{"value":16.4292,"title":"Бразильский реал","code":"BRL"},{"value":2252.96,"title":"Венгерских форинтов","code":"HUF"},{"value":831.066,"title":"Гонконгских долларов","code":"HKD"},{"value":979.1160000000001,"title":"Датских крон","code":"DKK"},{"value":65.2287,"title":"Доллар США","code":"USD"},{"value":73.0888,"title":"Евро","code":"EUR"},{"value":9386.78,"title":"Индийских рупий","code":"INR"},{"value":1714.6499999999999,"title":"Казахстанских тенге","code":"KZT"},{"value":48.4719,"title":"Канадский доллар","code":"CAD"},{"value":9318.84,"title":"Киргизских сомов","code":"KGS"},{"value":963.311,"title":"Китайских юаней","code":"CNY"},{"value":364.101,"title":"Молдавских леев","code":"MDL"},{"value":746.854,"title":"Норвежских крон","code":"NOK"},{"value":17.0421,"title":"Польский злотый","code":"PLN"},{"value":15.3656,"title":"Галактический кредит","code":"ZZZ"},{"value":90.3822,"title":"СДР (специальные права заимствования)","code":"XDR"},{"value":47.9411,"title":"Сингапурский доллар","code":"SGD"},{"value":690.9449999999999,"title":"Таджикских сомони","code":"TJS"},{"value":10.5896,"title":"Турецкая лира","code":"TRY"},{"value":18.6634,"title":"Новый туркменский манат","code":"TMT"},{"value":772266.9999999999,"title":"Узбекских сумов","code":"UZS"},{"value":248.94100000000003,"title":"Украинских гривен","code":"UAH"},{"value":284.159,"title":"Чешских крон","code":"CZK"},{"value":682.045,"title":"Шведских крон","code":"SEK"},{"value":64.0942,"title":"Швейцарский франк","code":"CHF"},{"value":455.74,"title":"Южноафриканских рэндов","code":"ZAR"},{"value":55797,"title":"Вон Республики Корея","code":"KRW"},{"value":5922.08,"title":"Японских иен","code":"JPY"}];
}

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
//selectFromTable(currencyOfflineJSON());

const request = new XMLHttpRequest();
request.addEventListener("loadstart", () => {loader.classList.remove('hidden');});
request.addEventListener("load", onLoad);

request.open('GET', 'https://neto-api.herokuapp.com/currency', true);
request.send();




