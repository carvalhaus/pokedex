import { createContext, useContext, useEffect, useState } from "react";
import getApi from "@/hooks/getApi";
import useScreenSize from "@/hooks/useScreenSize";

const ApiContext = createContext();

export const useApi = () => {
  return useContext(ApiContext);
};

function ApiProvider({ children }) {
  const { width } = useScreenSize();

  let limit = 6;

  if (width > 680) {
    limit = 30;
  }

  const { data, loading, error } = getApi(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`
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
