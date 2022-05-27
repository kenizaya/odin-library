let myLibrary = [];
    // title: "The Hobbit",
    // author: "J.R.R. Tolkien",
    // pages: 310,
    // status: "Read",
    // }, 

    // {
    // title: "Harry Potter",
    // author: "J.K. Rowling",
    // pages: 4100,
    // status: "Read",
    // }, 
    
    // {
    // title: "Spaceman",
    // author: "Mike Massimino",
    // pages: 241,
    // status: "Not Read"}];



class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
        }

    info() {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.status;
    };
}


function addBookToLibrary() {
    const title = form.elements['title'].value;
    const author = form.elements['author'].value;
    const pages = form.elements['pages'].value;
    const status = form.elements['status'].value;

    const book = new Book(title, author, pages, status);

    myLibrary.push(book);
    displayBook();
    
}


function displayBook() {
    const table = document.querySelector("tbody");
    let book = myLibrary[myLibrary.length - 1];

    let tr = document.createElement("tr");
    table.appendChild(tr);

    for (const key in book) {
        let td = document.createElement("td");
        td.textContent = book[key];
        tr.appendChild(td);
    }

}

const form = document.querySelector("form");

form.addEventListener('submit', () => {
    addBookToLibrary();
})