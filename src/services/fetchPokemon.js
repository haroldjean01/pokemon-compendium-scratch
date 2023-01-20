export async function fetchInitialPokemon() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/');
  const data = await resp.json();
  return data.results;
}

export async function fetchPokemonTypes() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  return data;
}

export async function fetchPokemon(type) {
  const params = new URLSearchParams();
  params.set('type', type);

  const response = await fetch(
    `https://alchemy-pokedex.herokuapp.com/api/pokedex/?${params.toString()}`
  );

  const data = await response.json();

  return data.results;
}

export async function fetchPokemonByName(pokemon) {
  const params = new URLSearchParams();
  params.set('pokemon', pokemon);

  const response = await fetch(
    `https://alchemy-pokedex.herokuapp.com/api/pokedex/?${params.toString()}`
  );

  const data = await response.json();

  return data.results;
}
