// Carousel functionality (for previous and next buttons)
let currentIndex = 0;
const carouselItems = document.querySelector('.carousel-items');
const totalItems = document.querySelectorAll('.promo-item').length;

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}, 3000); // Ganti slide setiap 10 detik

document.querySelector('.carousel-btn.left').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

document.querySelector('.carousel-btn.right').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100; // Menggeser item sesuai index
    carouselItems.style.transform = `translateX(${offset}%)`;
}
