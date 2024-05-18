export default class Route {
  constructor(url, title, pathHtml, authorize, pathJS = "") {
    this.url = url;
    this.title = title;
    this.pathHtml = pathHtml;
    this.pathJS = pathJS;
    this.authorize = authorize;
  }
}

/*
[] -> Tout le monde peut y accéder
["disconnected"] -> Réserver aux utilisateurs déconnecté 
["admin"] -> Réserver aux utilisateurs avec le rôle admin 
["Vétérinaire"] -> Réserver aux utilisateurs avec le rôle Vétérinaire
["Employé"] -> Réserver aux utilisateurs avec le rôle Employé
["admin", "vétérinaire","employé"] -> Réserver aux utilisateurs avec le rôle véterinaire, employé OU administrateur
*/