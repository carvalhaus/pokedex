import LoginEmailForm from "@/components/LoginEmailForm";
import { Link, useNavigate } from "react-router-dom";
import arrow_left from "../assets/Arrow_left.svg";
import arrow_right from "../assets/Arrow_right.svg";

function LoginEmail() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center p-4 pt-8 h-screen gap-6">
      <button
        className="absolute left-3 top-7 flex gap-1 items-center justify-center font-medium"
        onClick={() => navigate(-1)}
      >
        <img src={arrow_left} alt="Arrow left image" />
      </button>

      <Link
        to={"/"}
        className="absolute right-3 top-8 flex items-center font-medium"
      >
        <p className="text-sm">Pular</p>
        <img src={arrow_right} alt="Arrow right image" />
      </Link>

      <h1 className="font-semibold text-xl">Entrar</h1>

      <h2 className="text-2xl font-semibold">Preencha os seus dados</h2>
      <LoginEmailForm />
    </div>
  );
}

export default LoginEmail;
