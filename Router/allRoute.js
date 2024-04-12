import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/Nos services", "Nos services", "/pages/Nos services.html", "/js/Nos services.js"),
    new Route("/Habitats", "Habitats", "/pages/Habitats.html","/js/Habitats.js"),
    new Route("/Connexion", "Connexion", "/pages/Connexion.html","/js/Connexion.js"),
    new Route("/Contact", "Contact", "/pages/Contact.html","/js/Contact.js"),

];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";