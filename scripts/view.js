import { pokemonsData } from "./model.js";
import { deleteCardController } from "./control.js";

export const displayCardsContainer = () => {
    const pokemons = pokemonsData; 
    const container = document.querySelector(".cards-container");

    if (pokemons.length === 0) {
        container.innerHTML = "<h3 class='empty-message'> Spin to get a Pokemon!</h3>";
    } else {

        container.innerHTML = "";
        const template = document.getElementById("card-template").content;
        const fragment = document.createDocumentFragment();

        pokemons.forEach((pokemon) => {
            const clone = template.cloneNode(true);

            clone.querySelector("#idCard").id = pokemon.id;
            clone.querySelector(".card-img-header").setAttribute("src", pokemon.img === null ? "" : pokemon.img);
            clone.querySelector(".card-header-title").textContent = pokemon.name;
            clone.querySelector(".card-body-hp").textContent = pokemon.hp + " HP";

            const bodyStats = clone.querySelectorAll(".card-body-stat h3");
            bodyStats[0].textContent = pokemon.attack + "K";
            bodyStats[1].textContent = pokemon.special + "K";
            bodyStats[2].textContent = pokemon.defense + "K"; 

            clone.querySelector(".trash-icon").addEventListener("click", () => {
                deleteCardController(pokemon.id);
            })

            fragment.appendChild(clone);
        })
        container.appendChild(fragment);
    }

}