
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.textContent;
        document.body.style.backgroundColor=color;
    });
});