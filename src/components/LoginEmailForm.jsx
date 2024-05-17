import { useForm } from "react-hook-form";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

function LoginEmailForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 grid grid-cols-6 gap-6 max-[430px]:flex max-[430px]:flex-col max-[430px]:items-center"
    >
      <div className="col-span-6 max-[430px]:w-full">
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

      <div className="col-span-6 sm:col-span-3 max-[430px]:w-full">
        <Label
          htmlFor="Password"
          className="block text-sm font-medium text-gray-700"
        >
          Senha
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
    </form>
  );
}

export default LoginEmailForm;
