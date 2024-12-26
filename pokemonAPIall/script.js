const btn = document.getElementById("btn");
const pokeNameContainer = document.getElementById("pokeNameContainer");

btn.addEventListener("click", fetchPoke);

async function fetchPoke() {
    try {
        let randomPoke = Math.floor(Math.random() * 100);
        console.log(randomPoke);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${randomPoke}&limit=${randomPoke}`);

        if (!response.ok) {
            throw new Error("Could not fetch resources");
        }

        const data = await response.json();

        pokeNameContainer.innerHTML = "";

        for (const pokemon of data.results) {
            const pokemonResponse = await fetch(pokemon.url);
            const pokemonData = await pokemonResponse.json();

            // Create card container for each Pokémon
            const pokeCard = document.createElement("div");
            pokeCard.classList.add("poke-card");

            // Pokemon Image
            const pokeImg = document.createElement("img");
            pokeImg.src = pokemonData.sprites.front_default;
            pokeImg.alt = pokemonData.name;

            // Pokemon Name
            const pokeNameElement = document.createElement("h2");
            pokeNameElement.innerText = pokemonData.name;

            // Pokemon Type
            const pokeTypeElement = document.createElement("h3");
            const types = pokemonData.types.map(typeInfo => typeInfo.type.name).join(", ");
            pokeTypeElement.innerText = `Type: ${types}`;

            // Append elements to card
            pokeCard.appendChild(pokeImg);
            pokeCard.appendChild(pokeNameElement);
            pokeCard.appendChild(pokeTypeElement);

            // Append card to container
            pokeNameContainer.appendChild(pokeCard);
        }
    } catch (error) {
        console.error("Error: ", error);
    }
}
