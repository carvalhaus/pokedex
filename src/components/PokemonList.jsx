import { useApi } from "@/context/ApiContext";
import PokemonItem from "./PokemonItem";

import Error from "./Error";
import loading_ellipse from ".././assets/loading-ellipse.svg";
import { Button } from "./ui/button";

function PokemonList() {
  const { pokemons, loading, morePokemons, error } = useApi();

  const handleMorePokemons = () => {
    morePokemons();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <ul className="flex flex-col justify-center items-center gap-3 sm:flex-row sm:flex-wrap max-[430px]:w-full">
        {error ? (
          <Error />
        ) : (
          <>
            {pokemons.map((pokemon) => (
              <PokemonItem
                key={pokemon.id}
                name={pokemon.name}
                types={pokemon.types}
                sprites={pokemon.sprites}
                id={pokemon.id}
              />
            ))}
          </>
        )}
      </ul>
      <div className="mt-6">
        {loading ? (
          <img className="animate-spin" src={loading_ellipse} />
        ) : (
          <Button onClick={handleMorePokemons}>Mais Pokemons</Button>
        )}
      </div>
    </div>
  );
}

export default PokemonList;
