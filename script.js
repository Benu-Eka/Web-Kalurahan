const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showNextSlide() {
    slides[currentIndex].classList.remove('active'); // Hilangkan kelas active dari slide saat ini
    currentIndex = (currentIndex + 1) % slides.length; // Pindah ke slide berikutnya
    slides[currentIndex].classList.add('active'); // Tambahkan kelas active ke slide baru
}

// Ganti slide setiap 3 detik
setInterval(showNextSlide, 3000);
