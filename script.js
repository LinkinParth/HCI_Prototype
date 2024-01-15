/*functions for the timer an loading the menu based on the timer */

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

/*functions for loading profile menu*/

function Create() {
    window.location.href = 'create.html';
}

function Edit() {
    window.location.href = 'edit.html';
}


/*functions for splitscreen mode*/

let splitScreenMode = false;

function toggleSplitScreen() {
    splitScreenMode = !splitScreenMode;

    const mainContent = document.querySelector('.main-content');
    const splitScreen = document.createElement('div');
    splitScreen.classList.add('split-screen');

    if (splitScreenMode) {
        // Create left and right sections for split-screen effect
        const leftSection = document.createElement('div');
        leftSection.classList.add('split-section', 'left-section');
        leftSection.innerHTML = mainContent.innerHTML;

        const rightSection = document.createElement('div');
        rightSection.classList.add('split-section');
        rightSection.innerHTML = '<h2>Daily Menu</h2><p>Replace this with your daily menu content.</p>';

        const border = document.createElement('div');
        border.classList.add('split-border');

        // Append sections to split-screen
        splitScreen.appendChild(leftSection);
        splitScreen.appendChild(border);
        splitScreen.appendChild(rightSection);

        mainContent.innerHTML = ''; // Clear main content
        mainContent.appendChild(splitScreen);
    } else {
        // Reset to the original state
        mainContent.innerHTML = '<div class="content"><h2>Main Content</h2><p>This is the main content area.</p></div>';
    }
}



/*functions for side menu*/

let sideMenuOpen = false;

function toggleSideMenu() {
    const sideMenu = document.querySelector('.side-menu'); // Use querySelector to select by class
    const mainContent = document.querySelector('.main-content');

    sideMenuOpen = !sideMenuOpen;

    if (sideMenuOpen) {
        sideMenu.style.left = '0'; // Adjust the left property
        mainContent.style.marginLeft = '250px'; // Adjust the margin as needed
    } else {
        sideMenu.style.left = '-250px'; // Adjust the left property
        mainContent.style.marginLeft = '0';
    }
}

function collapseSideMenu() {
    const sideMenu = document.getElementById('sideMenu');
    const mainContent = document.querySelector('.main-content');
    
    sideMenu.style.left = '-250px'; // Adjust based on your sidebar width
    sideMenuOpen = false;
    
    mainContent.style.marginLeft = '0';
    
}