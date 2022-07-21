// function initAccordeon() {
//     const accordeons = document.querySelectorAll(".sprint-text")
//     for (const accordeon of accordeons) {
//         accordeon = document.addEventListener("click", toggleAccordeon)
//     }

//     function toggleAccordeon(evt) {
//         const activParagraph = document.querySelectorAll(".paragraphs")
//         activParagraph.classList;
//         activParagraph.toggle(true)

//         if(activParagraph){
//             console.log(activParagraph);
//         }else{
//             console.log("ne marche pas");
//         }
//     }
// }

// initAccordeon()

function initAccordeon(){

    let accordeons = document.querySelectorAll(".panel");

    for (const accordeon of accordeons) {
        accordeon.addEventListener("click", toggleAccordeon)
        console.log(accordeon);
    }

    

    function toggleAccordeon() {
        const paragraph = document.querySelector("#toggle-test")
        paragraph.classList.toggle("paragraphs-active");
     }
    
}
initAccordeon()

