document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const usernameInput = document.getElementById("usernameInput");
    const emailInput = document.getElementById("EmailInput");
    const btnSubmit = document.getElementById("btnSubmit");

    usernameInput.addEventListener("keyup", validateForm);
    emailInput.addEventListener("keyup", validateForm);

    function validateForm(){
        const usernameValid = validateRequired(usernameInput);
        const emailValid = validateEmail(emailInput);

        btnSubmit.disabled = !(usernameValid && emailValid);
    }

    function validateEmail(input) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const email = input.value;
        if (email.match(emailRegex)) {
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
        if (input.value !== '') {
            input.classList.add("is-valid");
            input.classList.remove("is-invalid");
            return true;
        } else {
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
            return false;
        }
    }

    // Préparation des données à envoyer à l'API
    const userData = {
        username: usernameInput.value,
        email: emailInput.value
    };

    // Envoi de la requête à l'API via fetch
    fetch('https://votre-api-url.com/signup', {
        method: 'POST', // Méthode POST pour créer un utilisateur
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData) // Conversion des données en JSON
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // Retourne la réponse sous forme de JSON
        } else {
            throw new Error('Erreur lors de la soumission');
        }
    })
    .then(data => {
        console.log('Réponse API :', data); // Afficher la réponse API dans la console
        alert('Inscription réussie, un email de confirmation a été envoyé à ' + userData.email);
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert('Une erreur est survenue lors de l\'inscription');
    });
});
