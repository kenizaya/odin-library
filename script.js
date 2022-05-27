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

    if (title === "" || author === "" ||
        pages === "" || status === "") {
            alert("Please, fill in all the details before submiting");
        } else {
            const book = new Book(title, author, pages, status);

            myLibrary.push(book);
            displayBook();
        }
    
}


function displayBook() {
    const table = document.querySelector("tbody");
    let dattr = myLibrary.length - 1;
    let book = myLibrary[dattr];
    const btn = document.createElement("button");

    let tr = document.createElement("tr");
    tr.dataset.attr = dattr;
    table.appendChild(tr);

    for (const key in book) {
        let td = document.createElement("td");
        td.textContent = book[key];
        tr.appendChild(td);
    }

    // Remove book
    btn.textContent = "Delete";
    tr.appendChild(btn);

    btn.addEventListener('click', (e) => {
        const pn = e.target.parentNode;
        let index = e.target.parentNode.dataset.attr;
        myLibrary.splice(index, 1);

        pn.remove();
        
    })

}

function removeBook() {
    
}

const form = document.querySelector("form");
// const btn = document.querySelector("delete");

form.addEventListener('submit', () => {
    addBookToLibrary();
    form.reset();
    
})

