// Implémenter le javascript de ma page de contact

const inputTitre = document.getElementById("TitreInput");
const inputDescription = document.getElementById("DescriptionInput");
const inputEmail = document.getElementById("EmailInput");
const btnContact = document.getElementById("btnContactEnvoyer");

// Ajout des événements 'input' pour capturer toutes les modifications
inputTitre.addEventListener("input", validateForm);
inputDescription.addEventListener("input", validateForm);
inputEmail.addEventListener("input", validateForm);

function validateForm() {
    const titreOk = validateRequired(inputTitre);
    const descriptionOk = validateRequired(inputDescription);
    const emailOk = validateEmail(inputEmail);

    // Activer ou désactiver le bouton d'envoi en fonction de la validation
    btnContact.disabled = !(titreOk && descriptionOk && emailOk);
}

function validateEmail(input) {
    // Définir mon regex pour la validation des e-mails
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value.trim(); // Supprimer les espaces inutiles
    if (emailRegex.test(mailUser)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateRequired(input) {
    if (input.value.trim() !== '') {  // Validation de champ non vide
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}
