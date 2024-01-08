function setUsername() {
    var username = document.getElementById("benutzer-input").value; 
    document.getElementById("username").textContent = username;

    var allergien = getSelectedOptions("allergien-select");
    var preferenzen = getSelectedOptions("preferenzen-select");

    console.log("Ausgewählte Allergien:", allergien);
    console.log("Ausgewählte Präferenzen:", preferenzen);
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

