import { SheetHeader } from "./ui/sheet";
import characters from "../assets/characters.png";
import { Button } from "./ui/button";

function HeaderMenu() {
  return (
    <SheetHeader className="text-left pb-5 border-b-2">
      <div className="flex w-full justify-center items-center">
        <p className="w-auto text-gray-700">
          Mantenha sua Pokédex atualizada e participe desse mundo.
        </p>
        <img src={characters} className="w-[120px]" />
      </div>
      <Button
        variant="outline"
        className="text-[#173EA5] border-[#173EA5] border-2 font-bold"
      >
        Entre ou Cadastre-se
      </Button>
    </SheetHeader>
  );
}

export default HeaderMenu;
