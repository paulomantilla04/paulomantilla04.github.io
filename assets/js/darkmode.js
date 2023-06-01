
const themeToggle = document.getElementById('theme-toggle');
const darkTheme = 'dark-theme';

const selectedTheme = localStorage.getItem('selected-theme');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeToggle.querySelector('input').checked = (selectedTheme === 'dark');
}

themeToggle.addEventListener('change', () => {
    document.body.classList.toggle(darkTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
});