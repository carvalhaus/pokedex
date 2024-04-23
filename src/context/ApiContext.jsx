import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { pokemonsTypes } from "@/utils/pokemonsTypes";

const ApiContext = createContext();

export const useApi = () => {
  return useContext(ApiContext);
};

function ApiProvider({ children }) {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPokemonData = async () => {
    try {
      const fetchedData = [];
      setLoading(true);

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
      setLoading(false);
    } catch (error) {
      console.error("Error fetching objects:", error);
    }
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <ApiContext.Provider value={{ pokemonsData, loading }}>
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;
