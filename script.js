// Function to Reveal Content
function reveal(button) {
    document.getElementById('number').style.display = 'none';
    document.getElementById('imageContainer').style.display = 'none';

    if (button.dataset.correct) {
        document.getElementById('number').style.display = 'block';
    } else {
        let imgSrc = button.dataset.img;
        document.getElementById('imageDisplay').src = imgSrc;
        document.getElementById('imageContainer').style.display = 'block';
    }
}

// Function to Handle Music Playback
function toggleMusic() {
    let music = document.getElementById('bg-music');
    let button = document.querySelector('.music-button');

    if (music.paused) {
        music.play().catch(error => {
            alert("Autoplay is blocked! Please click 'Play Music' to start.");
        });
        button.textContent = 'Pause Music ⏸️';
    } else {
        music.pause();
        button.textContent = 'Play Music 🎵';
    }
}

// Ensure Music Loads Properly on User Interaction
document.addEventListener('DOMContentLoaded', function () {
    let music = document.getElementById('bg-music');
    document.body.addEventListener('click', function () {
        music.muted = false; // Allow user interaction to unmute
    });
});
