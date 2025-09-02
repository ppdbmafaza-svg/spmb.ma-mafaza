// Timeline interaktif
document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step");
  steps.forEach((step, index) => {
    step.addEventListener("click", () => {
      steps.forEach(s => s.classList.remove("active"));
      step.classList.add("active");
    });
  });

  // FAQ interaktif (smooth scroll)
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

  // Formulir dummy
  const form = document.getElementById("daftarForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nama = form.nama.value;
    const jalur = form.jalur.value;
    alert(`Terima kasih ${nama}! Anda sudah memilih jalur ${jalur}. Data berhasil dikirim.`);
    form.reset();
  });
});
