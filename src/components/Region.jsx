import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { regionsAssets } from "@/utils/regionsAssets";

function Region({ name, index }) {
  const capitalizedName = `${name[0].toUpperCase()}${name.slice(1)}`;

  const [region] = regionsAssets.filter((region) => region.name === name);

  return (
    <li className="list-none w-80 h-28 max-[430px]:w-full">
      <Card
        style={{
          //   backgroundImage: `url(${region.src})`,
          background: `linear-gradient(90deg, rgba(0,0,0,0.6) 10%, rgba(0, 0, 0, 0.15)30%), url(${region.src})`,
          backgroundSize: "cover",
        }}
        className={`w-full h-full bg-cover`}
      >
        <CardContent className="py-0 w-full h-full">
          <CardHeader className="px-0 w-full h-full">
            <CardTitle className="mb-2 text-slate-50 font-medium">
              {capitalizedName}
            </CardTitle>
            <CardDescription className="text-slate-50 font-light">
              {index + 1}º Geração
            </CardDescription>
          </CardHeader>
        </CardContent>
      </Card>
    </li>
  );
}

export default Region;
