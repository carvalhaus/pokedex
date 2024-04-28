import usePokemons from "@/hooks/usePokemons";
import { createContext, useContext } from "react";

const ApiContext = createContext();

export const useApi = () => {
  return useContext(ApiContext);
};

function ApiProvider({ children }) {
  const { pokemons, error, morePokemons, loading } = usePokemons();

  return (
    <ApiContext.Provider value={{ pokemons, loading, morePokemons, error }}>
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;
