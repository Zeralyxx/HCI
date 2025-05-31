const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Function to close the menu
function closeNavMenu() {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
}

// Event listener for the hamburger button (existing functionality)
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// NEW: Event listener to close the menu when clicking outside
document.addEventListener('click', (event) => {
    // Check if the click happened outside the nav-links AND outside the hamburger button
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        closeNavMenu();
    }
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

document.addEventListener('DOMContentLoaded', function () {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const loginBtn = document.getElementById('login-btn');
  const profileIcon = document.getElementById('profile-icon');

  if (isLoggedIn) {
    loginBtn.classList.add('hidden');
    profileIcon.classList.remove('hidden');
  } else {
    loginBtn.classList.remove('hidden');
    profileIcon.classList.add('hidden');
  }
});
