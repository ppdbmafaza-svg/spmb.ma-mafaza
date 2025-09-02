document.addEventListener("DOMContentLoaded", () => {
  // Navbar toggle
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Timeline interaktif
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
