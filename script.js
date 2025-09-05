document.addEventListener("DOMContentLoaded", () => {

  // Hamburger menu toggle
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if(toggle && navLinks){
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Timeline interaktif (jika ada step)
  const steps = document.querySelectorAll(".step");
  steps.forEach(step => {
    step.addEventListener("click", () => {
      steps.forEach(s => s.classList.remove("active"));
      step.classList.add("active");
    });
  });

  // Lightbox untuk galeri
  const galleryCards = document.querySelectorAll(".galeri .card img");
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");
  lightbox.innerHTML = `<span class="close">&times;</span><img class="lightbox-img" src="">`;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector(".lightbox-img");
  const closeBtn = lightbox.querySelector(".close");

  galleryCards.forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if(e.target === lightbox) lightbox.style.display = "none";
  });

  // Galeri otomatis scroll
  const galeriCards = document.querySelector(".galeri .cards");
  if(galeriCards){
    let scrollAmount = 0;
    const scrollStep = 2; // pixel per frame
    function autoScroll(){
      scrollAmount += scrollStep;
      if(scrollAmount >= galeriCards.scrollWidth - galeriCards.clientWidth){
        scrollAmount = 0; // balik ke awal
      }
      galeriCards.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      requestAnimationFrame(autoScroll);
    }
    autoScroll();
  }

});
