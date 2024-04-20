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

function Home() {
  return (
    <div className="flex flex-col  gap-6 p-6">
      <Input
        type="search"
        placeholder="Procurar Pokémon"
        className="focus-visible:ring-transparent"
      />

      <div className="flex gap-4 justify-between">
        <Select>
          <SelectTrigger className="w-[140px] focus-visible:ring-transparent">
            <SelectValue placeholder="Todos os tipos" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Selecione o tipo</SelectLabel>
              {pokemonsTypes.map((item) => (
                <SelectItem key={item.key} value={item.key}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[160px] focus-visible:ring-transparent">
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent>
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

      <PokemonList />
    </div>
  );
}

export default Home;
