// Gestion des cookies
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Ajoute x jours en millisecondes
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = `${name}=${value || ""}${expires}; path=/`;
}

function getCookie(name) {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim(); // Supprime les espaces superflus
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

// Gestion des tokens et rôles
const tokenCookieName = "accesstoken";
const RoleCookieName = "role";

// Déconnexion de l'utilisateur
const signoutBtn = document.getElementById("signout-btn");
if (signoutBtn) {
    signoutBtn.addEventListener("click", signout);
}

function signout() {
    eraseCookie(tokenCookieName);
    eraseCookie(RoleCookieName);
    window.location.reload();
}

// Récupération et gestion des rôles et tokens
function getRole() {
    return getCookie(RoleCookieName);
}

function setToken(token) {
    setCookie(tokenCookieName, token, 7); // Le token est valide pour 7 jours
}

function getToken() {
    return getCookie(tokenCookieName);
}

function isConnected() {
    const token = getToken();
    return token !== null && token !== undefined;
}

// Gestion de l'affichage des éléments en fonction du rôle
function showAndHideElementsForRoles() {
    const userConnected = isConnected();
    const role = getRole();

    const allElementsToEdit = document.querySelectorAll('[data-show]');

    allElementsToEdit.forEach(element => {
        const roleRequired = element.dataset.show;

        if (
            (roleRequired === 'disconnected' && userConnected) ||
            (roleRequired === 'connected' && !userConnected) ||
            (roleRequired === 'admin' && (!userConnected || role !== "admin")) ||
            (roleRequired === 'vétérinaire' && (!userConnected || role !== "vétérinaire")) ||
            (roleRequired === 'employé' && (!userConnected || role !== "employé"))
        ) {
            element.classList.add("d-none");
        } else {
            element.classList.remove("d-none"); // Affiche l'élément si les conditions sont respectées
        }
    });
}

// Exemple d'appel au chargement de la page
document.addEventListener("DOMContentLoaded", showAndHideElementsForRoles);
