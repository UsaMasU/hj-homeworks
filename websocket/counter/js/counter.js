'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/counter');
const connCount = document.querySelector('.container .counter');
const connCountErrors = document.querySelector('.container .errors');

connection.addEventListener('open', () => { 
  console.log('Вебсокет-соединение открыто');
}); 

connection.addEventListener('message', event => { 
  console.log(`Получено сообщение: ${event.data}`);
  let connState =  JSON.parse(event.data);
  connCount.innerHTML = connState['connections'];
  connCountErrors.innerHTML = connState['errors'];
}); 

connection.addEventListener('close', event => { 
  console.log('Вебсокет-соединение закрыто'); 
});

connection.addEventListener('error', error => { 
  console.log(`Произошла ошибка: ${error.data}`); 
}); 

window.addEventListener('beforeunload', () => { 
  connection.onclose = function () {};
  connection.close(1000, 'Работа закончена');
});


