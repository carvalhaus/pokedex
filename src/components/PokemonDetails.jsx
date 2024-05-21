import { useNavigate } from "react-router-dom";
import { Badge } from "./ui/badge";

function PokemonDetails({ apiData }) {
  const { name, data, types } = apiData;

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center h-full sm:w-4/5 sm:border-gray-200 sm:border-2 sm:rounded-2xl sm:overflow-hidden">
      <div
        style={{
          background: `linear-gradient(0deg, rgba(255,255,255,1) 10%, rgba(${types[0].color},0.7)30%)`,
        }}
        className={`w-full h-80 relative flex`}
      >
        <button onClick={() => navigate(-1)} className="absolute top-1 left-1">
          <img src=".././src/assets/Arrow_left_white.svg" />
        </button>
        <div
          className="w-full h-full flex items-end justify-center"
          style={{
            background: `url(${types[0].src})`,
            backgroundSize: "50%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <img
            alt="Pokemon image"
            src={data.sprites.front_default}
            className="w-[216px] h-[216px]"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full px-5 pb-10 gap-4">
        <div>
          <h2 className="font-medium text-3xl">{name}</h2>
          <p className="font-medium text-gray-600">Nº {data.id}</p>
        </div>

        <div className="flex gap-1 m-0">
          {types.map((type, index) => (
            <Badge
              key={index}
              className="mt-0 w-24 text-sm"
              style={{
                backgroundColor: `rgba(${type.color}, 1)`,
              }}
            >
              <p className="w-full text-center">{type.type_pt}</p>
            </Badge>
          ))}
        </div>

        <div
          className="border-y-2
         border-gray-300 w-full mt-2  flex flex-wrap justify-evenly items-center"
        >
          <div className="w-32 flex flex-col gap-1 py-4">
            <div className="flex items-center w-full justify-center gap-1">
              <img src="../src/assets/icons/weight.svg" className="w-6" />
              <h3 className="uppercase font-medium text-gray-600">Peso</h3>
            </div>
            <p className="font-semibold w-full border-gray-300 border-2 rounded-lg text-center p-1">
              {data.weight / 10} kg
            </p>
          </div>

          <div className="w-32 flex flex-col gap-1 py-4">
            <div className="flex items-center w-full justify-center gap-1">
              <img src="../src/assets/icons/height.svg" className="w-6" />
              <h3 className="uppercase font-medium text-gray-600">Altura</h3>
            </div>
            <p className="font-semibold w-full border-gray-300 border-2 rounded-lg text-center p-1">
              {data.height / 10} kg
            </p>
          </div>

          <div className="w-32 flex flex-col gap-1 py-4">
            <div className="flex items-center w-full justify-center gap-1">
              <img src="../src/assets/icons/ability.svg" className="w-6" />
              <h3 className="uppercase font-medium text-gray-600">
                Habilidade
              </h3>
            </div>
            {data.abilities.map((ability, index) => (
              <p
                className="font-semibold w-full border-gray-300 border-2 rounded-lg text-center p-1 capitalize"
                key={index}
              >
                {ability.ability.name}
              </p>
            ))}
          </div>

          <div className="w-32 flex flex-col gap-1 py-4">
            <div className="flex items-center w-full  justify-center gap-1">
              <img src="../src/assets/icons/pokeball.svg" className="w-6" />
              <h3 className="uppercase font-medium text-gray-600">
                Experiência
              </h3>
            </div>
            <p className="font-semibold w-full border-gray-300 border-2 rounded-lg text-center p-1 capitalize">
              {data.base_experience}
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <h4 className="font-semibold text-xl pb-4">Estatísticas</h4>

          <div className="flex gap-3 flex-wrap justify-evenly">
            {data.stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col gap-1 w-24 justify-center items-center text-center py-4 border-gray-300 border-2 rounded-lg"
              >
                <p
                  key={stat.stat.name}
                  className="uppercase font-semibold text-gray-600 text-lg"
                >
                  {stat.stat.name}
                </p>
                <p key={stat.base_stat} className="font-medium">
                  {stat.base_stat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
