// Populate a few default library books
const BOOK1 = new Book(
  'Inspired: How to Create Tech Products Customers Love',
  'Marty Cagan',
  368,
  'yes'
);
const BOOK2 = new Book(
  'EMPOWERED: Ordinary People, Extraordinary Products ',
  'Marty Cagan',
  425,
  'no'
);
const BOOK3 = new Book(
  'Loved: How to Rethink Marketing for Tech Products',
  'Martina Lauchengco',
  276,
  'yes'
);

let myLibrary = [BOOK1, BOOK2, BOOK3];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

Book.prototype.toggleReadStatus = () => {
  return console.log('you been toggled')
}

const bookList = document.getElementById('book-list');
const newBookForm = document.getElementById('new-book-form');
const addBookHeaderButton = document.querySelector('#show-add-book-form');
const formSubmitButton = document.querySelector('input[type="submit"]');

addBookHeaderButton.addEventListener('click', showAddBookForm);
formSubmitButton.addEventListener('click', addBookToLibrary);

listAllBooks();

function listAllBooks() {
  if (myLibrary.length === 0) {
    return (bookList.innerHTML = '<h2>You have no books!</h2>');
  }
  bookList.innerHTML = '';
  return myLibrary.map((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.setAttribute('data-index', index);
    bookCard.innerHTML = `<div class="book-card-title">
          <h2>${book.title}</h2>
      </div>
      <p class="book-card-author">by ${book.author}</p>
      <div class="book-card-footer">
          <p class="book-card-pages">${book.pages} pages</p>
          <p class="book-card-status">read: ${book.readStatus}</p>
      </div>
      <button class="book-card-remove">Remove</button>`;
    bookList.appendChild(bookCard);

    const removeBookButtons = document.querySelectorAll(
      'button.book-card-remove'
    );

    removeBookButtons.forEach((button) =>
      button.addEventListener('click', removeBookFromLibrary)
    );
  });
}

function removeBookFromLibrary(e) {
  const bookIndex = e.target.parentElement.dataset.index;
  myLibrary.splice(bookIndex, 1);
  listAllBooks();
}

function addBookToLibrary(e) {
  e.preventDefault();
  const title = document.querySelector('input[name="book-title"]').value;
  const author = document.querySelector('input[name="book-author"]').value;
  const pages = document.querySelector('input[name="book-pages"]').value;
  const status = document.querySelector('input[name="book-read-status"]').value;

  const newBook = new Book(title, author, pages, status);

  myLibrary.push(newBook);
  listAllBooks();
  newBookForm.reset();
}

function showAddBookForm() {
  document.getElementById('new-book-form').style.display = 'block';
}
