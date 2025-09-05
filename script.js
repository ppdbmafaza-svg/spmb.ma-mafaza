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

  // -------------------- Bubble otomatis di banner --------------------
  const banner = document.querySelector(".banner");
  if(banner){
    const bubbleCount = 15;
    for(let i=0; i<bubbleCount; i++){
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");

      const size = Math.random() * 30 + 10; 
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 10 + 8}s`;
      bubble.style.animationDelay = `${Math.random() * 5}s`;

      banner.appendChild(bubble);
    }
  }

  // -------------------- Animasi card program pakai IntersectionObserver --------------------
  const cards = document.querySelectorAll(".program .card");
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach(card => observer.observe(card));

});

// -------------------- Hamburger menu toggle --------------------
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(toggle && navLinks){
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
