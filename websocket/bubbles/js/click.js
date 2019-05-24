'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/mouse');

connection.addEventListener('open', () => { 
  console.log('Вебсокет-соединение открыто');
  showBubbles(connection);  
});
 
/*
connection.addEventListener('message', event => { 
  console.log(`Получено сообщение: ${event.data}`); 
}); 
*/

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

document.addEventListener('click', (event) => {
  connection.send(JSON.stringify({'x': event.clientX, 'y': event.clientY})); 
});

