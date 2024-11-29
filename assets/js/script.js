const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 350) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
const getstarted = document.getElementById('getstarted');

window.addEventListener('scroll', () => {
  if (window.scrollY > 350) {
    getstarted.classList.add('scrolled');
  } else {
    getstarted.classList.remove('scrolled');
  }
});