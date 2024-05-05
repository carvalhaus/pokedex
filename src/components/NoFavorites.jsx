import magikarp from "../assets/magikarp.png";

function NoFavorites() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center pt-10">
      <img src={magikarp} alt="Magikarp image" className="w-80" />
      <h2 className="font-semibold text-2xl">
        Você não favoritou nenhum Pokémon :({" "}
      </h2>
      <p className="text-gray-600">
        Clique no ícone de coração dos seus pokémons favoritos e eles aparecerão
        aqui.
      </p>
    </div>
  );
}

export default NoFavorites;
