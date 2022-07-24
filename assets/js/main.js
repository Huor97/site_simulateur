import test from "../js/test.json"

console.log(test[0]);

// function initAccordeons(){

//   const accordeons = document.querySelectorAll(".sprint-text");

// //   récupérer chaque accordeons et en clickant afficher les text
//     for (const accordeon of accordeons) {
//     accordeon.addEventListener("click", toggleAccordeon);
//     accordeon
//       .querySelector(".panel")
//       .addEventListener("transitionend", onPanelTransitionEnd);
//   }

//   // accordeon click event handler
//   function toggleAccordeon(evt) {
    
//     const activeAccordeon = document.querySelector(".sprint-text.active");
//     const clickedAccordeon = evt.currentTarget;

//     if (activeAccordeon && activeAccordeon !== clickedAccordeon) {

//       activeAccordeon.classList.remove("active");
//       closePanel(activeAccordeon.querySelector(".panel"));
//     }

//     clickedAccordeon.classList.toggle("active");
//     const accordeonPanel = clickedAccordeon.querySelector(".panel");

//     if (clickedAccordeon.classList.contains("active")) {
//       accordeonPanel.style.height = accordeonPanel.scrollHeight + "px";
//     } else {
//       closePanel(accordeonPanel);
//     }
//   }

//   // panel transition et evenement
//   function onPanelTransitionEnd(evt) {
    
//     const panel = evt.currentTarget;
//     const accordeon = panel.closest(".accordeon");
//     if (accordeon.classList.contains("active")) {
//       panel.style.height = "auto";
//     }
//   }

//   // ferme accordeon panel
//   function closePanel(panel) {
//     panel.style.height = panel.scrollHeight + "px";
//     setTimeout(() => (panel.style.height = "0px"), 0);
//   }
// }

// initAccordeons()

