document.addEventListener('DOMContentLoaded', function () {
    // Function to set the selected language and navigate to the main menu
    function selectLanguage(language) {
        localStorage.setItem('selectedLanguage', language);
        window.location.href = 'menu.html';
    }

    // Event listeners for language buttons
    document.getElementById('german-btn').addEventListener('click', function () {
        selectLanguage('german');
    });

    document.getElementById('english-btn').addEventListener('click', function () {
        selectLanguage('english');
    });

    document.getElementById('independent-btn').addEventListener('click', function () {
        selectLanguage('independent');
    });
});
