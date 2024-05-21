import usePokemons from "@/hooks/usePokemons";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const initFavorite = {
  favoriteList: [],
};
const ApiContext = createContext();

export const useApi = () => {
  return useContext(ApiContext);
};

const getInitialFavoriteListState = () => {
  const favoriteList = localStorage.getItem("FAVORITES_POKEMONS");
  return favoriteList ? JSON.parse(favoriteList) : initFavorite;
};

function ApiProvider({ children }) {
  const { pokemons, error, morePokemons, loading } = usePokemons();

  const [isLogged, setIsLogged] = useState(false);
  const [favoriteList, setFavoriteList] = useState(getInitialFavoriteListState);
  const [user, setUser] = useState(null);

  console.log(user);

  const addFavorite = (pokemon) =>
    setFavoriteList((prev) => ({
      ...prev,
      favoriteList: [...prev.favoriteList, pokemon],
    }));

  const removeFavorite = (pokemonId) =>
    setFavoriteList((prev) => ({
      ...prev,
      favoriteList: prev.favoriteList.filter((pok) => pok.id !== pokemonId),
    }));

  useEffect(() => {
    localStorage.setItem("FAVORITES_POKEMONS", JSON.stringify(favoriteList));
  }, [favoriteList]);

  return (
    <ApiContext.Provider
      value={{
        pokemons,
        loading,
        morePokemons,
        error,
        addFavorite,
        removeFavorite,
        ...favoriteList,
        isLogged,
        setIsLogged,
        user,
        setUser,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;
