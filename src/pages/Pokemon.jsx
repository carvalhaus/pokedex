import PokemonDetails from "@/components/PokemonDetails";
import { useApi } from "@/context/ApiContext";
import { pokemonsTypes } from "@/utils/pokemonsTypes";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loading_ellipse from ".././assets/loading-ellipse.svg";

function Pokemon() {
  const { id } = useParams();

  const { pokemons } = useApi();
  const [fullData, setFullData] = useState(null);
  const [loading, setLoading] = useState(true);

  const combineData = async () => {
    const selectedPokemon = pokemons.find(
      (pokemon) => pokemon.id === parseInt(id)
    );

    try {
      const [pokemonResponse, localDataResponse] = await Promise.all([
        Promise.resolve(selectedPokemon),
        Promise.resolve(pokemonsTypes),
      ]);

      const apiData = pokemonResponse;
      const localData = localDataResponse;

      const capitalizedName = `${apiData.name[0].toUpperCase()}${apiData.name.slice(
        1
      )}`;

      let filteredTypes = [];

      if (apiData.types && apiData.types.length > 0) {
        filteredTypes = apiData.types
          .map((typeData) => {
            const foundType = localData.find(
              (element) => element.type === typeData.type.name
            );
            return foundType || null;
          })
          .filter(Boolean);

        const combinedData = {
          name: capitalizedName,
          types: filteredTypes,
          data: apiData,
        };
        setFullData(combinedData);

        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    combineData();
  }, [id, pokemons]);

  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <img className="animate-spin" src={loading_ellipse} />
        </div>
      ) : (
        <div className="flex justify-center items-center sm:p-8">
          <PokemonDetails apiData={fullData} />
        </div>
      )}
    </>
  );
}

export default Pokemon;
