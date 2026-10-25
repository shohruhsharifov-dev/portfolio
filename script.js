// Wait for DOM content to load fully before running scripts
document.addEventListener('DOMContentLoaded', () => {

  // 1. Dynamic Year Update in Footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Light / Dark Theme Switcher
  const themeToggleBtn = document.getElementById('theme-toggle');
  const iconSun = document.querySelector('.icon-sun');
  const iconMoon = document.querySelector('.icon-moon');

  // Check for saved theme preference in LocalStorage or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    iconSun.classList.add('hidden');
    iconMoon.classList.remove('hidden');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    iconSun.classList.remove('hidden');
    iconMoon.classList.add('hidden');
  }

  // Toggle Theme Handler
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      let targetTheme = 'light';

      if (currentTheme === 'light') {
        targetTheme = 'dark';
        iconSun.classList.add('hidden');
        iconMoon.classList.remove('hidden');
      } else {
        iconSun.classList.remove('hidden');
        iconMoon.classList.add('hidden');
      }

      document.documentElement.setAttribute('data-theme', targetTheme);
      localStorage.setItem('theme', targetTheme);
    });
  }

  // 3. Mobile Navigation Menu Toggle
  const navToggleBtn = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggleBtn && navMenu) {
    navToggleBtn.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      
      if (isVisible) {
        navMenu.style.display = '';
      } else {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '70px';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.backgroundColor = 'var(--bg-primary)';
        navMenu.style.padding = '1.5rem 2rem';
        navMenu.style.borderBottom = '1px solid var(--border)';
      }
    });

    // Close mobile menu when clicking any nav link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navMenu.style.display = '';
        }
      });
    });
  }

});