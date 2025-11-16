const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
const btn = document.getElementById("btn");
const imgElement = document.getElementById("pokemonSprite");
const pokestype = document.getElementById("pokestype");
const noPoke = document.getElementById("noPoke");

async function fetchPokemon() {
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if(!res.ok){
            noPoke.style.display = "block";
            noPoke.innerText = "No Pokemon found";
            throw new Error("Could not fetch resources");
        }

        const data = await res.json();
        const PokemonSprite = data.sprites.front_default;

        imgElement.src = PokemonSprite;
        imgElement.style.display = "block";

        const types = data.types.map(typeInfo => typeInfo.type.name).join(", ");
        console.log(types)
        pokestype.innerText = `Type: ${types}`;
        pokestype.style.display = "block";
    }

    catch(error){
        console.error(`Error ${error}`);
    }
}


btn.addEventListener("click",fetchPokemon);