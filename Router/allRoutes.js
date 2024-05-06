import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/NosServices", "Nos Services", "/pages/NosServices.html","/js/NosServices.js"),
    new Route("/Habitats", "Habitats", "/pages/Habitats.html"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html"),
    new Route("/Contact", "Contact", "/pages/Contact.html"),
    new Route("/Account", "Mon compte", "/pages/auth/account.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";