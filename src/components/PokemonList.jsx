import { useApi } from "@/context/ApiContext";
import PokemonItem from "./PokemonItem";
import loading_image from ".././assets/loading.svg";
import loading_ellipse from ".././assets/loading-ellipse.svg";

function PokemonList() {
  const { pokemonsList, loading } = useApi();

  console.log(pokemonsList);
  if (loading) {
    return (
      <div className="pt-48 flex flex-col justify-center items-center gap-6">
        <img src={loading_image} className="w-80" />
        <img src={loading_ellipse} className="w-11 animate-spin" />
      </div>
    );
  }

  return (
    <ul className="flex flex-col justify-center items-center gap-3 sm:flex-row sm:flex-wrap max-[4300px]:w-full">
      {pokemonsList.map((pokemonData, index) => (
        <PokemonItem key={index} name={data.name} />
      ))}
    </ul>
  );
}

export default PokemonList;
