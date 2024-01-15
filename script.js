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

// Function to toggle the side menu
function toggleSideMenu() {
    var sideMenu = document.getElementById('sideMenu');
    sideMenu.style.left = (sideMenu.style.left === '0px') ? '-250px' : '0';
}

// Function to open the user profile
function openUserProfile() {
 // Add your logic for opening the user profile
}
  
// Function to open the language menu
function openLanguageMenu() {
// Add your logic for opening the language menu
}
  
// Function to open the settings menu
function openSettingsMenu() {
// Add your logic for opening the settings menu
}
  
// Function to open the simulation menu
function openSimulationMenu() {
// Add your logic for opening the simulation menu
}
  
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

function openUserProfile() {
    // Handle opening user profile
}

function openLanguageMenu() {
    // Handle opening language menu
}

function openSettingsMenu() {
    // Handle opening settings menu
}

function openSimulationMenu() {
    // Handle opening simulation menu
}

  