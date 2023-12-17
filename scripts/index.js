import { spinGachaBtn, deleteAll } from "./control.js";
import {displayCardsContainer} from "./view.js";
import { retrieveCardsData } from "./model.js";


retrieveCardsData();
displayCardsContainer();
document.getElementById("btn-spin").addEventListener("click", () => spinGachaBtn());
document.getElementById("deleteAll").addEventListener("click", () => deleteAll());