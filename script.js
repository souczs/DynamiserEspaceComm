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
        // Créer un nouveau commentaire
        let listComm = document.getElementById("comment-list");

        let newDiv1 = document.createElement("div");
        newDiv1.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");

        let newDiv2 = document.createElement("div");
        newDiv2.classList.add("flex-1", "py-10", "border-t", "border-gray-200");

        // Ajouter le prénom + nom en titre du commentaire
        let newTitle = document.createElement("h3");
        newTitle.classList.add("font-medium", "text-gray-900");
        let senderName = document.createTextNode(firstName + " " + lastName);
        newTitle.appendChild(senderName);

        let newDiv3 = document.createElement("div");
        newDiv3.classList.add("prose", "prose-sm", "mt-4", "max-w-none", "text-gray-500");

        // Ajouter le commentaire en corps de texte sous le nom et prénom
        let newPar = document.createElement("p");
        let comment = document.createTextNode(textArea);
        newPar.appendChild(comment);

        newDiv3.appendChild(newPar); // Ajouter le <p> dans <div3>
        newDiv2.appendChild(newTitle); // Ajouter le <h3> dans <div2>
        newDiv2.appendChild(newDiv3); // Ajouter <div3> dans <div2>
        newDiv1.appendChild(newDiv2); // Ajouter <div2> dans <div1>

        // Ajouter le code dans la div #comment-list
        listComm.appendChild(newDiv1);
    }
});