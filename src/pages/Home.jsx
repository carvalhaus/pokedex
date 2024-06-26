import PokemonList from "@/components/PokemonList";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { pokemonsTypes } from "@/utils/pokemonsTypes";
import { useState } from "react";

function Home() {
  const [type, setTypes] = useState("");
  const [sort, setSort] = useState("lower_number");
  const [searchBar, setSearchBar] = useState("");

  return (
    <div className="flex flex-col gap-6 p-6 justify-center items-center ">
      <header className="flex flex-col gap-6 w-full sm:w-4/5">
        <Input
          type="search"
          placeholder="Procurar Pokémon"
          className="focus-visible:ring-transparent"
          onChange={(e) => {
            setSearchBar(e.target.value.toLowerCase());
          }}
        />
        <div className="flex gap-1 justify-between sm:justify-center sm:gap-6">
          <Select
            onValueChange={(value) => {
              setTypes(value);
            }}
          >
            <SelectTrigger className="w-[140px] focus-visible:ring-transparent">
              <SelectValue placeholder="Todos os tipos" />
            </SelectTrigger>
            <SelectContent
              ref={(ref) =>
                ref?.addEventListener("touchend", (e) => e.preventDefault())
              }
            >
              <SelectGroup>
                <SelectLabel>Selecione o tipo</SelectLabel>
                <SelectItem key="null" value={null}>
                  Default
                </SelectItem>
                {pokemonsTypes.map((item) => (
                  <SelectItem key={item.type} value={item.type}>
                    {item.type_pt}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            onValueChange={(value) => {
              setSort(value);
            }}
          >
            <SelectTrigger className="w-[160px] focus-visible:ring-transparent">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent
              ref={(ref) =>
                ref?.addEventListener("touchend", (e) => e.preventDefault())
              }
            >
              <SelectGroup>
                <SelectLabel>Selecione a ordem</SelectLabel>
                <SelectItem value="lower_number">Menor número</SelectItem>
                <SelectItem value="highest_number">Maior número</SelectItem>
                <SelectItem value="a_to_z">A-Z</SelectItem>
                <SelectItem value="z_to_a">Z-A</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </header>
      <PokemonList type={type} sort={sort} searchBar={searchBar} />
    </div>
  );
}

export default Home;
