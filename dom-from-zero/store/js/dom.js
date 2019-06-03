'use strict';

function el(tagName, attributes, children) {
  const element = document.createElement(tagName);
  if (typeof attributes === 'object') {
    Object.keys(attributes).forEach(i => element.setAttribute(i, attributes[i]));
  }
  if (typeof children === 'string') {
    element.textContent = children;
  } else if (children instanceof Array) {
    children.forEach(child => element.appendChild(child));
  }
  return element;
}

function createElement(content) {
  //console.log(content);
  let dd = e('h2', null, item.brand, item);
  console.log(dd);
  const element = document.createElement(content.name);
  //console.log(content.props);

  if (typeof content.props === 'object') {
    Object.keys(content.props).forEach(i => element.setAttribute(i, content.props[i]));
  }
  
  return element;
}

//const elems = content.map(createElement);

//const node = elems.reduce((fragment, currentValue) => {
//    node.appendChild(currentValue);
//    return node;
//  }, document.createDocumentFragment());
  
//  wrapper.appendChild(node);