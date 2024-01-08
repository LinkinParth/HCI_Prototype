function setUsername() {
    var username = document.getElementById("username-input").value; 
    document.getElementById("username").textContent = username;

    var allergien = getSelectedOptions("allergien-select");
    var preferenzen = getSelectedOptions("preferenzen-select");
    var bestätigung = confirm("Möchtest du das Profil erstellen?");

    console.log("Ausgewählte Allergien:", allergien);
    console.log("Ausgewählte Präferenzen:", preferenzen);

    if (bestätigung) {
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

