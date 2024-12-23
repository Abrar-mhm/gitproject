
const prenom=document.getElementById("firstName");
const nom=document.getElementById("lastName");
const email=document.getElementById("email");
const pw=document.getElementById("password");
const confirmPw=document.getElementById("confirmPassword");
const genre=document.getElementById("gender");
const pays=document.getElementById("country");
let bnt = document.getElementById("btn");

bnt.addEventListener("click",verif);

function verif(){
    clearErrors();
    let hasError= false;
    //Vérification du prénom
    if(prenom.value.trim()===""){
        showError(prenom,"Erreur:Prénom requis.");
        hasError=True;
    }
    //Vérification du nom
    if(nom.value.trim()===""){
        showError(nom,"Erreur:Nom requis.");
        hasError=True;
    }
    if(email.value.trim()===""){
        showError(email,"Erreur:email requis.");
        hasError=True;
    }
    if(pw.value.trim()===""){
        showError(nom,"Erreur:Mot de passe requis.");
        hasError=True;
    }
    if(confirmPw.value.trim()===""){
        showError(confirmPw,"Erreur:confirmation requise.");
        hasError=True;
    }else if(pw.value !==confirmPw.value) {
        showError(confirmPw, "Erreur :Les mots de passe ne correspondet pas.");
        hasError=true;
    }
    //affichage d'un message d'un message de succés si aucune erreur n'est trouvé
    if(!hasError){
        alert("Inscription réussie!");
    }
    //fonction pour afiicher un message d'erreur
    function showError(inputFieled,message){
        const errorMessage = document.createElement("p")
        errorMessage.style.color="red";//définir la couleur rouge
        errorMessage.textContent=message;//ajouter le message d'erreur
        inputFieled.parentNode.inserBefore(errorMessage,inputFieled.nextSibling)
    }    
    //function pour afficher les messages d'erreur précédents
    function clearErrors(){
        const errorMessages=document.querySelectorAll("p");
        errorMessages.forEach((msg)=> msg.remove());
    }

        

}