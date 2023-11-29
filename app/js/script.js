const radioButtons = document.querySelectorAll('.toggle__wrapper input');
const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const body = document.querySelector('body');

const setDarkMode = () => {
  body.classList = 'dark';
  localStorage.setItem('colorMode', 'dark');
}

const setLightMode = () => {
  body.classList = 'light';
  localStorage.setItem('colorMode', 'light');
}

const colorModeFromLocalStorage = () => {
  return localStorage.getItem('colorMode');
}

const colorModeFromPreferences = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const loadAndUpdateColor = () => {
  const color = colorModeFromLocalStorage() || colorModeFromPreferences();
  color == 'dark' ? darkButton.click() : lightButton.click();
}

for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('click', event => {
    if (darkButton.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  })
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
  event.matches ? darkButton.click() : lightButton.click();
});

loadAndUpdateColor();