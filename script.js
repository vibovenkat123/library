let addBtn = document.getElementById('add');
let form = document.getElementById('form')
let formElement = document.querySelector('form')
let body = document.querySelector('body')
let bookTitle = document.querySelector('input#bookTitle').value;
let bookAuthor = document.querySelector('input#bookAuthor').value;
let bookPages = document.querySelector('input#bookPages').value;
let bookRead = document.getElementById('bookRead');
let submit = document.getElementById('submitBtn');
let grid = document.getElementById('grid');
let library = [];
let card = '';
let title = '';
let author = '';
let pages = '';
let read = ''; 
let readBool  = false;
let deleteBtn = '';
const createElements = function(){
  card = document.createElement('div');
  title = document.createElement('p');
  author = document.createElement('p');
  pages = document.createElement('p');
  read = document.createElement('button');
  deleteBtn = document.createElement('button');
  deleteBtn.classList.add('deleteBtn');
  read.onclick = function(){
    readBool = !readBool
    setRead();
  }
  deleteBtn.onclick = function(e){
    e.target.parentNode.remove();
  }
  card.classList.add('card');
  title.textContent = `"${bookTitle}"`;
  author.textContent = ` By: ${bookAuthor}`;
  pages.textContent = `${bookPages} pages`;
  deleteBtn.textContent = 'Delete'
  setRead()
}
function setRead(){
  if (readBool){
    read.textContent = 'Read';
    read.classList.remove('NotReadBtn');
    read.classList.add('readBtn');
  }
  else{
    read.textContent = 'Not Read';
    read.classList.add('NotReadBtn');
  }
}
class Book {
  constructor(title, author, pages, read) {
    if (read.checked) {
      readBool = true;
    }
    else {
      readBool = false;
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}
submit.addEventListener('click', (e) => {
  if (formElement.checkValidity()){
    e.preventDefault();
    updateVariables();
    let book = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    createElements();
    library.push(book)
    form.style.display = 'none'; 
    loop();
  }
})
const updateVariables = () =>{
  bookTitle = document.querySelector('input#bookTitle').value;
  bookAuthor = document.querySelector('input#bookAuthor').value;
  bookPages = document.querySelector('input#bookPages').value;
  bookRead = document.getElementById('bookRead');
}
const loop = () => {
  for (const book in library){
      card.appendChild(title);
      card.appendChild(author);
      card.appendChild(pages);
      card.appendChild(read);
      card.appendChild(deleteBtn);
      grid.appendChild(card);
  }
}
addBtn.addEventListener('click', () => {
  form.style.display = 'flex';
  body.classList.add('dim');
})
window.addEventListener('keydown', (e) => {
  if (e.key == 'Escape'){
    form.style.display = 'none';
    body.classList.add('dim');
  }
})
