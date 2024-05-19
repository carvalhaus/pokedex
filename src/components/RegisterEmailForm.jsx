import { Link, useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

import { useForm } from "react-hook-form";

function RegisterEmailForm() {
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 grid grid-cols-6 gap-6 max-[430px]:flex max-[430px]:flex-col max-[430px]:items-center"
    >
      <div className="col-span-6 sm:col-span-3 max-[430px]:w-full">
        <Label
          htmlFor="Fullname"
          className="block text-sm font-medium text-gray-700"
        >
          Nome completo
        </Label>

        <Input
          type="text"
          id="Fullname"
          name="full_name"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          {...register("Fullname", { required: true, minLength: 4 })}
        />
        {errors?.Fullname?.type === "required" && (
          <small className="text-red-700 font-medium">
            Este campo é obrigatório.
          </small>
        )}

        {errors?.Fullname?.type === "minLength" && (
          <small className="text-red-700 font-medium">
            Este campo deve ser preenchido por pelo menos 4 caracteres.
          </small>
        )}
      </div>

      <div className="col-span-6 sm:col-span-3 max-[430px]:w-full">
        <Label
          htmlFor="Username"
          className="block text-sm font-medium text-gray-700"
        >
          Username
        </Label>

        <Input
          type="text"
          id="Username"
          name="user_name"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          {...register("Username", { required: true, minLength: 4 })}
        />

        {errors?.Username?.type === "required" && (
          <small className="text-red-700 font-medium">
            Este campo é obrigatório.
          </small>
        )}

        {errors?.Username?.type === "minLength" && (
          <small className="text-red-700 font-medium">
            Este campo deve ser preenchido por pelo menos 4 caracteres.
          </small>
        )}
      </div>

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

      <div className="col-span-6 sm:col-span-3 max-[430px]:w-full">
        <Label
          htmlFor="PasswordConfirmation"
          className="block text-sm font-medium text-gray-700"
        >
          Confirmar senha
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

      <div className="col-span-6">
        <p className="text-sm text-gray-500">
          Ao criar uma conta, você concorda com nossos{" "}
          <a href="#" className="text-gray-700 underline">
            termos e condições
          </a>{" "}
          e{" "}
          <a href="#" className="text-gray-700 underline">
            política de privacidade
          </a>
          .
        </p>
      </div>

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4 sm:justify-center">
        <Button className="w-80 bg-[#173EA5] font-semibold" type="submit">
          Criar sua conta
        </Button>

        <p className="mt-4 text-sm text-gray-500 sm:mt-0 text-center">
          Ja possui uma conta?{" "}
          <Link to={"/login"} className="text-gray-700 underline">
            Log in
          </Link>
          .
        </p>
      </div>
    </form>
  );
}

export default RegisterEmailForm;
