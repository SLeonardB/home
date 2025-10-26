// Mobile menu toggle
const toggle = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', () => links.classList.toggle('open'));

// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Light fade-ins on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});
document.querySelectorAll('section').forEach(s => observer.observe(s));
