﻿'use strict';

function checkBoxClick(event) {
 event.currentTarget.checked ? checkedBoxes += 1 : checkedBoxes -= 1;
 resultToDo.value = `${checkedBoxes} из ${checkBoxesToDo.length}`;
 checkedBoxes == checkBoxesToDo.length ? listToDo.classList.add('complete') : listToDo.classList.remove('complete');
}

let checkedBoxes = 1;
const listToDo = document.querySelector('.list-block');
const checkBoxesToDo = listToDo.querySelectorAll('input');
const resultToDo = listToDo.querySelector('h3 output');
resultToDo.value = `${checkedBoxes} из ${checkBoxesToDo.length}`;

Array.from(checkBoxesToDo).forEach(toDO => { 
  toDO.onclick = checkBoxClick; 
});

