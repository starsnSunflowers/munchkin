function toggleMusic() {
    let music = document.getElementById('bg-music');
    let button = document.querySelector('.music-button');

    if (music.paused) {
        music.play().then(() => {
            button.textContent = 'Pause Music ⏸️';
        }).catch(error => {
            alert("Autoplay is blocked! Please click 'Play Music' to start.");
        });
    } else {
        music.pause();
        button.textContent = 'Play Music 🎵';
    }
}

// Ensure music starts when the user interacts with the page
document.addEventListener('DOMContentLoaded', function () {
    let music = document.getElementById('bg-music');
    document.body.addEventListener('click', function () {
        music.muted = false; // Ensures music can play
    });
});
