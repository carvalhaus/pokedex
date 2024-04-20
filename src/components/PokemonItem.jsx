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
import { Button } from "./ui/button";

function PokemonItem() {
  const Print = () => {
    console.log("CLICKED");
  };

  return (
    <li className="list-none">
      <Card className="flex justify-between overflow-hidden">
        <CardHeader className="px-4 py-3">
          <CardDescription>N 001</CardDescription>
          <CardTitle>Bulbashaur</CardTitle>
          <div className="flex gap-1">
            <Badge>Type 1</Badge>
            <Badge>Type 2</Badge>
          </div>
        </CardHeader>
        <CardContent className="p-0 relative">
          <div className="w-32 h-full bg-lime-500 flex justify-center items-center rounded-lg">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
          </div>
          <Toggle
            className="absolute right-1 top-1 p-0 h-8 data-[state=on]:bg-transparent hover:bg-transparent"
            onClick={Print}
          >
            <img src={fav_off} />
          </Toggle>
        </CardContent>
      </Card>
    </li>
  );
}

export default PokemonItem;
