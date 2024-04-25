import { useApi } from "@/context/ApiContext";
import PokemonItem from "./PokemonItem";
import Loading from "./Loading";
import Error from "./Error";

function PokemonList() {
  const { pokemonsList, loading, error } = useApi();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <ul className="flex flex-col justify-center items-center gap-3 sm:flex-row sm:flex-wrap max-[430px]:w-full">
      {pokemonsList?.map((pokemon, index) => (
        <PokemonItem key={index} param={pokemon.url} />
      ))}
    </ul>
  );
}

export default PokemonList;
