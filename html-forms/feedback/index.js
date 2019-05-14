'use strict';

const contactForm = {
  lastname:'', 
  name: '',
  email: '',
  company: '',
  address: '',
  zip: '',
  city: '',
  phone: '',
  role: '',
  subject: '',
  message: ''  
}

function btnSendForm() {
  btnSend.disabled = true;
  form.classList.add('hidden');
  main.classList.remove('hidden');
  
  for(let field in contactForm) {
    if((field == 'phone') || (field == 'email')) continue;
    main.querySelector('#'+field).value = contactForm[field].value;
  }
}

function btnCompleteForm() {
  main.classList.add('hidden');
  form.classList.remove('hidden');
}

function checkZip() {
  contactForm['zip'].value = contactForm['zip'].value.replace(/[^\d.]/g, '');
}

function checkData() {
  for(let field in contactForm) {
    if(contactForm[field].value == '') {
     btnSend.disabled = true;
     return;
    }
  }
  btnSend.disabled = false;
}

const form = document.querySelector('.contentform');
form.addEventListener("input", checkData);

const btnSend = form.querySelector('.button-contact');
btnSend.addEventListener("click", btnSendForm);

const formFields = form.querySelectorAll('.form-group input');
for(let field of formFields) contactForm[field.name] = field;
contactForm['message'] = form.querySelector('.form-group textarea');
contactForm['zip'].addEventListener("input", checkZip);

const main = document.querySelector('main');
const btnChange = main.querySelector('.button-contact');
btnChange.addEventListener("click", btnCompleteForm);
