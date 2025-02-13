// Function to Toggle Music Playback
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

// Ensure Music Starts When User Clicks Anywhere on the Page
document.addEventListener('DOMContentLoaded', function () {
    let music = document.getElementById('bg-music');
    function enableMusic() {
        music.muted = false; // Allow user interaction to unmute
        document.body.removeEventListener('click', enableMusic);
    }
    document.body.addEventListener('click', enableMusic);
});

// Function to Handle Reveal Buttons (GIFs & Number)
function reveal(button) {
    let numberElement = document.getElementById('number');
    let imageContainer = document.getElementById('imageContainer');
    let imageDisplay = document.getElementById('imageDisplay');

    // Hide both initially
    numberElement.style.display = 'none';
    imageContainer.style.display = 'none';

    if (button.dataset.correct) {
        // If the correct button is clicked, show the number
        numberElement.style.display = 'block';
    } else if (button.dataset.img) {
        // If an image is associated with the button, show it
        imageDisplay.src = button.dataset.img;
        imageContainer.style.display = 'block';
    }
}
