export let pokemonsData = new Array();

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const alreadyFoundCard = id => pokemonsData.some(pokemon => pokemon.id === id);

export const saveCardsData = () => localStorage.setItem('pokemons', JSON.stringify(pokemonsData)); 

/**
 * Retrieves the cards data from local storage and assigns it to the pokemonsData variable.
 */
export const retrieveCardsData = () => {
    const data = JSON.parse(localStorage.getItem('pokemons'));
    pokemonsData = Array.isArray(data) ? data : [];
    console.log(pokemonsData);
}

export const clearDB = () => {
    pokemonsData = [];
    saveCardsData();
}

export const deleteCard = id => {
    pokemonsData = pokemonsData.filter(pokemon => pokemon.id !== id);
    saveCardsData();
}


export const retrieveAPIData = async () => {
    const id = getRandomInt(1, 1017);

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        const pokemon = {
            id: id,
            img: data.sprites.front_default,
            name: data.name,
            //experience: data.base_experience,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            special: data.stats[3].base_stat,
        };

        if (!alreadyFoundCard(pokemon.id)) {
            pokemonsData.push(pokemon);
            saveCardsData();
        } else {
            console.log("Card alredy found");
        }

    } catch (error) {
        console.log(error);
    }

}