const mailInput = document.getElementById("MailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

async function checkCredentials() {
    // Désactiver le bouton pour éviter plusieurs requêtes
    btnSignin.disabled = true;

    // Récupérer les valeurs des champs et les sécuriser
    const email = mailInput.value.trim();
    const password = passwordInput.value;

    if (!validateEmail(email) || password === '') {
        displayInvalidInput();
        btnSignin.disabled = false;
        return;
    }

    try {
        // Appel à l'API pour vérifier les credentials
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            const { token, role } = data;

            // Stocker le token et le rôle dans les cookies
            setToken(token);
            setCookie(RoleCookieName, role, 7);

            // Rediriger l'utilisateur vers la page d'accueil
            window.location.replace("/");
        } else {
            displayInvalidInput();
        }
    } catch (error) {
        console.error("Erreur lors de la connexion :", error);
        displayInvalidInput();
    } finally {
        btnSignin.disabled = false; // Réactiver le bouton
    }
}

function displayInvalidInput() {
    // Ajouter une classe pour indiquer un champ invalide
    mailInput.classList.add("is-invalid");
    passwordInput.classList.add("is-invalid");

    // Retirer l'erreur après un délai
    setTimeout(() => {
        mailInput.classList.remove("is-invalid");
        passwordInput.classList.remove("is-invalid");
    }, 3000);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Fonctions de gestion des cookies 
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = `${name}=${value || ""}${expires}; path=/`;
}

function setToken(token) {
    setCookie('accesstoken', token, 7); // Stockage du token pour 7 jours
}
