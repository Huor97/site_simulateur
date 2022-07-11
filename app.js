const formuler = document.querySelector("#formuler");
const divNom = document.querySelector("#parent-nom-prenom")
const nom = document.querySelector("#nom");
const divEmail = document.querySelector("#parent-email")
const email = document.querySelector("#email");
const divObjet = document.querySelector("#parent-objet")
const objet = document.querySelector("#objet")
const divTextarea = document.querySelector("#parent-textarea")
const textArea = document.querySelector("#message")

const envoyer = document.querySelector("#envoyer")
//allert une text (est-il possible d'avoir une span pour tous?)
const allertNom = document.createElement("span")
const allertEmail = document.createElement("span")
const allertObjet = document.createElement("span")
const allertMessage = document.createElement("span")



allertNom.innerText = "Veuillez remplir ce champ obligatoire.";
allertNom.style.color = "red"

allertEmail.innerText = "Veuillez remplir ce champ obligatoire.";
allertEmail.style.color = "red"

allertObjet.innerText = "Veuillez remplir ce champ obligatoire."
allertObjet.style.color = "red"

allertMessage.innerText = "Veuillez remplir ce champ obligatoire."
allertMessage.style.color = "red"

// fonction submit sur le page
function submit(e){

    e.preventDefault();
    let nomOk = validationNom(e);
    let emailOk = validationEmail(e);
    let objetOk = validationObjet(e);
    let messageOk = validationMessag(e);
    if (nomOk === true && emailOk === true && objetOk === true && messageOk === true) {
        e.currentTarget.submit();        
    }

}

// verifier nom
function validationNom(e){

    if (nom.value === "") {
        
        nom.style.border = "solid 1px red"
        divNom.appendChild(allertNom)

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
        
        return true;
    }else{
        email.style.border = "solid 1px red";
        
        divEmail.appendChild(allertEmail);
        return false;
        }

}

function validationObjet(){
    if (objet.value === "") {
        objet.style.border = "solid 1px red"
        divObjet.appendChild(allertObjet)
        return false;        
    }else{
        return true;
    }
}

function validationMessag(){
    if (textArea.value === "") {
        textArea.style.border = "solid 1px red"
        divTextarea.appendChild(allertMessage)
        return false;
    }else{
        return true;
    }
}

formuler.onsubmit = submit;
