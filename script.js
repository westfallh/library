const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayItems() {
    const list = document.getElementById("bookList");
    list.innerHTML = "";
  
    myLibrary.forEach((book, index) => {
      let li = document.createElement("li");
      li.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ` +
                       (book.read ? "Read" : "Not read yet");
  
      let toggleBtn = document.createElement("button");
      toggleBtn.textContent = "Toggle Read";
      toggleBtn.style.marginLeft = "10px";
      toggleBtn.addEventListener("click", () => {
        book.read = !book.read;
        displayItems();
      });

      let removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.style.marginLeft = "10px";
      removeBtn.addEventListener("click", () => {
        myLibrary.splice(index, 1);
        displayItems();
      });
  
      li.appendChild(toggleBtn);
      li.appendChild(removeBtn);
      list.appendChild(li);
    });
  }
  
  

document.getElementById("bookForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = parseInt(document.getElementById("pages").value, 10);
  const read = document.getElementById("read").checked;

  addBookToLibrary(title, author, pages, read);
  displayItems();


  event.target.reset();
});

displayItems(); 