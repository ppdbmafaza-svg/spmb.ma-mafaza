// Semua script dalam satu DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  // ================= TIMELINE =================
  const steps = document.querySelectorAll(".step");
  steps.forEach((step) => {
    step.addEventListener("click", () => {
      steps.forEach(s => s.classList.remove("active"));
      step.classList.add("active");
    });
  });

  // ================= FAQ (Accordion) =================
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

  // ================= FORMULIR DUMMY =================
  const form = document.getElementById("daftarForm");
  if (form) {  // cek dulu biar nggak error kalau form ga ada
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nama = form.nama.value;
      const jalur = form.jalur.value;
      alert(`Terima kasih ${nama}! Anda sudah memilih jalur ${jalur}. Data berhasil dikirim.`);
      form.reset();
    });
  }

  // ================= NAVBAR TOGGLE (MOBILE) =================
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});
