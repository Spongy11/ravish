/* ==================================================================
   VISIT INDIA WITH RAVISH — SCRIPT PRINCIPALE (JS VANILLA)
   Nessuna dipendenza esterna. Diviso in 4 blocchi indipendenti:
   1. Navbar: sfondo solido allo scroll + menu mobile
   2. Anno corrente nel footer
   3. Animazioni "fade-in" on-scroll (IntersectionObserver)
   4. Lightbox della galleria immagini
   ================================================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- 1. NAVBAR ---------- */
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  // Aggiunge lo sfondo solido alla navbar dopo un piccolo scroll
  function updateNavbarBackground() {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
  updateNavbarBackground();
  window.addEventListener("scroll", updateNavbarBackground);

  // Apertura/chiusura del menu su mobile
  navToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Chiude il menu mobile quando si clicca su un link (comodo su iOS/Android)
  navMenu.querySelectorAll(".navlink").forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- 2. ANNO CORRENTE NEL FOOTER ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- 3. ANIMAZIONI ON-SCROLL (fade-in) ---------- */
  const fadeEls = document.querySelectorAll(".fade-in");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // l'animazione parte una sola volta
          }
        });
      },
      { threshold: 0.15 }
    );

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback per browser molto vecchi senza IntersectionObserver
    fadeEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------- 4. LIGHTBOX GALLERIA (JS puro, nessuna libreria) ---------- */
  const galleryItems = Array.from(document.querySelectorAll(".gallery__item"));
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");

  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    const item = galleryItems[currentIndex];
    const fullSrc = item.getAttribute("data-full");
    const altText = item.querySelector("img").getAttribute("alt");

    lightboxImage.setAttribute("src", fullSrc);
    lightboxImage.setAttribute("alt", altText);

    lightbox.hidden = false;
    document.body.style.overflow = "hidden"; // blocca lo scroll dietro al lightbox
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImage.setAttribute("src", "");
    document.body.style.overflow = "";
  }

  function showNext(step) {
    currentIndex = (currentIndex + step + galleryItems.length) % galleryItems.length;
    openLightbox(currentIndex);
  }

  galleryItems.forEach(function (item, index) {
    item.addEventListener("click", function () {
      openLightbox(index);
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxNext.addEventListener("click", function () { showNext(1); });
  lightboxPrev.addEventListener("click", function () { showNext(-1); });

  // Chiude il lightbox cliccando sullo sfondo scuro (fuori dall'immagine)
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  // Navigazione da tastiera: ESC per chiudere, frecce per scorrere
  document.addEventListener("keydown", function (event) {
    if (lightbox.hidden) return;

    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowRight") showNext(1);
    if (event.key === "ArrowLeft") showNext(-1);
  });

});
