import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html",[]),
    new Route("/NosServices", "Nos Services", "/pages/NosServices.html",[],"/js/NosServices.js"),
    new Route("/Habitats", "Habitats", "/pages/Habitats.html",[],"/js/Habitats.js"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html",["disconnected"],"/js/signin.js"),
    new Route("/signup", "Créer un compte", "/pages/auth/signup.html",["admin"],"/js/signup.js"),
    new Route("/Contact", "Contact", "/pages/Contact.html",[],"/js/Contact.js"), 
    new Route("/account", "Mon compte", "/pages/auth/account.html",["admin","vétérinaire","employé"],"/js/account.js"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";