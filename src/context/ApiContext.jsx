import usePokemons from "@/hooks/usePokemons";
import { auth } from "@/services/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const initFavorite = {
  favoriteList: [],
};

const ApiContext = createContext();

export const useApi = () => {
  return useContext(ApiContext);
};

const getInitialState = () => {
  const favoriteList = localStorage.getItem("FAVORITES_POKEMONS");
  return favoriteList ? JSON.parse(favoriteList) : initFavorite;
};

function ApiProvider({ children }) {
  const navigate = useNavigate();

  const { pokemons, error, morePokemons, loading } = usePokemons();

  const [isLogged, setIsLogged] = useState(false);

  const [favoriteList, setFavoriteList] = useState(getInitialState);

  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    console.log("CLICKED");

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        handleGoogleSignIn,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;
