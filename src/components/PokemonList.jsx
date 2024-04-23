import { useApi } from "@/context/ApiContext";
import PokemonItem from "./PokemonItem";
import loading_image from ".././assets/loading.svg";
import loading_ellipse from ".././assets/loading-ellipse.svg";

function PokemonList() {
  const { pokemonsData, loading } = useApi();

  if (loading) {
    return (
      <div className="pt-48 flex flex-col justify-center items-center gap-6">
        <img src={loading_image} className="w-80" />
        <img src={loading_ellipse} className="w-11 animate-spin" />
      </div>
    );
  }

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
