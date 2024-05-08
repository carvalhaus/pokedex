import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function Login() {
  return (
    <div className="flex flex-col gap-8 text-center items-center justify-center h-screen p-4 animate-fade_animation relative">
      <Link
        to={"/"}
        className="absolute right-3 top-5 flex gap-1 items-center font-medium"
      >
        <p>Pular</p>
        <img src="src/assets/Arrow.svg" alt="Arrow image" />
      </Link>

      <div className="flex flex-col gap-2 text-center items-center">
        <img
          className=""
          src="src/assets/characters.png"
          alt="Characters image"
        />
        <h1 className="font-medium text-2xl">
          Está pronto para essa aventura?
        </h1>
        <p className="text-gray-500">
          Basta criar uma conta e começar a explorar o mundo dos Pokémon hoje!
        </p>
      </div>

      <div>
        <Button className="w-80 bg-[#173EA5] m-2 font-semibold">
          Criar conta
        </Button>
        <Button className="w-80 font-semibold text-[#173EA5]" variant="ghost">
          Já tenho uma conta
        </Button>
      </div>
    </div>
  );
}

export default Login;
