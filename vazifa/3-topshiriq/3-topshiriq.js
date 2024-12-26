
const input = document.querySelector('#input');
const button = document.querySelector('#btn');
const text = document.querySelector('#p');

button&&button.addEventListener('click', function () {
    const textValue = input.value;
    const content = text.textContent
    if(content.includes(textValue)){
        const newText = content.replace(textValue, `<span style="background-color:yellow">${textValue}</span>`);
        text.innerHTML = newText;
    }
   
    
});
