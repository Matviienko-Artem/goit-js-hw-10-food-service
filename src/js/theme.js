const themeToggleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themeToggleRef.addEventListener('change', themeChecked);

function toggleTheme(oldTheme, newTheme) {
  bodyRef.classList.add(newTheme);
  bodyRef.classList.remove(oldTheme);
  localStorage.setItem('theme', newTheme);
}

function themeChecked() {
  if (themeToggleRef.checked) {
    toggleTheme(Theme.LIGHT, Theme.DARK);
  } else {
    toggleTheme(Theme.DARK, Theme.LIGHT);
  }
}

function memoryTheme() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    bodyRef.classList.add(Theme.DARK);
    themeToggleRef.checked = true;
  } else {
    bodyRef.classList.add(Theme.LIGHT);
  }
}

memoryTheme();
