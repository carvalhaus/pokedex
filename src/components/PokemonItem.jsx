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

import { Link, useLocation } from "react-router-dom";

function PokemonItem({
  pokemon = {},
  addFavorite,
  removeFavorite,
  isFavorited,
}) {
  const { id, name, types, sprites } = pokemon;

  const capitalizedName = `${name[0].toUpperCase()}${name.slice(1)}`;

  const firstPokemonType = pokemonsTypes.filter(
    (element) => element.type === types[0].type.name
  );

  const secondPokemonType = pokemonsTypes.filter(
    (element) => types.length > 1 && element.type === types[1].type.name
  );

  const pokemonType = [...firstPokemonType, ...secondPokemonType];

  let location = useLocation();

  location === "favorites" && setFavorite(true);

  return (
    <li className="list-none w-80 max-[430px]:w-full relative">
      <Link to={`/pokedex/pokemon/${id}`}>
        <Card
          style={{ backgroundColor: `rgba(${pokemonType[0].color}, 0.15)` }}
          className={`flex justify-between overflow-hidden h-28`}
        >
          <CardHeader className="px-4 py-3 flex justify-between max-[340px]:max-w-32 overflow-x-auto no-scrollbar">
            <CardDescription className="font-bold">Nº {id}</CardDescription>
            <CardTitle className="truncate h-7">{capitalizedName}</CardTitle>
            <div className="flex gap-1 m-0">
              {pokemonType?.map((type, index) => (
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
          <CardContent
            style={{
              backgroundColor: `rgb(${pokemonType[0].color})`,
            }}
            className="p-0 relative overflow-hidden"
          >
            <div
              style={{
                background: `url(${pokemonType[0].src})`,
                backgroundColor: `rgb(${pokemonType[0].color})`,

                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className={`w-32 h-full rounded-lg flex items-center justify-center`}
            >
              <img
                alt="Pokemon image"
                src={sprites.front_default}
                className=""
              />
            </div>
          </CardContent>
        </Card>
      </Link>

      <Toggle className="absolute right-1 top-1 p-0 h-8 data-[state=on]:bg-transparent hover:bg-transparent">
        {isFavorited ? (
          <img
            alt="Icon of favorite filled"
            src={fav_on}
            onClick={() => removeFavorite(id)}
          />
        ) : (
          <img
            alt="Icon of favorite outlined"
            src={fav_off}
            onClick={() => addFavorite(pokemon)}
          />
        )}
      </Toggle>
    </li>
  );
}

export default PokemonItem;
