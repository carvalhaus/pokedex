import Region from "@/components/Region";
import axios from "axios";
import { useEffect, useState } from "react";

function Regions() {
  const [regions, setRegions] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/region");
      const { results } = response.data;
      setRegions(results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-6 p-6 justify-center items-center">
      <h1 className="text-4xl	font-bold">Regiões</h1>
      <ul className="p-4 flex flex-col justify-center items-center gap-3 sm:flex-row sm:flex-wrap max-[430px]:w-full">
        {regions?.map((reg, index) => {
          return <Region key={index} name={reg.name} index={index} />;
        })}
      </ul>
    </div>
  );
}

export default Regions;
