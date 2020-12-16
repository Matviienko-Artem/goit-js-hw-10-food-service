const themeToggleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

themeToggleRef.addEventListener('change', themeChecked);

function themeChecked() {
  if (themeToggleRef.checked) {
    bodyRef.classList.add('dark-theme');
    bodyRef.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    bodyRef.classList.add('light-theme');
    bodyRef.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light-theme');
  }
}

function memoryTheme() {
  if (localStorage.getItem('theme') === 'dark-theme') {
    bodyRef.classList.add('dark-theme');
    themeToggleRef.checked = true;
  }
}

memoryTheme();
