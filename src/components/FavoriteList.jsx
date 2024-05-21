import NoFavorites from "@/components/NoFavorites";
import PokemonItem from "@/components/PokemonItem";

import { useApi } from "@/context/ApiContext";

function FavoriteList() {
  const { favoriteList, addFavorite, removeFavorite } = useApi();

  favoriteList.sort((pokemonA, pokemonB) => pokemonA.id - pokemonB.id);

  return (
    <ul className="flex flex-col justify-center items-center gap-3 sm:flex-row sm:flex-wrap max-[430px]:w-full text-left">
      {favoriteList.length > 0 ? (
        favoriteList.map((pokemon) => {
          const isFavorited = favoriteList?.some((p) => p.id === pokemon.id);
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
        <NoFavorites />
      )}
    </ul>
  );
}

export default FavoriteList;
