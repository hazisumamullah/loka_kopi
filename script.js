// Background slideshow
const images = ["img/kopi.jpg", "img/menu robusta.jpg", "img/kopi1.jpg"];
const bg1 = document.querySelectorAll(".header-bg")[0];
const bg2 = document.querySelectorAll(".header-bg")[1];

let currentIndex = 0;
let isBg1Active = true;

bg1.style.backgroundImage = `url('${images[0]}')`;
bg1.classList.add("active");

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  const nextImage = images[currentIndex];

  if (isBg1Active) {
    bg2.style.backgroundImage = `url('${nextImage}')`;
    bg2.classList.add("active");
    bg1.classList.remove("active");
  } else {
    bg1.style.backgroundImage = `url('${nextImage}')`;
    bg1.classList.add("active");
    bg2.classList.remove("active");
  }

  isBg1Active = !isBg1Active;
}, 2500);

// Mobile menu toggle
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("navOverlay");
const icon = menuIcon.querySelector("i");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  overlay.classList.toggle("show");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});

document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    overlay.classList.remove("show");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
  });
});

overlay.addEventListener("click", () => {
  navLinks.classList.remove("show");
  overlay.classList.remove("show");
  icon.classList.add("fa-bars");
  icon.classList.remove("fa-times");
});

// Custom alert function
function showCustomAlert(message) {
  const alertBox = document.getElementById("customAlert");
  alertBox.textContent = message;
  alertBox.classList.add("show");
  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 3000);
}

// Contoh penggunaan alert saat tombol diklik
const addToCartBtn = document.getElementById("addToCartBtn");
addToCartBtn.addEventListener("click", () => {
  showCustomAlert("Arabika 100g telah ditambahkan ke Keranjang.");
});
