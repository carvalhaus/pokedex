import { createContext, useContext, useState } from "react";
import getApi from "@/hooks/getApi";

const ApiContext = createContext();

export const useApi = () => {
  return useContext(ApiContext);
};

function ApiProvider({ children }) {
  const [pokemonsList, setPokemonsList] = useState([]);
  const { data, loading } = getApi(
    "https://pokeapi.co/api/v2/pokemon?limit=5&offset=0"
  );

  setPokemonsList(data.results);

  // const pokemonsData = pokemonsList.map((pokemon) => {
  //   const { data, loading } = getApi(
  //     `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
  //   );

  // );

  return (
    <ApiContext.Provider value={pokemonsList}>{children}</ApiContext.Provider>
  );
}

export default ApiProvider;
