const progressBar = document.querySelector('.progress-bar');
const volumeBar = document.querySelector('.volume-bar');

function updateRangeBar(range) {
    if (!range) return;
    const min = Number(range.min) || 0;
    const max = Number(range.max) || 100;
    const value = Number(range.value) || 0;
    const percent = ((value - min) / (max - min)) * 100;
    const fillColor = '#27AE60';
    const emptyColor = '#E0E0E0';
    range.style.background = `linear-gradient(to right, ${fillColor} ${percent}%, ${emptyColor} ${percent}%)`;
}

if (progressBar) {
    progressBar.addEventListener('input', () => updateRangeBar(progressBar));
    updateRangeBar(progressBar);
}

if (volumeBar) {
    volumeBar.addEventListener('input', () => updateRangeBar(volumeBar));
    updateRangeBar(volumeBar);
}

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
});