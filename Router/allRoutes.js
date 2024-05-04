import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/NosServices", "Nos Services", "/pages/NosServices.html","/js/NosServices.js"),
    new Route("/Habitats", "Habitats", "/pages/Habitats.html"),
    new Route("/singnin", "Connexion", "/pages/signin.html"),
    new Route("/Contact", "Contact", "/pages/Contact.html"),

];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";