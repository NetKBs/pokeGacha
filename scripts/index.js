import { spinGachaBtn, deleteAll } from "./control.js";
import {displayCardsContainer} from "./view.js";
import { retrieveCardsData } from "./model.js";


retrieveCardsData();
displayCardsContainer();

const boton = document.getElementById("btn-spin");
boton.addEventListener("click", () => {
    spinGachaBtn();
    boton.classList.toggle('spin');
});

boton.addEventListener("animationend", () => {
    boton.classList.toggle('spin');
})

document.getElementById("deleteAll").addEventListener("click", () => deleteAll());