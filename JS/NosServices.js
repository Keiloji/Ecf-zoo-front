// Fonction pour gérer les interactions de la page Nos Services
export function initNosServicesPage() {
    console.log("Page Nos Services chargée");

    // Gérer le téléchargement du menu
    const menuButton = document.querySelector('.btn-custom');
    menuButton.addEventListener('click', () => {
        console.log("Téléchargement du menu en cours...");
        
    });

    // Ajouter des animations pour les images lors du survol
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.05)';
            img.style.transition = 'transform 0.3s ease-in-out';
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // Ajouter une fonctionnalité d'affichage dynamique pour les cartes
    const articles = document.querySelectorAll('article');
    articles.forEach((article, index) => {
        // Délai d'apparition des articles
        setTimeout(() => {
            article.style.opacity = '1';
            article.style.transform = 'translateY(0)';
        }, index * 200); // Les articles apparaissent un par un
    });
}