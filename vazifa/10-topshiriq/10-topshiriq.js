// Rasm URL'lari massivini aniqlash
const images = [
    "https://a.d-cd.net/eb32f04s-960.jpg",
    "https://i.pinimg.com/originals/4d/81/ce/4d81ce4e3c5224aaeb135e412bf48bdf.jpg",
    "https://i.pinimg.com/736x/c9/40/5e/c9405e27fa666229ab663d2a88ed672e.jpg",
    "https://avatars.mds.yandex.net/get-mpic/4446555/img_id8129740710631091899.jpeg/orig"
  ];
  
  // Elementlarni olish
  const randomImageBtn = document.getElementById("randomImageBtn");
  const randomImage = document.getElementById("randomImage");
  
  randomImageBtn.addEventListener("click", () => {
    // Tasodifiy indeksni tanlash
    const randomIndex = Math.floor(Math.random() * images.length);
    
    const selectedImage = images[randomIndex];
    
    randomImage.src = selectedImage;
    randomImage.style.display = "block"; 
  });
  