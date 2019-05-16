'use strict';

function taskClick(event) {
 let taskLabel = event.currentTarget.parentElement;
 let taskState = taskLabel.parentElement;
 
 if(taskState.classList.contains('undone')) doneTasks.appendChild(taskLabel);
 if(taskState.classList.contains('done')) undoneTasks.appendChild(taskLabel);
}

const todoList = document.querySelector('.todo-list');
const doneTasks = todoList.querySelector('.done');
const undoneTasks = todoList.querySelector('.undone');
const tasks = todoList.querySelectorAll('label input');

Array.from(tasks).forEach(task => { 
  task.addEventListener("click", taskClick); 
});