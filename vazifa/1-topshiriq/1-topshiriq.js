
const h1 = document.getElementById('h1');
const button = document.getElementById('btn');
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



button&&button.addEventListener('click', function () {
    const color = getRandomColor();
    h1.style.color = color;
    
});



