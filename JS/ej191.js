// Utilizando fetch intenta obtener los datos de la API https://pokeapi.co/api/v2/pokemon.
// Utiliza Promises para manejar el resultado de fetch.
// Parsea el JSON y muestra en pantalla los nombres de los primeros 20 Pokemones.
// Mostrar los nombres con la primer letra en mayúscula (repaso de charAt, toUpperCase, substring).
// Manejar tanto el caso de éxito como el de error al hacer el pedido de Pokemones.
// En caso de Error mostrar el error en pantalla (Para probar pueden desconectar internet por un segundo al ejecutarlo).

const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon';

async function getPokemon(){
    const response = await fetch(POKE_API_URL);
    const pokemon = await response.json();
    return pokemon;
}

getPokemon().then((pokemon)=>{
    for(let i=0; i < pokemon.results.length;i++){
        console.log(`Pokemon: ${pokemon.results[i].name.charAt(0).toUpperCase() + pokemon.results[i].name.slice(1)}`)}
})

