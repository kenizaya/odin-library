let myLibrary = [{
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 310,
    hasRead: true,
    }, 

    {
    title: "Harry Potter",
    author: "J.K. Rowling",
    pages: 4100,
    hasRead: true,
    }, 
    
    {
    title: "Spaceman",
    author: "Mike Massimino",
    pages: 241,
    hasRead: false}];


class Book {
    constructor(title, author, pages, hasRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;
        }

    info() {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + (this.hasRead ? "read" : "not read, yet");
    };
}



function addBookToLibrary(book) {
    myLibrary.push(book);
}


function displayBook() {
    myLibrary.forEach(book => console.log(book));
}

