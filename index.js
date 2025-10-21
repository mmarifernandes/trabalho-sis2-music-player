const progressBar = document.querySelector('.progress-bar');

    function updateFill() {
        const min = progressBar.min || 0;
        const max = progressBar.max || 100;
        const value = progressBar.value;

        const porcentagem = ((value - min) / (max - min)) * 100;

        const fillColor = '#27AE60'; 
        const emptyColor = '#E0E0E0';

        progressBar.style.background = `linear-gradient(to right, ${fillColor} ${porcentagem}%, ${emptyColor} ${porcentagem}%)`;
    }

    progressBar.addEventListener('input', updateFill);

    updateFill();