'use strict';

function createElement(content) {
  const element = document.createElement(content.name);
  if(content.props != null) {
    if(typeof content.props === 'object') {    
      for(let atr in content.props) {
        element.setAttribute(atr, content.props[atr]);
      }
    }
  }
  if(typeof content.childs[0] === 'string') {
     element.textContent = content.childs[0];
  }else if(content.childs instanceof Array) {
     content.childs.forEach(child => element.appendChild(createElement(child)));
  }
  return element;
}
