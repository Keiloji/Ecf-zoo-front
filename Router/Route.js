export default class Route {
  constructor(url, title, pathHtml, authorize = [], pathJS = "") {
    this.url = url;            // URL de la route
    this.title = title;        // Titre de la page
    this.pathHtml = pathHtml;  // Chemin vers le fichier HTML
    this.pathJS = pathJS;      // Chemin vers le fichier JavaScript associé
    this.authorize = authorize; // Liste des rôles autorisés pour accéder à cette route
  }
}
const allRoutes = [
  {
    pathHtml: '/pages/NosServices.html',
    pathJS: '/js/NosServices.js', 
    title: 'Nos Services',
    authorize: []
  },
];
/*
[] -> Tout le monde peut y accéder
["disconnected"] -> Réservé aux utilisateurs déconnectés 
["admin"] -> Réservé aux utilisateurs avec le rôle admin 
["vétérinaire"] -> Réservé aux utilisateurs avec le rôle vétérinaire
["employé"] -> Réservé aux utilisateurs avec le rôle employé
["admin", "vétérinaire", "employé"] -> Réservé aux utilisateurs avec le rôle vétérinaire, employé OU administrateur
*/
