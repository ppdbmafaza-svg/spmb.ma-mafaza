document.addEventListener("DOMContentLoaded", () => {

  // Smooth scroll untuk navbar
  const links = document.querySelectorAll('.navbar a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Efek hover untuk tombol program
  const programButtons = document.querySelectorAll('.program .btn-primary');
  programButtons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'translateY(-5px)';
      btn.style.boxShadow = '0 8px 20px rgba(0,0,0,0.25)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translateY(0)';
      btn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
    });
  });

  // Timeline interaktif (jika ada)
  const steps = document.querySelectorAll(".step");
  steps.forEach((step) => {
    step.addEventListener("click", () => {
      steps.forEach(s => s.classList.remove("active"));
      step.classList.add("active");
    });
  });

  // FAQ hanya buka satu
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

});
