document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        paragraph.addEventListener('click', () => {
            paragraph.innerText = 'Salom, dunyo!';
        });
    });
});