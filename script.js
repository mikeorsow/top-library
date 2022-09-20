

const BOOK1 = new Book(
  'Inspired: How to Create Tech Products Customers Love',
  'Marty Cagan',
  368,
  true
);
const BOOK2 = new Book(
  'EMPOWERED: Ordinary People, Extraordinary Products ',
  'Marty Cagan',
  425,
  true
);
const BOOK3 = new Book(
  'Loved: How to Rethink Marketing for Tech Products',
  'Martina Lauchengco',
  276,
  false
);

let myLibrary = [BOOK1, BOOK2, BOOK3];

const bookList = document.getElementById('book-list');

function Book(title, author, pages, completed) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.completed = completed;
}

listAllBooks();

function addBookToLibrary(book) {
  return myLibrary.push(book);
}

// function listAllBooks() {
//   return myLibrary.map((book) => {
//     const p = document.createElement('p');
//     p.innerText = book.info();
//     bookList.appendChild(p);
//   });
// }

function listAllBooks() {
    bookList.innerHTML = '';
    return myLibrary.map((book, index) => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('book-card');
      bookCard.setAttribute('data-index', index)
      bookCard.innerHTML = 
      `<div class="book-card-title">
          <h2>${book.title}</h2>
      </div>
      <p class="book-card-author">by ${book.author}</p>
      <div class="book-card-footer">
          <p class="book-card-pages">${book.pages} pages</p>
          <p class="book-card-status">read: ${book.completed}</p>
      </div>
      <button class="book-card-remove">Remove</button>`
      bookList.appendChild(bookCard);
    });
  }




