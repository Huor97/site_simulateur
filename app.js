const formumer = document.querySelector("#formuler");
const divNom = document.querySelector("#parant-nom-prenom")
const nom = document.querySelector("#nom");
const email = document.querySelector("#emial");
const envoyer = document.querySelector("#envoyer")
const paragraphErreurNom = document.createElement("p")



// si le champs de nom est vide: color input nom rouge, envoyer un messag erreur
// si le comps d'email est vide: color input emial rouge, envoyer un messag erreur

// fonction submit sur le page
function submit(e){

    e.preventDefault();
}

formumer.onsubmit = submit;

// si un champs est vide return erreur
function erreur(e){

    if (nom.value === "") {
        nom.style.backgroundColor = "red"
        console.log("erreur")
    }else{
        nom.style.backgroundColor = "#ffffff";
        console.log("c'est bon")
    }
   
}

envoyer.addEventListener("click", erreur)

