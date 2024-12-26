
const button1 = document.querySelector('#btn')
const button2 = document.querySelector('#btn2')
const p = document.querySelectorAll('.p')
const div = document.querySelector('#div')

button1.addEventListener('click', function() {
    div.style.display = 'none'
});

button2.addEventListener('click', function() {
    div.style.display = 'block'
});