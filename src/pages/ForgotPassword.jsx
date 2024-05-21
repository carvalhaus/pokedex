import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center p-4 pt-8 h-screen gap-6">
      <button
        className="absolute left-3 top-7 flex gap-1 items-center justify-center font-medium"
        onClick={() => navigate(-1)}
      >
        <img src="src/assets/Arrow_left.svg" alt="Arrow left image" />
      </button>
      <h1 className="font-semibold text-xl">Esqueci minha senha</h1>

      <div className="text-center">
        <h2 className="text-2xl font-normal text-gray-500">Vamos recuperar!</h2>
        <h3 className="text-2xl font-semibold">Qual é o seu e-mail?</h3>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full sm:w-[600px] flex flex-col gap-6 items-center justify-center"
      >
        <div className="w-full">
          <Label
            htmlFor="Email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </Label>

          <Input
            type="email"
            id="Email"
            name="email"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            {...register("Email", {
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          {errors?.Email?.type === "required" && (
            <small className="text-red-700 font-medium">
              Este campo é obrigatório.
            </small>
          )}
          {errors?.Email?.type === "pattern" && (
            <small className="text-red-700 font-medium">
              Isso não parece um e-mail.
            </small>
          )}
        </div>

        <Button className="w-80 bg-[#173EA5] font-semibold" type="submit">
          Continuar
        </Button>
      </form>
    </div>
  );
}

export default ForgotPassword;
