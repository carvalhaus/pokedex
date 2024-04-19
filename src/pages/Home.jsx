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

function Home() {
  return (
    <div className="flex flex-col  gap-6 p-6">
      <Input type="search" placeholder="Procurar Pokémon" />

      <div className="flex gap-4 justify-between">
        <Select>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Todos os tipos" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Selecione o tipo</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[160px]">
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
    </div>
  );
}

export default Home;
