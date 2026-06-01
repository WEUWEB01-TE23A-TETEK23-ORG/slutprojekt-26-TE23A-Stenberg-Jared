// Funktion för när användaren klickar "Ja"
function accepteraKakor() {
    alert("Välkommen in till Gamer Room! Här får du en kaka🍪");
    
    // Gömmer cookie-rutan genom att ändra dess CSS-stil till "none"
    document.getElementById("cookie-ruta").style.display = "none";
}

// Funktion för när användaren klickar "Nej"
function nekaKakor() {
    alert("Då blir det inga kakor för dig, hejdå:(");
    
    // Skickar iväg användaren till Google
    window.location.href = "https://www.google.com"; 
}