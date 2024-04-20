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

function PokemonItem({ name, id, sprites, types }) {
  const Print = () => {
    console.log("CLICKED");
  };

  const capitalizedName = name[0].toUpperCase() + name.slice(1);

  const typesNames = types.map((type) => type.type.name);

  console.log(typesNames);

  return (
    <li className="list-none">
      <Card className="flex justify-between overflow-hidden">
        <CardHeader className="px-4 py-3">
          <CardDescription>Nº {id}</CardDescription>
          <CardTitle>{capitalizedName}</CardTitle>
          <div className="flex gap-1">
            {types.map((type, index) => (
              <Badge key={index}>{type.type.name}</Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="p-0 relative">
          <div className="w-32 h-full bg-lime-500 flex justify-center items-center rounded-lg">
            <img alt="Pokemon image" src={sprites.front_default} />
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
