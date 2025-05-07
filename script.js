const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Highlight current nav link
const currentPage = window.location.pathname.split("/").pop(); // e.g., 'home.html'
const navAnchors = document.querySelectorAll('.nav-links a');

navAnchors.forEach(link => {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage) {
    link.classList.add('active');
  }
});


AOS.init({
  duration: 800,    // animation duration in ms
  once: false        // only animate once when scrolled into view
});

const toggles = document.querySelectorAll('.category-toggle');
  const lists = document.querySelectorAll('.icon-list');

  toggles.forEach((toggle, index) => {
    toggle.addEventListener('click', () => {
      toggles.forEach(t => t.classList.remove('active'));
      lists.forEach(l => l.classList.remove('open'));

      toggle.classList.add('active');
      lists[index].classList.add('open');
    });
  });

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;

    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    tabContents.forEach(content => {
      content.classList.remove('active');
      if (content.id === tab) {
        content.classList.add('active');

        // Restart animations by temporarily removing & re-adding data-aos
        const aosElements = content.querySelectorAll('[data-aos]');
        aosElements.forEach(el => {
          el.setAttribute('data-aos', el.getAttribute('data-aos')); // Re-set the same value
        });
      }
    });

    AOS.refreshHard(); // Forces full reinitialization including re-triggers
  });
});


