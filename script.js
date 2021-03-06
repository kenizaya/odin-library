let myLibrary = [];

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
    const stBtn = document.createElement("button");

    let tr = document.createElement("tr");
    tr.dataset.attr = dattr;
    table.prepend(tr);

    for (const key in book) {
        let td = document.createElement("td");

        if (key === "status") {
            tr.appendChild(td);
            stBtn.textContent = book[key];
            stBtn.classList.add("status");
            td.appendChild(stBtn);

            // Toggle read status
            stBtn.addEventListener('click', (e) => {
                let i = e.target.parentNode.parentNode.dataset.attr;
                myLibrary[i].status = myLibrary[i].status === "Read" ? "Not Read" : "Read";
                stBtn.textContent = stBtn.textContent === "Read" ? "Not Read" : "Read";
                console.log(myLibrary);
            });
        } else {
            td.textContent = book[key];
            tr.appendChild(td);
        }
    }

    // Remove book
    btn.textContent = "Delete";
    btn.classList.add("delete");
    tr.appendChild(document.createElement("td")).appendChild(btn);

    btn.addEventListener('click', (e) => {
        const pn = e.target.parentNode.parentNode;
        let index = e.target.parentNode.dataset.attr;
        myLibrary.splice(index, 1);

        pn.remove();
        
    })

}

const form = document.querySelector("form");
// const btn = document.querySelector("delete");

form.addEventListener('submit', () => {
    addBookToLibrary();
    form.reset();
    
})

