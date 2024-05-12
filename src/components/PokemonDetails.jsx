import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";

function PokemonDetails({ apiData }) {
  console.log(apiData);
  return (
    <div className="flex flex-col items-center h-screen">
      <div
        style={{
          background: `linear-gradient(0deg, rgba(255,255,255,1) 10%, rgb(${apiData.types[0].color})`,
        }}
        className={`w-full h-80 relative flex`}
      >
        <Link to={"/"} className="absolute top-1 left-1">
          <img src=".././src/assets/Arrow_left_white.svg" />
        </Link>
        <div>
          <img
            src={apiData.types[0].src}
            className="absolute w-1/2 top-12 left-[90px]"
          />
          <img
            alt="Pokemon image"
            src={apiData.data.sprites.front_default}
            className="absolute w-3/5 bottom-0 left-[72px]"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full px-5 gap-2">
        <h2 className="font-medium text-3xl">{apiData.name}</h2>
        <p className="font-medium text-gray-600">Nº {apiData.data.id}</p>

        <div className="flex gap-1 m-0">
          {apiData.types.map((type, index) => (
            <Badge
              key={index}
              className="mt-0"
              style={{
                backgroundColor: `rgba(${type.color}, 1)`,
              }}
            >
              {type.type_pt}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
