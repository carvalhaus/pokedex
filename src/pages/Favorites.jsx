import FavoriteList from "@/components/FavoriteList";
import FavoriteLoggedOut from "@/components/FavoriteLoggedOut";
import { useApi } from "@/context/ApiContext";

function Favorites() {
  const { isLogged } = useApi();
  return (
    <div className="flex flex-col gap-6 p-6 justify-center items-center text-center">
      <h1 className="text-4xl	font-bold	">Pokémons Favoritos</h1>
      <div className="flex flex-col justify-center items-center">
        {isLogged ? <FavoriteList /> : <FavoriteLoggedOut />}
      </div>
    </div>
  );
}

export default Favorites;
