import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Toggle } from "./ui/toggle";

import fav_on from "../assets/icons/fav-on.svg";
import fav_off from "../assets/icons/fav-off.svg";

import { pokemonsTypes } from "@/utils/pokemonsTypes";
import getApi from "@/hooks/getApi";

function PokemonItem({ name }) {
  // const { data } = getApi(`https://pokeapi.co/api/v2/pokemon/${name}`);

  const Print = () => {
    console.log("CLICKED");
  };

  const capitalizedName = name[0].toUpperCase() + data.name.slice(1);

  const firstPokemonType = pokemonsTypes.filter(
    (element) => element.type === data.types[0].type.name
  );

  const secondPokemonType = pokemonsTypes.filter(
    (element) => types.length > 1 && element.type === data.types[1].type.name
  );

  const pokemonType = [...firstPokemonType, ...secondPokemonType];

  return (
    <li className="list-none w-80 max-[430px]:w-full">
      <Card
        style={{ backgroundColor: `rgba(${pokemonType[0].color}, 0.15)` }}
        className={`flex justify-between overflow-hidden h-28`}
      >
        <CardHeader className="px-4 py-3 flex justify-between max-[340px]:max-w-32 overflow-x-auto no-scrollbar">
          <CardDescription className="font-bold">Nº {data.id}</CardDescription>
          <CardTitle className="truncate h-7">{capitalizedName}</CardTitle>
          <div className="flex gap-1 m-0">
            {pokemonType.map((type, index) => (
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
        </CardHeader>
        <CardContent className="p-0 relative overflow-hidden">
          <div
            style={{ backgroundColor: `rgb(${pokemonType[0].color})` }}
            className={`w-32 h-full rounded-lg relative`}
          >
            <img
              src={pokemonType[0].src}
              className="absolute top-0 left-0 my-2 mx-[17px]"
            />
            <img
              alt="Pokemon image"
              src={data.sprites.front_default}
              className="absolute top-0 left-0 my-[7px] mx-4"
            />
          </div>
          <Toggle
            className="absolute right-1 top-1 p-0 h-8 data-[state=on]:bg-transparent hover:bg-transparent"
            onClick={Print}
          >
            <img alt="Favorite icon" src={fav_off} />
          </Toggle>
        </CardContent>
      </Card>
    </li>
  );
}

export default PokemonItem;
