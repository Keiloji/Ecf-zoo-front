// Sélectionner les boutons de bascule et les sections à afficher/masquer
const toggles = [
    { button: document.getElementById("togg1"), section: document.getElementById("d1") },
    { button: document.getElementById("togg2"), section: document.getElementById("d2") },
    { button: document.getElementById("togg3"), section: document.getElementById("d3") }
];

// Fonction pour basculer l'affichage d'un élément
function toggleDisplay(element) {
    if (getComputedStyle(element).display !== "none") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

// Ajouter les événements de clic pour chaque bouton
toggles.forEach(({ button, section }) => {
    button.addEventListener("click", () => toggleDisplay(section));
});
