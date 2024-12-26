
const input = document.querySelector('#input');

const button = document.querySelector('#show-hide');

button.addEventListener('click', function () {
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
    });