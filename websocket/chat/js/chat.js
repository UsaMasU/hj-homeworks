'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/chat');

const chat = document.querySelector('.chat');
const chatStatus = chat.querySelector('.chat-status');

const messageContent = chat.querySelector('.messages-content');
const messageBox = chat.querySelector('.message-box');
const messages = chat.querySelector('.messages');
const messageInput = messageBox.querySelector('.message-input');
const messageSubmit = messageBox.querySelector('.message-submit');

const messagesTemplate = messages.querySelector('.messages-templates');
const messageloadingTemplate = messagesTemplate.querySelector('.loading');
const messageTemplate = messagesTemplate.querySelector('.message .message-text').parentElement;
const messagePersonalTemplate = messagesTemplate.querySelector('.message-personal');
const messageStatusTemplate = messagesTemplate.querySelector('.message-status');

const messageLoading = messageloadingTemplate.cloneNode(true);

const message = messageTemplate.cloneNode(true);
const messageText = message.querySelector('.message-text');
const messageTimeStamp = message.querySelector('.timestamp');

const messagePersonal = messagePersonalTemplate.cloneNode(true);
const messagePersonalText = messagePersonal.querySelector('.message-text');
const messagePersonalTimeStamp = messagePersonal.querySelector('.timestamp');

const messageStatus = messageStatusTemplate.cloneNode(true);
const messageStatusText= messageStatus.querySelector('.message-text');

function getTime(date) {
  let hours;
  let minutes;
  date.getHours().toString().length == 1 ? hours = '0' + date.getHours().toString() : hours = date.getHours().toString();
  date.getMinutes().toString().length == 1 ? minutes = '0' + date.getMinutes().toString() : minutes = date.getMinutes().toString();
  return `${hours}:${minutes}`
}

messageSubmit.addEventListener('click', event => {
  event.preventDefault();
  messagePersonalText.textContent = messageInput.value;
  messagePersonalTimeStamp.textContent = getTime(new Date());
  messageContent.innerHTML += messagePersonal.outerHTML; 
  connection.send(messageInput.value);
  messages.scrollTop = messages.scrollHeight;
  messageInput.value = '';
});


connection.addEventListener('open', () => { 
  console.log('Вебсокет-соединение открыто');
  messageSubmit.removeAttribute('disabled');
  chatStatus.textContent = chatStatus.getAttribute('data-online');
  messageStatusText.textContent = 'Пользователь появился в сети'
  messageContent.innerHTML += messageStatus.outerHTML;
}); 


connection.addEventListener('message', event => {
  console.log(`Получено сообщение: ${event.data}`);
  if(event.data == '...') {
    messageContent.innerHTML += messageLoading.outerHTML;   
  }
  else {
    if(messageContent.querySelector('.loading')) messageContent.querySelector('.loading').remove(); 
    messageText.textContent = event.data;
    messageTimeStamp.textContent = getTime(new Date());
    messageContent.innerHTML += message.outerHTML;  
  }
  messages.scrollTop = messages.scrollHeight;
});

connection.addEventListener('close', event => { 
  console.log('Вебсокет-соединение закрыто');
  messageSubmit.setAttribute('disabled', null);
  chatStatus.textContent = chatStatus.getAttribute('data-offline');
  messageStatusText.textContent = 'Пользователь не в сети'
  messageContent.innerHTML += messageStatus.outerHTML;
});

connection.addEventListener('error', error => { 
  console.log(`Произошла ошибка: ${error.data}`); 
}); 

window.addEventListener('beforeunload', () => { 
  connection.onclose = function () {};
  connection.close(1000, 'Работа закончена');
});
