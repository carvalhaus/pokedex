import { Button } from "./ui/button";

function Step({ data = {}, handleClick, step }) {
  const { src, title, subTitle, button } = data;
  return (
    <div className="flex flex-col gap-8 text-center items-center justify-center h-screen p-4 animate-fade_animation">
      <div className="flex flex-col gap-2 text-center items-center">
        <img src={src} alt="Auth image" />
        <h1 className="font-medium text-2xl">{title}</h1>
        <p className="text-gray-500">{subTitle}</p>
      </div>

      <div className="w-full flex items-center justify-center gap-1">
        {step === 0 ? (
          <>
            <div className="w-7 h-2 bg-[#173EA5] rounded-full"></div>
            <div className="w-2 h-2 bg-[#4565B7] rounded-full"></div>
          </>
        ) : (
          <>
            <div className="w-2 h-2 bg-[#4565B7] rounded-full"></div>
            <div className="w-7 h-2 bg-[#173EA5] rounded-full"></div>
          </>
        )}
      </div>

      <Button className="w-80 bg-[#173EA5] font-semibold" onClick={handleClick}>
        {button}
      </Button>
    </div>
  );
}

export default Step;
