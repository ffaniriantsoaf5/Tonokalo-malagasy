function afficherPageInscription() {
    document.getElementById('connexionPage').style.display = 'none';
    document.getElementById('inscriptionPage').style.display = 'block';
}

function afficherPageConnexion() {
    document.getElementById('inscriptionPage').style.display = 'none';
    document.getElementById('connexionPage').style.display = 'block';
}

function creerCompte() {
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const dateNaissance = document.getElementById('dateNaissance').value;
    const emailOrPhoneInscription = document.getElementById('emailOrPhoneInscription').value;

    if (nom && prenom && dateNaissance && emailOrPhoneInscription) {
        // Simule l'envoi d'un code de confirmation
        document.getElementById('confirmationMethod').textContent = emailOrPhoneInscription;
        document.getElementById('inscriptionPage').style.display = 'none';
        document.getElementById('confirmationPage').style.display = 'block';
    } else {
        alert('Azafady, fenoinao ny saha rehetra.');
    }
}

function validerCode() {
    const codeConfirmation = document.getElementById('codeConfirmation').value;

    // Logique de validation du code ici (à personnaliser)
    if (codeConfirmation === '123456') { // Remplacer par une logique de validation réelle
        alert('Kaody fanamafisana voamarina! Tonga soa!');
        // Rediriger vers une autre page ou effectuer une autre action
    } else {
        alert('Kaody fanamafisana diso. Azafady, andramo indray.');
    }
}

function renvoyerCode() {
    alert('Naverina ny kaody fanamafisana!');
    // Logique pour renvoyer le code (SMS, Email, etc.)
}