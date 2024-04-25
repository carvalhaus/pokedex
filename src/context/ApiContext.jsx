import { createContext, useContext, useEffect, useState } from "react";
import getApi from "@/hooks/getApi";

const ApiContext = createContext();

export const useApi = () => {
  return useContext(ApiContext);
};

function ApiProvider({ children }) {
  const { data, loading, error } = getApi(
    "https://pokeapi.co/api/v2/pokemon?limit=5&offset=0"
  );

  const dataResults = [data?.results];

  const pokemonsList = dataResults[0];

  return (
    <ApiContext.Provider value={{ pokemonsList, loading, error }}>
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;
