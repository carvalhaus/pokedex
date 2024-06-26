import { Button } from "@/components/ui/button";
import { useApi } from "@/context/ApiContext";
import useGoogleAuth from "@/hooks/useGoogleAuth";
import { Link, useNavigate } from "react-router-dom";
import arrow_left from "../assets/Arrow_left.svg";
import arrow_right from "../assets/Arrow_right.svg";
import login from "../assets/login.png";
import google_icon from "../assets/google.svg";

function Login() {
  const navigate = useNavigate();
  const { handleGoogleAuth } = useGoogleAuth();

  return (
    <div className="flex flex-col items-center p-4 pt-8 h-screen">
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
      <div className="flex flex-col gap-8 text-center items-center justify-center h-full animate-fade_animation">
        <div className="flex flex-col gap-2 text-center items-center">
          <img src={login} alt="Login image" />
          <h2 className="font-medium text-2xl">
            Que bom te ver aqui novamente!
          </h2>
          <p className="text-gray-500">Como deseja se conectar?</p>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            variant="outline"
            className="w-80 font-semibold text-[#173EA5] hover:text-[#173EA5]"
            onClick={handleGoogleAuth}
          >
            <img src={google_icon} alt="Google icon" className="pr-4" />
            Continuar com o Google
          </Button>

          <Link to={"/login-email"}>
            <Button className="w-80 bg-[#173EA5] font-semibold">
              Continuar com um e-mail
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
