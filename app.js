const formuler = document.querySelector("#formuler");
const divNom = document.querySelector("#parant-nom-prenom")
const nom = document.querySelector("#nom");
const email = document.querySelector("#email");
const envoyer = document.querySelector("#envoyer")
const paragraphErreurNom = document.createElement("p")

// fonction submit sur le page
function submit(e){

    e.preventDefault();
    let nomOk = erreur(e);
    let emailOk = validationEmail(e);
    if (nomOk === true && emailOk === true) {
        e.currentTarget.submit();        
    }

}

// verifier nom
function erreur(e){

    if (nom.value === "") {
        
        nom.style.backgroundColor = "red";
        return false;
       
    }else{
        nom.style.backgroundColor = "#ffffff";
        return true;
    }
   
}

// verifier email
function validationEmail(){

    //regex pour verifier email
    const expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

    if (expressionReguliere.test(email.value)){
        email.style.backgroundColor = "green";
        return true;
    }else{
        email.style.backgroundColor = "red";
        return false;
        }

}

formuler.onsubmit = submit;
