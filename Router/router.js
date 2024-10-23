import Route from "./Route.js";
import { allRoutes, websiteName } from "./allRoutes.js";



// Création d'une route pour la page 404 
const route404 = new Route("404", "Page introuvable", "/pages/404.html", []);

// Fonction pour récupérer la route correspondant à une URL donnée
const getRouteByUrl = (url) => {
  return allRoutes.find(route => route.url === url) || route404;
};

// Fonction pour charger le contenu de la page
const loadContentPage = async () => {
  const path = window.location.pathname;
  const actualRoute = getRouteByUrl(path);

  // Vérifier les droits d'accès à la page 
  const allRolesArray = actualRoute.authorize;

  if (allRolesArray.length > 0) {
    if (allRolesArray.includes("disconnected") && isConnected()) {
      window.location.replace("/");
      return;
    } else {
      const roleUser = getRole();
      if (!allRolesArray.includes(roleUser)) {
        window.location.replace("/");
        return;
      }
    }
  }

  // Récupération du contenu HTML de la route
  const html = await fetch(actualRoute.pathHtml).then(data => data.text());
  document.getElementById("main-page").innerHTML = html;

  // Ajout du contenu JavaScript spécifique à la page si défini
  if (actualRoute.pathJS) {
    const scriptTag = document.createElement("script");
    scriptTag.type = "text/javascript";
    scriptTag.src = actualRoute.pathJS;
    document.body.appendChild(scriptTag);
  }

  // Vérification si la page est celle des "Nos Services"
  if (path === '/NosServices') {
    initNosServicesPage(); // Appel de la fonction d'initialisation de la page Nos Services
  }

  // Changement du titre de la page
  document.title = `${actualRoute.title} - ${websiteName}`;

  // Afficher et masquer les éléments en fonction du rôle
  showAndHideElementsForRoles();
};

// Fonction pour gérer les événements de routage (clic sur les liens)
const routeEvent = (event) => {
  event.preventDefault();
  // Mise à jour de l'URL dans l'historique du navigateur
  window.history.pushState({}, "", event.target.href);
  // Chargement du contenu de la nouvelle page
  loadContentPage();
};

// Gestion de l'événement de retour en arrière dans l'historique du navigateur
window.onpopstate = loadContentPage;
// Assignation de la fonction routeEvent à la propriété route de la fenêtre
window.route = routeEvent;
// Chargement du contenu de la page au chargement initial
loadContentPage();

