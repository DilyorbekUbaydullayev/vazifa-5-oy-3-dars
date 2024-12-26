const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');
const upButton = document.querySelector('#up');
const downButton = document.querySelector('#down');
const square = document.querySelector('#square');

upButton.addEventListener('click', () => {
    const currentTop = parseInt(square.style.top.replace('px', '')) || 0;
    square.style.top = `${currentTop - 10}px`;
});

downButton.addEventListener('click', () => {
    const currentTop = parseInt(square.style.bottom.replace('px', '')) || 0;
    square.style.bottom = `${currentTop - 10}px`;
});

leftButton.addEventListener('click', () => {
    const currentLeft = parseInt(square.style.left.replace('px', '')) || 0;
    square.style.left = `${currentLeft - 10}px`;
});

rightButton.addEventListener('click', () => {
    const currentLeft = parseInt(square.style.right.replace('px', '')) || 0;
    square.style.right = `${currentLeft - 10}px`;
});