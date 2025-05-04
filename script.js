const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

AOS.init({
  duration: 800,    // animation duration in ms
  once: false        // only animate once when scrolled into view
});