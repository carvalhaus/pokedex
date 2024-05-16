import { Link } from "react-router-dom";
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 grid grid-cols-6 gap-6"
    >
      <div className="col-span-6 sm:col-span-3">
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
          <small className="error-message">First name cannot be empty</small>
        )}

        {errors?.Fullname?.type === "minLength" && (
          <small className="error-message">
            First name must be at 4 characters
          </small>
        )}
      </div>

      <div className="col-span-6 sm:col-span-3">
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
          <small className="error-message">First name cannot be empty</small>
        )}

        {errors?.Username?.type === "minLength" && (
          <small className="error-message">
            First name must be at 4 characters
          </small>
        )}
      </div>

      <div className="col-span-6">
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
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
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
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
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
        />
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

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <Button className="w-80 bg-[#173EA5] font-semibold" type="submit">
          Create an account
        </Button>

        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
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
