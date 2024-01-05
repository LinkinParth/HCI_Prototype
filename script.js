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


function handleProfileImages() {
    document.querySelector('.additional-buttons').style.display = 'flex';
}