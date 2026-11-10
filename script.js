// Borde inferior del menú al hacer scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// Año actual en el pie
document.getElementById('year').textContent = new Date().getFullYear();
