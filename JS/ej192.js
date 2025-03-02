// Copiar el ejercicio ej191.js
// Utilizar async & await y try & catch para obtener el mismo resultado anterior.
// Mostrar el mensaje de error en pantalla (acordate de desconectar internet antes de pedir los datos al servidor).

const POKE_API_URL = 'https://pokeapi.commmm/api/v2/pokemon';

async function getPokemon(){
    const response = await fetch(POKE_API_URL);
    const pokemon = await response.json();
    return pokemon;
}

getPokemon().then((pokemon)=>{
    for(let i=0; i < pokemon.results.length;i++){
        console.log(`Pokemon: ${pokemon.results[i].name.charAt(0).toUpperCase() + pokemon.results[i].name.slice(1)}`)}
}).catch((error)=>{
    console.log('Error:');
    console.log(error)
})