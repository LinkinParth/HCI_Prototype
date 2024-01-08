document.addEventListener('DOMContentLoaded', function () {
    var timerElement = document.getElementById('timer');
    var seconds = 60; // Change this to the desired countdown time

    function updateTimer() {
        timerElement.textContent = seconds + 's';

        if (seconds > 0) {
            seconds--;
            setTimeout(updateTimer, 1000);
        } else {
            // Timer reached zero, navigate back to the language selection page
            window.location.href = 'index.html';
        }
    }

    updateTimer();
});

function toggleSettingsMenu() {
    var settingsMenu = document.getElementById('settingsMenu');
    settingsMenu.style.display = (settingsMenu.style.display === 'block') ? 'none' : 'block';
}

// Close the settings menu if clicked outside of it
document.addEventListener('click', function (event) {
    var settingsMenu = document.getElementById('settingsMenu');
    if (event.target !== settingsMenu && !settingsMenu.contains(event.target)) {
        settingsMenu.style.display = 'none';
    }
});

function handleImageClick() {
    document.querySelector('.additional-buttons').style.display = 'flex';
}

function Create() {
    window.location.href = 'create.html';
}

function Edit() {
    window.location.href = 'edit.html';
}

