// création des éléments ou récupérer les éléments
const button1 = document.querySelector("#buttoninfo1")
const button2 = document.querySelector("#buttoninfo2")
const button3 = document.querySelector("#buttoninfo3")
const paragraph1 = document.querySelector("#paragraph1")
const paragraph2 = document.querySelector("#paragraph2")
const paragraph3 = document.querySelector("#paragraph3")

let classe1 = paragraph1.classList;

function textAdd1(e){

    let result = classe1.toggle(true);

    if (result) {
    e.currentTarget.style.backgroundImage = "url('./image/bouton-moins.png')"
    paragraph1.style.display = "block"
    } else {
    e.currentTarget.style.backgroundImage = ""
    paragraph1.style.display = "none"
    }

}

let classe2 = paragraph2.classList;

function textAdd2(e){

    let result = classe2.toggle(true);

    if (result) {
    e.currentTarget.style.backgroundImage = "url('./image/bouton-moins.png')"
    paragraph2.style.display = "block"
    } else {
    e.currentTarget.style.backgroundImage = ""
    paragraph2.style.display = "none"
    }

}

let classe3 = paragraph3.classList;

function textAdd3(e){

    let result = classe3.toggle(true);

    if (result) {
    e.currentTarget.style.backgroundImage = "url('./image/bouton-moins.png')"
    paragraph3.style.display = "block"
    } else {
    e.currentTarget.style.backgroundImage = ""
    paragraph3.style.display = "none"
    }

}
button1.addEventListener("click", textAdd1)
button2.addEventListener("click", textAdd2)
button3.addEventListener("click", textAdd3)



