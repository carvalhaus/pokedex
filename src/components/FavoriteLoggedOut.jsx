import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function FavoriteLoggedOut() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center pt-10">
      <img
        src="src/assets/not_logged.png"
        alt="Character not logged image"
        className="w-80"
      />
      <h2 className="font-semibold text-2xl">
        Você precisa entrar em uma conta para fazer isso.
      </h2>
      <p className="text-gray-600">
        Para acessar essa funcionalidade, é necessário fazer login ou criar uma
        conta. Faça isso agora!
      </p>

      <Link to={"/auth"}>
        <Button
          variant="outline"
          className="text-[#173EA5] border-[#173EA5] border-2 font-bold w-full hover:text-[#173EA5]"
        >
          Entre ou Cadastre-se
        </Button>
      </Link>
    </div>
  );
}

export default FavoriteLoggedOut;
