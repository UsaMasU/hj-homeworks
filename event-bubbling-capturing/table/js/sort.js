'use strict';

function handleTableClick(event) {
  if(event.target.tagName == 'TH') {   
    event.target.getAttribute('data-dir') == 1 ? event.target.setAttribute('data-dir', -1) : event.target.setAttribute('data-dir', 1);
    event.target.parentElement.parentElement.parentElement.setAttribute('data-sort-by', event.target.getAttribute('data-prop-name'));
    sortTable(event.target.getAttribute('data-prop-name'), event.target.getAttribute('data-dir'));
  } 
  else return;    
}
