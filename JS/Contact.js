//Implémenter le javascript  de ma page 
const inputTitre = document.getElementById("TitreInput");
const inputDescription = document.getElementById("DescriptionInput");
const inputEmail = document.getElementById("EmailInput");
const btnContact = document.getElementById("btnContactEnvoyer");

inputTitre.addEventListener("keyup", validateForm);
inputDescription.addEventListener("keyup",validateForm);
inputEmail.addEventListener("keyup",validateForm);

function validateForm(){
    const titreOk = validateRequired(inputTitre)
    const descriptionOk = validateRequired(inputDescription)
    const emailOk = validateEmail(inputEmail)

    if(titreOk && descriptionOk & emailOk){
        btnContact.disabled = false;
    }
    else{
        btnContact.disabled = true;
    }

}

function validateEmail(input){
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
