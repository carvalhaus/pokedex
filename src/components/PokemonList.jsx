import { useApi } from "@/context/ApiContext";
import PokemonItem from "./PokemonItem";

function PokemonList() {
  const { pokemonsData } = useApi();

  return (
    <ul className="flex flex-col justify-center items-center gap-3 sm:flex-row-reverse sm:flex-wrap max-[4300px]:w-full">
      {pokemonsData.map((pokemonData) => (
        <PokemonItem
          key={pokemonData.id}
          name={pokemonData.name}
          id={pokemonData.id}
          sprites={pokemonData.sprites}
          types={pokemonData.types}
        />
      ))}
    </ul>
  );
}

export default PokemonList;
