import { Switch } from "./ui/switch";

function ContentMenu({
  title,
  subtitle_one,
  subtitle_two,
  text_one,
  text_two,
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold">{title}</h3>
      <div className="flex justify-between items-center flex-1">
        <div className="w-60">
          <h4 className="font-semibold text-sm">{subtitle_one}</h4>
          <p className="text-sm">{text_one}</p>
        </div>
        <Switch className="data-[state=checked]:bg-[#173EA5] data-[state=unchecked]:bg-[#5D78C0]" />
      </div>
      <div className="flex justify-between sitems-center">
        <div className="w-60">
          <h4 className="font-semibold text-sm">{subtitle_two}</h4>
          <p className="text-sm">{text_two}</p>
        </div>
        <Switch className="data-[state=checked]:bg-[#173EA5] data-[state=unchecked]:bg-[#5D78C0]" />
      </div>
    </div>
  );
}

export default ContentMenu;
