function setUsername() {
    var username = document.getElementById("username-input").value;
    document.getElementById("username").textContent = username;

    var allergien = getSelectedOptions("allergien-select");
    var preferenzen = getSelectedOptions("preferenzen-select");
    var bestätigung = confirm("Möchtest du das Profil erstellen?");

    console.log("Ausgewählte Allergien:", allergien);
    console.log("Ausgewählte Präferenzen:", preferenzen);

    // Call the highlightMatchingMeals function with selected allergies and preferences
    highlightMatchingMeals(allergien, preferenzen);

    if (bestätigung) {
        window.location.href = 'menu.html';
    } else {
        console.log("Profil nicht registriert!");
    }
}




function speichern() {
    var username = document.getElementById("username-input").value; 
    document.getElementById("username").textContent = username;

    var allergien = getSelectedOptions("allergien-select");
    var preferenzen = getSelectedOptions("preferenzen-select");
    var bestätigung = confirm("Möchtest du das Profil speichern?");

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

    var allMeals = document.querySelectorAll('.main-content');
    console.log("Number of meals found:", allMeals.length);

    allMeals.forEach(function (meal) {
        var mealAllergien = [];
        var mealPreferenzen = [];

        meal.querySelectorAll('.menu-tags .tag').forEach(function (tag) {
            if (tag.classList.contains('gluten-free')) {
                mealAllergien.push('gluten');
            } else if (tag.classList.contains('vegan')) {
                mealPreferenzen.push('vegan');
            } else if (tag.classList.contains('vegetarian')) {
                mealPreferenzen.push('vegetarian');
            } else if (tag.classList.contains('other')) {
                mealAllergien.push('soja');
            }
            // Füge weitere Tags hinzu, falls erforderlich
        });

        console.log("Meal allergien:", mealAllergien);
        console.log("Meal preferenzen:", mealPreferenzen);

        var allergienMatch = allergien.every(function (allergie) {
            return mealAllergien.includes(allergie);
        });

        var preferenzenMatch = preferenzen.some(function (preferenz) {
            return mealPreferenzen.includes(preferenz);
        });

        // Hier wird die Klasse highlighted überprüft
        var highlightedClass = meal.classList.contains('highlighted');

        if (allergienMatch && preferenzenMatch && !highlightedClass) {
            console.log("Meal should be highlighted:", meal);
            meal.classList.add('highlighted');
        } else if (!allergienMatch || !preferenzenMatch) {
            console.log("Meal should not be highlighted:", meal);
            meal.classList.remove('highlighted');
        }
    });
}




