document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
//Implémenter le javascript  de ma page 
const usernameInput = document.getElementById("usernameInput");
const Password2Input = document.getElementById("EmailInput");
const btnContact = document.getElementById("btnContactEnvoyer");

usernameInput.addEventListener("keyup", validateForm);
Password2Input.addEventListener("keyup",validateForm);


function validateForm(){
    const usernameInputOk = validateRequired(usernameInput)
    const Password2InputOk = validateRequired(Password2Input)
    

    if(usernameInputOk && Password2InputOk){
        btnContact.disabled = false;
    }
    else{
        btnContact.disabled = true;
    }

}

function validateUsernameInput(input){
    //Définir mon regex
    const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valide")
        input.classList.remove("is-invalid")
        return true;
    }
    else{
        input.classList.remove("is-valide")
        input.classList.add("is-invalid")
        return false;
    }
}



function validateRequired(input){
    if(input.value!= ''){
        input.classList.add("is-valide")
        input.classList.remove("is-invalid")
        return true;
    }
    else{
        input.classList.remove("is-valide")
        input.classList.add("is-invalid")
        return false;
    }
}

    // Envoyer un email à l'utilisateur
    var message = "Bonjour " + username + ",\n\nVotre mot de passe vous sera communiqué ultérieurement.";
    alert('Un email a été envoyé à ' + username + '.');
    console.log('Email envoyé :\n' + message);
});