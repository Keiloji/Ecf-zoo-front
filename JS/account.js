document.addEventListener('DOMContentLoaded', function() {
    const createAccountForm = document.getElementById('createAccountForm');
    
    createAccountForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const password2 = document.getElementById('password2').value;
        const role = document.getElementById('role').value;

        if (email && password2 && role) {
            alert(`Un email a été envoyé à ${email}.`);
            // Envoyer l'email (simulation)
            console.log(`Envoyer un email à ${email} avec le rôle de ${role}`);
        } else {
            alert("Veuillez remplir tous les champs.");
        }
    });

    // Fonction pour charger les comptes rendus des vétérinaires
    function loadReports() {
        // Simuler des données de comptes rendus
        const reports = [
            { animal: 'Lion', date: '2024-05-01', report: 'Examen général - RAS' },
            { animal: 'Éléphant', date: '2024-05-03', report: 'Vaccination annuelle' },
            // Ajoutez plus de comptes rendus ici
        ];
        const reportList = document.getElementById('reportList');
        reportList.innerHTML = '';

        if (reports.length === 0) {
            reportList.innerHTML = '<p>Aucun compte rendu disponible.</p>';
        } else {
            reports.forEach(report => {
                const reportItem = document.createElement('div');
                reportItem.classList.add('report-item');
                reportItem.innerHTML = `<strong>${report.animal}</strong> - ${report.date}<br>${report.report}`;
                reportList.appendChild(reportItem);
            });
        }
    }

    // Fonction pour charger le tableau de bord
    function loadDashboard() {
        // Simuler des données de tableau de bord
        const dashboardData = {
            'Lion': 5,
            'Éléphant': 3,
            // Ajoutez plus de données ici
        };
        const dashboardContent = document.getElementById('dashboardContent');
        dashboardContent.innerHTML = '';

        for (const animal in dashboardData) {
            const dataItem = document.createElement('div');
            dataItem.innerHTML = `${animal}: ${dashboardData[animal]} consultations`;
            dashboardContent.appendChild(dataItem);
        }
    }

    loadReports();
    loadDashboard();
});


document.addEventListener('DOMContentLoaded', function() {
    // Simuler une base de données non relationnelle pour stocker les consultations
    const animalConsultations = {
        "Médor": 1,
        "Rex": 3,
        "Bella": 2
    };

    const animalList = document.getElementById('animalList');

    // Ajouter les animaux à la liste dynamiquement
    Object.keys(animalConsultations).forEach(animal => {
        const li = document.createElement('li');
        li.textContent = `${animal} - Consultations : ${animalConsultations[animal]}`;
        li.addEventListener('click', function() {
            // Incrémenter le compteur de consultations
            animalConsultations[animal]++;
            // Mettre à jour le texte de l'élément
            li.textContent = `${animal} - Consultations : ${animalConsultations[animal]}`;
            // Afficher une alerte pour confirmer l'action (optionnel)
            alert(`Vous avez consulté ${animal}. Nombre de consultations : ${animalConsultations[animal]}`);
        });
        animalList.appendChild(li);
    });
});





document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour charger les avis
    function loadAvis() {
        const avisList = document.getElementById('avisList');
        const avisData = [
            { id: 1, text: 'Très bon zoo !', valid: false },
            { id: 2, text: 'Les animaux sont bien traités.', valid: false },
            { id: 3, text: 'Je reviendrai sûrement !', valid: true }
        ];
        avisList.innerHTML = '';

        avisData.forEach(avis => {
            const avisItem = document.createElement('div');
            avisItem.classList.add('card', 'mb-2');
            avisItem.innerHTML = `
                <div class="card-body">
                    <p class="card-text">${avis.text}</p>
                    <button class="btn btn-success btn-sm mr-2" onclick="validateAvis(${avis.id})">Valider</button>
                    <button class="btn btn-danger btn-sm" onclick="invalidateAvis(${avis.id})">Invalider</button>
                </div>
            `;
            avisList.appendChild(avisItem);
        });
    }

    // Fonctions de validation/invalidation des avis
    window.validateAvis = function(id) {
        alert(`Avis ${id} validé.`);
        // Mettre à jour l'avis en BDD (simulation)
        console.log(`Avis ${id} validé.`);
    };

    window.invalidateAvis = function(id) {
        alert(`Avis ${id} invalidé.`);
        // Mettre à jour l'avis en BDD (simulation)
        console.log(`Avis ${id} invalidé.`);
    };

    // Formulaire de mise à jour des services
    const serviceForm = document.getElementById('serviceForm');
    serviceForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const serviceName = document.getElementById('serviceName').value;
        alert(`Service ${serviceName} mis à jour.`);
        // Mettre à jour le service en BDD (simulation)
        console.log(`Service ${serviceName} mis à jour.`);
    });

    // Formulaire d'ajout de consommation de nourriture
    const foodForm = document.getElementById('foodForm');
    foodForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const animal = document.getElementById('animalSelect').value;
        const date = document.getElementById('dateInput').value;
        const time = document.getElementById('timeInput').value;
        const food = document.getElementById('foodInput').value;
        const quantity = document.getElementById('quantityInput').value;

        alert(`Alimentation ajoutée pour ${animal} - ${food}, ${quantity} kg le ${date} à ${time}.`);
        // Ajouter la consommation en BDD (simulation)
        console.log(`Alimentation ajoutée pour ${animal} - ${food}, ${quantity} kg le ${date} à ${time}.`);
    });

    // Charger les avis au chargement de la page
    loadAvis();
});


document.addEventListener('DOMContentLoaded', function() {

    const animalSelection = document.getElementById('animalSelection');
    const alimentationTable = document.getElementById('alimentationTable');

    // Remplir la liste déroulante des animaux
    animals.forEach(animal => {
        const option = document.createElement('option');
        option.value = animal;
        option.textContent = animal;
        animalSelection.appendChild(option);
    });

    // Formulaire des comptes rendus
    const compteRenduForm = document.getElementById('compteRenduForm');
    compteRenduForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const animal = document.getElementById('animalSelection').value;
        const reportText = document.getElementById('reportText').value;
        alert(`Compte rendu pour ${animal} : ${reportText}`);
        // Ajouter le code pour envoyer les données au serveur ici
        compteRenduForm.reset();
    });

    // Formulaire des commentaires sur les habitats
    const commentaireForm = document.getElementById('commentaireForm');
    commentaireForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const habitat = document.getElementById('habitatSelect').value;
        const commentaireText = document.getElementById('commentaireText').value;
        alert(`Commentaire sur l'habitat ${habitat} : ${commentaireText}`);
        // Ajouter le code pour envoyer les données au serveur ici
        commentaireForm.reset();
    });

    // Exemples de données d'alimentation (à remplacer par les données réelles)
    const alimentationData = [
        { animal: 'Lion', date: '2024-05-01', time: '08:00', food: 'Viande', quantity: '5 kg' },
        { animal: 'Éléphant', date: '2024-05-01', time: '09:00', food: 'Herbe', quantity: '50 kg' },
        { animal: 'Panda', date: '2024-05-01', time: '10:00', food: 'Bambou', quantity: '10 kg' }
    ];

    // Remplir le tableau d'alimentation
    alimentationData.forEach(data => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.animal}</td>
            <td>${data.date}</td>
            <td>${data.time}</td>
            <td>${data.food}</td>
            <td>${data.quantity}</td>
        `;
        alimentationTable.appendChild(row);
    });
});

