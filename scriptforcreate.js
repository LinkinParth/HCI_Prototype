function setUsername() {
    var username = document.getElementById("username-input").value; 
    document.getElementById("username").textContent = username;

    var allergien = getSelectedOptions("allergien-select");
    var preferenzen = getSelectedOptions("preferenzen-select");
    var bestätigung = confirm("Möchtest du das Profil erstellen?");

    saveProfileData(username, allergien, preferenzen);

    console.log("Ausgewählte Allergien:", allergien);
    console.log("Ausgewählte Präferenzen:", preferenzen);

    if (bestätigung) {
        highlightMatchingMeals(allergien, preferenzen);
        window.location.href = 'menu.html';
    }else {
        console.log("Profil nicht regestriert!");
    }

    
}

function speichern() {
    var username = document.getElementById("username-input").value; 
    document.getElementById("username").textContent = username;

    var allergien = getSelectedOptions("allergien-select");
    var preferenzen = getSelectedOptions("preferenzen-select");
    var bestätigung = confirm("Möchtest du das Profil speichern?");

    saveProfileData(username, allergien, preferenzen);

    console.log("Ausgewählte Allergien:", allergien);
    console.log("Ausgewählte Präferenzen:", preferenzen);

    if (bestätigung) {
        window.location.href = 'menu.html';
    }else {
        console.log("Profil nicht gespeichert!");
    }
}

function getSelectedOptions(selectId) {
    var selectElement = document.getElementById(selectId);
    var selectoptions = [];
    for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].selected) {
            selectoptions.push(selectElement.options[i].value);
        }
        
    }
    return selectoptions;
}

document.getElementById("profile-form").addEventListener("submit", function(event) {
    event.preventDefault();
});

function highlightMatchingMeals(allergien, preferenzen) {
    console.log("Highlighting meals with allergien:", allergien, "and preferenzen:", preferenzen);

    var allMeals = document.querySelectorAll('.meal-item');
    allMeals.forEach(function (meal) {
        meal.classList.remove('highlighted');
    });

    allMeals.forEach(function (meal) {
        var mealAllergien = meal.classList.contains('gluten-free') ? ['gluten'] : [];
        var mealPreferenzen = meal.classList.contains('vegetarian') ? ['vegetarisch'] : [];
        mealPreferenzen.push(meal.classList.contains('vegan') ? 'vegan' : 'fleisch');

        console.log("Meal allergien:", mealAllergien);
        console.log("Meal preferenzen:", mealPreferenzen);

        var allergienMatch = allergien.every(function (allergie) {
            return mealAllergien.includes(allergie);
        });

        var preferenzenMatch = preferenzen.some(function (preferenz) {
            return mealPreferenzen.includes(preferenz);
        });

        if (allergienMatch && preferenzenMatch) {
            meal.classList.add('highlighted');
        }
    });
}


function saveProfileData(username, allergien, preferenzen) {
    var userProfile = {
        username: username,
        allergien: allergien,
        preferenzen: preferenzen,
    };

    localStorage.setItem("userProfile", JSON.stringify(userProfile));
}

function displayUserProfile() {
    var userProfile = JSON.parse(localStorage.getItem("userProfile"));

    document.getElementById("username").textContent = userProfile.username;

    highlightMatchingMeals(userProfile.allergien, userProfile.preferenzen);
}

