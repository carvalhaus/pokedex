import PokemonItem from "@/components/PokemonItem";
import { useApi } from "@/context/ApiContext";

function Favorites() {
  const { favoriteList, addFavorite, removeFavorite } = useApi();

  favoriteList.sort((pokemonA, pokemonB) => pokemonA.id - pokemonB.id);

  return (
    <div className="flex flex-col gap-6 p-6 justify-center items-center text-center">
      <h1 className="text-4xl	font-bold	">Pokémons Favoritos</h1>
      <div className="flex flex-col justify-center items-center">
        <ul className="flex flex-col justify-center items-center gap-3 sm:flex-row sm:flex-wrap max-[430px]:w-full">
          {favoriteList.length > 0 ? (
            favoriteList.map((pokemon) => {
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
          ) : (
            <h2 className="pt-36 text-2xl">Não há Pokémons favoritos!</h2>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Favorites;
