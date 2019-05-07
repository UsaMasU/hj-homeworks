'use strict';

function onLoad() {
  if (requestBooks.status === 200) {
    let getBooks =``;
    const responseBooks = JSON.parse(requestBooks.responseText);
    for(let book of responseBooks) {
      getBooks +=`
        <li
          data-title="${book.title}"
          data-author="${book.author['name']}"
          data-info="${book.info}"
          data-price="${book.price}">
          <img src=${book.cover['small']}>
        </li>
      `;
    }
    content.innerHTML = getBooks;
  }
}

const requestBooks = new XMLHttpRequest();
requestBooks.addEventListener("load", onLoad);

requestBooks.open('GET', 'https://neto-api.herokuapp.com/book', true);
requestBooks.send();

