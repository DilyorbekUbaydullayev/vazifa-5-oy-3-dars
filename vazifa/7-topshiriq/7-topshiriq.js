
const input = document.querySelector('#input');
const paragraph = document.querySelector('#p');

input.addEventListener('input', function () {
    const text = input.value;
    paragraph.textContent = text;
});