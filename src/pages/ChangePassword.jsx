import ChangePasswordStepOne from "@/components/ChangePasswordStepOne";
import ChangePasswordStepTwo from "@/components/ChangePasswordStepTwo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  return (
    <div className="flex flex-col items-center p-4 pt-8 h-screen gap-6">
      <button
        className="absolute left-3 top-7 flex gap-1 items-center justify-center font-medium"
        onClick={() => navigate(-1)}
      >
        <img src="src/assets/Arrow_left.svg" alt="Arrow left image" />
      </button>

      <h1 className="font-semibold text-xl">Trocar senha</h1>

      <div>
        {step === 0 && <ChangePasswordStepOne setStep={setStep} />}
        {step === 1 && <ChangePasswordStepTwo />}
      </div>
    </div>
  );
}

export default ChangePassword;
