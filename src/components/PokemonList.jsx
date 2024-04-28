import { useApi } from "@/context/ApiContext";
import PokemonItem from "./PokemonItem";

import Error from "./Error";
import loading_ellipse from ".././assets/loading-ellipse.svg";
import { Button } from "./ui/button";

function PokemonList() {
  const { pokemons, loading, morePokemons, error } = useApi();

  // if (loading) {
  //   return <Loading />;
  // }

  const handleMorePokemons = () => {
    morePokemons();
  };

  return (
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
      <Button onClick={handleMorePokemons}>teste</Button>
      <li className="h-12 w-full flex justify-center bg-red-50 pt-[-20px]">
        {loading && <img className="animate-spin" src={loading_ellipse} />}
      </li>
    </ul>
  );
}

export default PokemonList;
