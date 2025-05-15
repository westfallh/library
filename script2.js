class Book { 
constructor(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

toggleRead() {
    this.read = !this.read;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(index) {
        this.books.splice(index, 1);
    }

     display() {
     const list = document.getElementById("bookList");
        list.innerHTML = "";
  
        this.books.forEach((book, index) => {
            const li = document.createElement("li");
            li.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ` +
                       (book.read ? "Read" : "Not read yet");
  
        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = "Toggle Read";
        toggleBtn.style.marginLeft = "10px";
        toggleBtn.addEventListener("click", () => {
            book.read = !book.read;
            this.display();
        });

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.style.marginLeft = "10px";
        removeBtn.addEventListener("click", () => {
            this.removeBook(index);
            this.display();
        });
  
        li.appendChild(toggleBtn);
        li.appendChild(removeBtn);
        list.appendChild(li);
        });
    }
}
  
const myLibrary = new Library();

document.getElementById("bookForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = parseInt(document.getElementById("pages").value, 10);
  const read = document.getElementById("read").checked;

  const newBook = new Book(title, author, pages, read);
  myLibrary.addBook(newBook);
  myLibrary.display();

  event.target.reset();
});

myLibrary.display(); 