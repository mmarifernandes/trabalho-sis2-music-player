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

const themeIconConfig = document.getElementById('config');
const themeIconLeave = document.getElementById('leave');

const ICON_LIGHT_CONFIG = 'assets/config-white.png';
const ICON_LIGHT_LEAVE = 'assets/leave-white.png';
const ICON_DARK_CONFIG = 'assets/config-dark.png';
const ICON_DARK_LEAVE = 'assets/leave-dark.png';
const ICON_SUN= 'assets/sol.png';
const ICON_MOON= 'assets/Vector (7).png';

function updateThemeIcons(isDark) {
    if (themeIconConfig) {
        themeIconConfig.src = isDark ? ICON_LIGHT_CONFIG : ICON_DARK_CONFIG;
    }
    if (themeIconLeave) {
        themeIconLeave.src = isDark ? ICON_LIGHT_LEAVE : ICON_DARK_LEAVE;
    }
    if (themeToggle) {
        themeToggle.src = isDark ? ICON_SUN : ICON_MOON;
    }

}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

updateThemeIcons(body.classList.contains('dark-mode'));

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        const isDark = body.classList.contains('dark-mode');
        
        updateThemeIcons(isDark);

        if (isDark) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.removeItem('theme');
        }
    });
}

const playButton = document.getElementById('play-button');
const playIcon = playButton.querySelector('img');
const musica = new Audio('assets/parachute.mp3');
musica.volume = 0.01;
musica.loop = true;
musica.currentTime = 4

playButton.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        playIcon.src = './assets/pause-button.png';

    } else {
        musica.pause();
        playIcon.src = './assets/play-button.png';
    }
});


