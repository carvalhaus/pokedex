import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

function ChangePasswordStepTwo() {
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { toast } = useToast();

  const handleToast = () => {
    toast({
      variant: "default",
      className: "bg-[#F1F5F9] border-[#8EABCC] text-[#020817] font-semibold",
      description: "Sua senha foi alterada com sucesso!",
    });
  };

  const onSubmit = (data) => {
    console.log(data);
    navigate("/pokedex");
    handleToast();
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="text-center">
        <h2 className="text-2xl font-normal text-gray-500">
          Quer mudar sua senha?
        </h2>
        <h3 className="text-2xl font-semibold">Qual é o seu e-mail?</h3>
      </div>

      <div className="text-left">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full sm:w-[600px] flex flex-col gap-6 items-center justify-center"
        >
          <div className="w-full">
            <Label
              htmlFor="Password"
              className="block text-sm font-medium text-gray-700"
            >
              Nova senha
            </Label>

            <Input
              type="password"
              id="Password"
              name="password"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              {...register("Password", {
                required: true,
                minLength: 4,
                maxLength: 30,
              })}
            />
            {errors?.Password?.type === "required" && (
              <small className="text-red-700 font-medium">
                Este campo é obrigatório.
              </small>
            )}
            {(errors?.Password?.type === "minLength" ||
              errors?.Password?.type === "maxLength") && (
              <small className="text-red-700 font-medium">
                Sua senha deve ter entre 4 e 30 caracteres.
              </small>
            )}
          </div>

          <div className="w-full">
            <Label
              htmlFor="PasswordConfirmation"
              className="block text-sm font-medium text-gray-700"
            >
              Confirmar nova senha
            </Label>

            <Input
              type="password"
              id="PasswordConfirmation"
              name="password_confirmation"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              {...register("PasswordConfirmation", {
                required: true,
                minLength: 4,
                maxLength: 30,
                validate: (val) => {
                  if (watch("Password") != val) {
                    return "Your passwords do no match";
                  }
                },
              })}
            />
            {errors?.PasswordConfirmation?.type === "required" && (
              <small className="text-red-700 font-medium">
                Este campo é obrigatório.
              </small>
            )}
            {(errors?.PasswordConfirmation?.type === "minLength" ||
              errors?.PasswordConfirmation?.type === "maxLength") && (
              <small className="text-red-700 font-medium">
                Sua senha deve ter entre 4 e 30 caracteres.
              </small>
            )}
            {errors?.PasswordConfirmation?.type === "validate" && (
              <small className="text-red-700 font-medium">
                Não é possível confirmar a sua senha.
              </small>
            )}
          </div>

          <Button className="w-80 bg-[#173EA5] font-semibold" type="submit">
            Alterar
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ChangePasswordStepTwo;
