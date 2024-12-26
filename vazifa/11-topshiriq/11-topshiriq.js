document.addEventListener("DOMContentLoaded", function() {
    const paragraphs = document.querySelectorAll("p");

    paragraphs.forEach(paragraph => {
        const button = document.createElement("button");
        button.textContent = "Yashirish";
        button.addEventListener("click", function() {
            paragraph.style.display = "none";
        });
        paragraph.appendChild(button);
    });
});