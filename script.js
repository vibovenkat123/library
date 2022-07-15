let addBtn = document.getElementById('add');
console.log(addBtn.textContent)
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
let deleteBtn = '';
const createElements = function(){
  card = document.createElement('div');
  title = document.createElement('p');
  author = document.createElement('p');
  pages = document.createElement('p');
  read = document.createElement('button');
  deleteBtn = document.createElement('button');
  deleteBtn.classList.add('deleteBtn');
  deleteBtn.onclick = function(e){
    e.target.parentNode.remove();
  }
  card.classList.add('card');
  title.textContent = `"${bookTitle}"`;
  author.textContent = ` By: ${bookAuthor}`;
  pages.textContent = `${bookPages} pages`;
  deleteBtn.textContent = 'Delete'
  if (bookRead.checked){
    read.textContent = 's'
  }
  else{
    read.textContent = 'Not Read';
  }
}
function Book(title, author, pages, read) {
  if (read.checked){
    this.read = 'Read';
  }
  else{
    this.read = 'Not Read';
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
}
submit.addEventListener('click', (e) => {
  if (formElement.checkValidity()){
    e.preventDefault();
    updateVariables();
    let book = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    createElements();
    library.push(book)
    console.log(library);
    form.style.display = 'none'; 
    loop();
  }
})
const updateVariables = () =>{
  bookTitle = document.querySelector('input#bookTitle').value;
  bookAuthor = document.querySelector('input#bookAuthor').value;
  bookPages = document.querySelector('input#bookPages').value;
  bookRead = document.getElementById('bookRead');
  console.log(bookRead.checked);
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
