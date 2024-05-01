import { useApi } from "@/context/ApiContext";
import PokemonItem from "./PokemonItem";

import Error from "./Error";
import loading_ellipse from ".././assets/loading-ellipse.svg";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";

function PokemonList({ type, sort, searchBar }) {
  const { pokemons, loading, morePokemons, error } = useApi();
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
              sortedPokemons.map((pokemon) => (
                <PokemonItem
                  key={pokemon.id}
                  name={pokemon.name}
                  types={pokemon.types}
                  sprites={pokemon.sprites}
                  id={pokemon.id}
                />
              ))
            ) : filterPokemons.length > 0 ? (
              filterPokemons.map((filteredPokemon) => (
                <PokemonItem
                  key={filteredPokemon.id}
                  name={filteredPokemon.name}
                  types={filteredPokemon.types}
                  sprites={filteredPokemon.sprites}
                  id={filteredPokemon.id}
                />
              ))
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
              <Button onClick={handleMorePokemons}>Mais Pokemons</Button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default PokemonList;
