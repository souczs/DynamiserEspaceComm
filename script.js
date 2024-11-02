// Récupérer le formulaire
let form = document.querySelector("form");

// Bloquer submit form et vérifier les conditions
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Récupérer les éléments du formulaire et le msg d'erreur
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let textArea = document.getElementById("message").value;
    let errorMsg = document.getElementById("error-message");

    // Afficher le message d'erreur si au moins un des éléments est vide
    if (firstName === "" || lastName === "" || textArea === ""){
        errorMsg.style.display = "block";
    } else {
        alert("Le commentaire peut être publié");
    }
});



