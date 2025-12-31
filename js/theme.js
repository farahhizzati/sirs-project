// theme.js - Dark/Light Mode Toggle

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply theme on page load
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

// Create theme toggle button
function createThemeToggle() {
  // Check if button already exists
  if (document.querySelector('.theme-toggle')) return;
  
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'theme-toggle';
  toggleBtn.setAttribute('aria-label', 'Toggle dark mode');
  toggleBtn.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  
  // Add click event
  toggleBtn.addEventListener('click', toggleTheme);
  
  // Add to body
  document.body.appendChild(toggleBtn);
}

// Toggle theme function
function toggleTheme() {
  const body = document.body;
  const toggleBtn = document.querySelector('.theme-toggle');
  
  if (body.classList.contains('dark-mode')) {
    // Switch to light mode
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
    toggleBtn.innerHTML = '🌙';
  } else {
    // Switch to dark mode
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    toggleBtn.innerHTML = '☀️';
  }
}


if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', createThemeToggle);
} else {
  createThemeToggle();
}