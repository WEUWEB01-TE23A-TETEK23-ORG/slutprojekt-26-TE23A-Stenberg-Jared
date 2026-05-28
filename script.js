// Funktion för när användaren klickar "Ja"
function accepteraKakor() {
    alert("Välkommen in till Gamer Room! Här får du en kaka 🍪");
    // Döljer hela cookie-rutan så att man kan använda sidan
    document.getElementById("cookie-ruta").style.display = "none";
}

// Funktion för när användaren klickar "Nej"
function nekaKakor() {
    alert("Då blir det inga kakor till dig, hejdå:(");
    // Skickar iväg användaren till Google
    window.location.href = "https://www.google.com"; 
}