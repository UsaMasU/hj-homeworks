'use strict';
const contactsList = JSON.parse(loadContacts()); 

const listView = document.querySelector('#container > .list-view > ul');
listView.innerHTML = '';

for(let contact of contactsList) {
   listView.innerHTML = listView.innerHTML + '<li data-email="' + contact.email + '"data-phone="' + contact.phone + '"><strong>' + contact.name + '</strong></li>\n';
}