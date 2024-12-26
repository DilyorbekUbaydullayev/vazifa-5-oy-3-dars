
const pElements = document.querySelectorAll('.p')

pElements.forEach(pElement => {
    pElement.addEventListener('click', function() {
        pElement.style.fontSize = '20px'
    })
})