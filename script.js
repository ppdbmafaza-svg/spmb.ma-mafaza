// ==================== SCRIPT.JS FINAL ====================

// Tunggu sampai DOM siap
document.addEventListener("DOMContentLoaded", () => {

  // -------------------- Timeline interaktif --------------------
  const steps = document.querySelectorAll(".step");
  steps.forEach((step) => {
    step.addEventListener("click", () => {
      steps.forEach(s => s.classList.remove("active"));
      step.classList.add("active");
    });
  });

  // -------------------- FAQ interaktif --------------------
  const details = document.querySelectorAll("details");
  details.forEach((det) => {
    det.addEventListener("toggle", () => {
      if (det.open) {
        details.forEach((other) => {
          if (other !== det) other.removeAttribute("open");
        });
      }
    });
  });

  // -------------------- Formulir dummy --------------------
  const form = document.getElementById("daftarForm");
  if(form){
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nama = form.nama.value;
      const jalur = form.jalur.value;
      alert(`Terima kasih ${nama}! Anda sudah memilih jalur ${jalur}. Data berhasil dikirim.`);
      form.reset();
    });
  }

  // -------------------- Animasi cards saat scroll --------------------
  const cards = document.querySelectorAll(".card");
  const animateCards = () => {
    const triggerBottom = window.innerHeight * 0.9;
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if(cardTop < triggerBottom){
        card.classList.add("show");
      }
    });
  };
  window.addEventListener("scroll", animateCards);
  animateCards(); // cek saat load halaman juga

  // -------------------- Bubble otomatis di banner --------------------
  const banner = document.querySelector(".banner");
  if(banner){
    const bubbleCount = 15;
    for(let i=0; i<bubbleCount; i++){
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");

      const size = Math.random() * 30 + 10; // 10-40px
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      bubble.style.left = `${Math.random() * 100}%`; // posisi horizontal random
      bubble.style.animationDuration = `${Math.random() * 10 + 8}s`; // 8-18s
      bubble.style.animationDelay = `${Math.random() * 5}s`; // 0-5s

      banner.appendChild(bubble);
    }
  }

});

// -------------------- Hamburger menu toggle --------------------
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(toggle && navLinks){
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
