import { useState } from "react";
import Step from "@/components/Step";
import Login from "@/components/Login";

const stepsData = [
  {
    src: "src/assets/auth_1.png",
    title: "Todos os Pokémons em um só Lugar",
    subTitle: "Acesse uma vasta lista de Pokémon de todas as gerações",
    button: "Continuar",
  },
  {
    src: "src/assets/auth_2.png",
    title: "Mantenha sua Pokédex atualizada",
    subTitle:
      "Cadastre-se e mantenha seu perfil, pokémon favoritos, configurações e muito mais, salvos",
    button: "Vamos começar!",
  },
];

function Auth() {
  const [stepData, setStepData] = useState(stepsData);
  const [step, setStep] = useState(0);

  const handleClick = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <div>
      {step === 0 && (
        <Step data={stepData[step]} handleClick={handleClick} step={step} />
      )}
      {step === 1 && (
        <Step data={stepData[step]} handleClick={handleClick} step={step} />
      )}
      {step === 2 && <Login />}
    </div>
  );
}

export default Auth;
