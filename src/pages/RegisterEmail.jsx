import RegisterEmailForm from "@/components/RegisterEmailForm";
import { Link, useNavigate } from "react-router-dom";

function RegisterEmail() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center p-4 pt-8 h-screen gap-6">
      <button
        className="absolute left-3 top-7 flex gap-1 items-center justify-center font-medium"
        onClick={() => navigate(-1)}
      >
        <img src="src/assets/Arrow_left.svg" alt="Arrow left image" />
      </button>

      <Link
        to={"/pokedex"}
        className="absolute right-3 top-8 flex items-center font-medium"
      >
        <p className="text-sm">Pular</p>
        <img src="src/assets/Arrow_right.svg" alt="Arrow right image" />
      </Link>

      <h1 className="font-semibold text-xl">Criar conta</h1>

      <RegisterEmailForm />
    </div>
  );
}

export default RegisterEmail;
