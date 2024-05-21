import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

function ChangePasswordStepOne({ setStep }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setStep((prevStep) => prevStep + 1);
    console.log(data);
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
              Senha atual
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

          <Button className="w-80 bg-[#173EA5] font-semibold" type="submit">
            Continuar
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ChangePasswordStepOne;
