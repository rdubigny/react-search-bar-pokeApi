const baseUrl = "https://pokeapi.co/api/v2";
const query = {
  pokemon: "pokemon",
};

export async function fetchPokemon(pokemon) {
  console.warn("fetching");
  return fetch(`${baseUrl}/${query.pokemon}/${pokemon}`);
}
