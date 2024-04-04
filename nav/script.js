const carouselInner = document.querySelector(".carousel-inner");
const profileBoxes = document.querySelectorAll(".profile-box");
let currentIndex = 0;

function showNextProfile() {
  profileBoxes[currentIndex].classList.remove("active"); // Hilangkan kelas active dari profil saat ini
  currentIndex = (currentIndex + 1) % profileBoxes.length; // Tentukan indeks profile box berikutnya
  profileBoxes[currentIndex].classList.add("active"); // Tambahkan kelas active ke profile box berikutnya
  const translateValue = -currentIndex * (100 / profileBoxes.length); // Hitung nilai pergeseran
  carouselInner.style.transform = `translateX(${translateValue}%)`; // Geser carousel inner sesuai dengan indeks
}

// Fungsi untuk memulai slide otomatis
function startAutoSlide() {
  setInterval(showNextProfile, 5000); // Ganti angka ini sesuai dengan kebutuhan waktu jeda
}

// Memulai slide otomatis
startAutoSlide();

// dsfd
