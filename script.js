// Hamburger menu toggle
    const toggle=document.querySelector(".menu-toggle");
    const navLinks=document.querySelector(".nav-links");
    if(toggle && navLinks){ toggle.addEventListener("click",()=>{ navLinks.classList.toggle("active"); }); }

    // Timeline interaktif
    document.querySelectorAll(".timeline-item").forEach(item=>{
      item.addEventListener("click",()=>{ 
        document.querySelectorAll(".timeline-item").forEach(i=>i.classList.remove("active"));
        item.classList.add("active");
      });
    });

    // Galeri infinite scroll
    const galeriWrapper = document.querySelector(".galeri .cards-wrapper");
    const galeri = document.querySelector(".galeri .cards");
    let scrollAmount = 0;
    function scrollGaleri() {
      scrollAmount += 1;
      if(scrollAmount >= galeri.scrollWidth / 2) scrollAmount = 0;
      galeriWrapper.scrollLeft = scrollAmount;
      requestAnimationFrame(scrollGaleri);
    }
    if(galeriWrapper && galeri){ requestAnimationFrame(scrollGaleri); }

    // Lightbox
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".lightbox .close");
    document.querySelectorAll(".galeri .card img").forEach(img=>{
      img.addEventListener("click",()=>{
        lightbox.style.display="flex";
        lightboxImg.src=img.src;
        lightboxImg.alt=img.alt;
      });
    });
    closeBtn.addEventListener("click",()=>{ lightbox.style.display="none"; });
    lightbox.addEventListener("click",(e)=>{ if(e.target===lightbox) lightbox.style.display="none"; });
  </script>

</body>
</html>
