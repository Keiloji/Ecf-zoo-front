import Route from "./Route.js";

// Définition de toutes les routes de l'application
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/NosServices", "Nos Services", "/pages/NosServices.html", [], "/js/NosServices.js"),
    new Route("/Habitats", "Habitats", "/pages/Habitats.html", [], "/js/Habitats.js"),
    new Route("/Signin", "Connexion", "/pages/Signin.html", ["disconnected"], "/js/Signin.js"),
    new Route("/signup", "Créer un compte", "/pages/signup.html", ["admin"], "/js/signup.js"),
    new Route("/Contact", "Contact", "/pages/Contact.html", [], "/js/Contact.js"),
    new Route("/account", "Mon compte", "/pages/account.html", ["admin", "vétérinaire", "employé"], "/js/account.js"),
];

// Titre affiché comme ceci : Route.titre - nom du site web
export const websiteName = "Arcadia";
