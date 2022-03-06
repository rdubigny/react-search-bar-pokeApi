import { useState } from "react";
import Search from '../components/Search';
import { fetchPokemon } from "../services/getPokemon";
import PokemonData from "../components/PokemonData"
import Alert from 'react-bootstrap';

export default function Home() {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const getPokemon = async (query) => {
    if (!query) {
      setErrorMsg('You must enter a Pokemon');
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetchPokemon(query);
        const results = await response.json();
        setPokemon(results);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
        setErrorMsg('Pokemon not found.')
      }
    }, 1500);
  }

  return (<>
    {error ? (<span>
      {errorMsg}
    </span>) : null}
    <Search getPokemon={getPokemon} />
    {loading ? (<p>loading...</p>) : null}
    {!loading && pokemon ? (
      <PokemonData
        name={pokemon.name}
        sprites={pokemon.sprites.front_default}
        abilities={pokemon.abilities}
        stats={pokemon.stats}
        types={pokemon.types}
      />
    ) : null}
  </>);
}
