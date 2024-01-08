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

function toggleSplitScreen() {
    var checkbox = document.getElementById('splitScreenCheckbox');
    var mainContent = document.querySelector('main');

    if (checkbox.checked) {
        // Create left and right sections for split-screen effect
        var leftSection = document.createElement('div');
        leftSection.classList.add('split-section', 'left-section');
        leftSection.innerHTML = mainContent.innerHTML;

        var rightSection = document.createElement('div');
        rightSection.classList.add('split-section', 'right-section');
        rightSection.innerHTML = mainContent.innerHTML;

        // Add a visible border in the middle
        var border = document.createElement('div');
        border.classList.add('split-border');

        // Replace main content with left and right sections
        mainContent.innerHTML = '';
        mainContent.appendChild(leftSection);
        mainContent.appendChild(border);
        mainContent.appendChild(rightSection);
    } else {
        // Reset to the original state
        mainContent.innerHTML = '<div class="meal-item">...</div>';
    }
}