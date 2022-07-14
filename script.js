let addBtn = document.getElementById('add');
console.log(addBtn.textContent)
let form = document.getElementById('form')
let body = document.querySelector('body')
addBtn.addEventListener('click', () => {
  form.style.display = 'flex';
})
window.addEventListener('keydown', (e) => {
  if (e.key == 'Escape'){
    form.style.display = 'none';
  }
})