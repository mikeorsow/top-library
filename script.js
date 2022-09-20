
let myLibrary = [];

const book1 = new Book('Inspired: How to Create Tech Products Customers Love', 'Marty Cagan', 368, true)
const book2 = new Book('EMPOWERED: Ordinary People, Extraordinary Products ', 'Marty Cagan', 425, true)
const book3 = new Book('Loved: How to Rethink Marketing for Tech Products', 'Martina Lauchengco', 276, false)


function Book(title, author, pages, completed) {
    this.title = title 
    this.author = author 
    this.pages = pages 
    this.completed = completed
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, completed: ${this.completed}`
}

function addBookToLibrary(book) {
   return myLibrary.push(book);
  }

function listAllBooks (array) {
    return array.map(book => book.title)
}