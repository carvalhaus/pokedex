import usePokemons from "@/hooks/usePokemons";
import { auth } from "@/services/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
  const navigate = useNavigate();

  const { pokemons, error, morePokemons, loading } = usePokemons();

  const [isLogged, setIsLogged] = useState(false);

  const [favoriteList, setFavoriteList] = useState(getInitialFavoriteListState);

  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        setUser(result.user);
        setIsLogged(true);
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        handleGoogleSignIn,
        user,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;
