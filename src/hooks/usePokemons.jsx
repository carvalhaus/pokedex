import axios from "axios";
import { useEffect, useState } from "react";
const URL_DEFAULT = "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0";

function usePokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async (url = URL_DEFAULT) => {
    try {
      const response = await axios.get(url);
      const { next, results } = response.data;

      const newPokemons = await Promise.all(
        results.map(async (pokemon) => {
          const response = await axios.get(pokemon.url);
          const pokemonData = response.data;

          return pokemonData;
        })
      );

      setLoading(false);
      setError(false);

      return { next, newPokemons };
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const getPokemons = async (url) => {
    try {
      const { next, newPokemons } = await fetchData(url);
      setPokemons((prev) => [...prev, ...newPokemons]);
      setNextUrl(next);
      setPokemons(newPokemons);
    } catch (error) {
      console.error(error);
    }
  };

  const morePokemons = async () => {
    const { next, newPokemons } = await fetchData(nextUrl);
    setPokemons((prev) => [...prev, ...newPokemons]);
    setNextUrl(next);
    next === null && setLoadMore(false);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return { pokemons, loading, morePokemons, error };
}

export default usePokemons;
