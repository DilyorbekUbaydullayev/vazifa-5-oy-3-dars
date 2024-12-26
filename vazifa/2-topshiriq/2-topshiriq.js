
const input = document.querySelector('#input');
const button = document.querySelector('#btn');

button&&button.addEventListener('click', function () {
    const copyText = input.value;
    navigator.clipboard.writeText(copyText);
    input.value = '';
    alert('Matn nusxalandi');
});