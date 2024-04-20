import PokemonItem from "./PokemonItem";

function PokemonList() {
  return (
    <ul className="flex flex-col gap-3">
      <PokemonItem />
      <PokemonItem />
    </ul>
  );
}

export default PokemonList;
