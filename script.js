// ======================================================
// ANNÉE DYNAMIQUE DANS LE FOOTER
// ======================================================
document.getElementById('annee').textContent = new Date().getFullYear();

// ======================================================
// MENU MOBILE (BURGER)
// ======================================================
const burger = document.querySelector('.burger');
const navLiens = document.querySelector('.nav-liens');

burger.addEventListener('click', () => {
  navLiens.classList.toggle('ouvert');
});

// Fermer le menu au clic sur un lien (mobile)
navLiens.querySelectorAll('a').forEach(lien => {
  lien.addEventListener('click', () => {
    navLiens.classList.remove('ouvert');
  });
});

// ======================================================
// ANIMATION DOUCE À L'APPARITION DES SECTIONS
// ======================================================
const observateur = new IntersectionObserver((entrees) => {
  entrees.forEach(entree => {
    if (entree.isIntersecting) {
      entree.target.style.opacity = '1';
      entree.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observateur.observe(section);
});
