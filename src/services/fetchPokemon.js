export async function fetchInitialPokemon(){
    const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/');
    const data = resp.json();
    console.log('data', data);
    return data.results;
}