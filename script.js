// Funktion för när användaren klickar "Ja"
function accepteraKakor() {
    alert("Tack för att du har accepterat kakor🍪 Välkommen in till Gamer Room!");
    // Döljer hela cookie-rutan så att man kan använda sidan
    document.getElementById("cookie-ruta").style.display = "none";
}

// Funktion för när användaren klickar "Nej"
function nekaKakor() {
    alert("DÅ blir det inga kakor för dig, hejdå:(");
    // Skickar iväg användaren till Google
    window.location.href = "https://www.google.com"; 
}