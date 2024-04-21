import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { pokemonsTypes } from "@/utils/pokemonsTypes";

const ApiContext = createContext();

export const useApi = () => {
  return useContext(ApiContext);
};

const mergeData = (originalData, typesData) => {
  const mapByType = new Map();

  typesData.map((obj) => {
    mapByType.set(obj.type, obj);
  });

  const combinedArray = originalData
    .map((obj1) => {
      const obj2 = mapByType.get(obj1.types[0].type.name);
      if (obj2) {
        return { ...obj1, ...obj2 };
      } else {
        return null;
      }
    })
    .filter(Boolean);

  console.log("array merged");

  return combinedArray;
};

function ApiProvider({ children }) {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [mergedData, setMergedData] = useState();

  const getPokemonData = async () => {
    try {
      const fetchedData = [];

      for (let i = 1; i <= 20; i++) {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${i}`
        );

        if (response.status === 200) {
          const object = response.data;
          fetchedData.push(object);
        } else {
          console.error("Failed to fetch Pokemon with Id ${i}");
        }
      }

      setPokemonsData(fetchedData);

      const newArray = mergeData(pokemonsData, pokemonsTypes);
      setMergedData(newArray);
    } catch (error) {
      console.error("Error fetching objects:", error);
    }
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <ApiContext.Provider value={{ pokemonsData, mergedData }}>
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;
