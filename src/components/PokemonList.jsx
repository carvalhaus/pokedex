import { useApi } from "@/context/ApiContext";
import PokemonItem from "./PokemonItem";

import Error from "./Error";
import loading_ellipse from ".././assets/loading-ellipse.svg";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";

function PokemonList({ type, sort, searchBar }) {
  const {
    pokemons,
    loading,
    morePokemons,
    error,
    addFavorite,
    removeFavorite,
    favoriteList,
  } = useApi();

  console.log(favoriteList);

  const [sortedPokemons, setSortedPokemons] = useState([]);

  const handleMorePokemons = () => {
    morePokemons();
  };

  const filterPokemons = sortedPokemons.filter((pokemon) => {
    const filteredByType =
      pokemon.types[0].type.name === type ||
      pokemon.types[1]?.type.name === type;

    const searched = pokemon.name.includes(searchBar);

    if (!searchBar) {
      return filteredByType;
    } else {
      return searched;
    }
  });

  const handleSort = () => {
    const sorted = [...pokemons];
    switch (sort) {
      case "highest_number":
        sorted.sort((pokemonA, pokemonB) => pokemonB.id - pokemonA.id);
        break;
      case "a_to_z":
        sorted.sort((pokemonA, pokemonB) =>
          pokemonA.name.localeCompare(pokemonB.name)
        );
        break;
      case "z_to_a":
        sorted.sort((pokemonA, pokemonB) =>
          pokemonB.name.localeCompare(pokemonA.name)
        );
        break;
      default:
        break;
    }

    setSortedPokemons(sorted);
  };

  useEffect(() => {
    handleSort();
  }, [pokemons, sort]);

  return (
    <div className="flex flex-col justify-center items-center">
      <ul className="flex flex-col justify-center items-center gap-3 sm:flex-row sm:flex-wrap max-[430px]:w-full">
        {error ? (
          <Error />
        ) : (
          <>
            {!type && !searchBar ? (
              sortedPokemons.map((pokemon) => {
                const isFavorited = favoriteList?.some(
                  (p) => p.id === pokemon.id
                );
                return (
                  <PokemonItem
                    pokemon={pokemon}
                    key={pokemon.id}
                    isFavorited={isFavorited}
                    addFavorite={addFavorite}
                    removeFavorite={removeFavorite}
                  />
                );
              })
            ) : filterPokemons.length > 0 ? (
              filterPokemons.map((filteredPokemon) => {
                const isFavorited = favoriteList?.some(
                  (p) => p.id === filteredPokemon.id
                );
                return (
                  <PokemonItem
                    pokemon={filterPokemons}
                    key={filteredPokemon.id}
                    isFavorited={isFavorited}
                    addFavorite={addFavorite}
                    removeFavorite={removeFavorite}
                  />
                );
              })
            ) : (
              <NotFound />
            )}
          </>
        )}
      </ul>
      <div className="mt-6">
        {loading ? (
          <img className="animate-spin" src={loading_ellipse} />
        ) : (
          <>
            {!type && !searchBar && (
              <Button
                onClick={handleMorePokemons}
                className="bg-[rgb(25,66,165)]"
              >
                Mais Pokemons
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default PokemonList;
