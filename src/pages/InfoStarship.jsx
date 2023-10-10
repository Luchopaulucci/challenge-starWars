import { Image } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const InfoStarship = () => {
  const { name } = useParams();
  const starships = useSelector((state) => state.starshipReducer.starships);

  const starship = starships.find((starship) => starship.name === name);

  if (!starship) {
    return <div className="h-full bg-pages-Image text-4xl text-center">Starship not found.</div>;
  }

  return (
    <div className="bg-pages-Image min-h-full sm:min-h-screen min-w-full">
      <div className="w-full h-screen backdrop-blur-xs flex flex-col items-center">
        <div className="w-full flex items-start">
          <h2 className="text-3xl sm:text-8xl text-bold my-10 mx-20 text-white text-center">
            {name.toLocaleUpperCase()}
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-start justify-start w-full">
          <div className="mx-20">
              <Image
                isBlurred
                width={500}
                lazy
                src={starship.image}
                alt="NextUI Album Cover"
                classNames="m-5"
              />
          </div>
          <div className="flex flex-col items-center sm:items-start w-full sm:w-fit">
            <h2 className="text-white text-xl"><span className="text-red-500">Model: </span>{starship.model}</h2>
            <h2 className="text-white text-xl"><span className="text-red-500">Starship class: </span>{starship.starship_class }</h2>
            <h2 className="text-white text-xl"><span className="text-red-500">Manufacturer: </span>{starship.manufacturer }</h2>
            <h2 className="text-white text-xl"><span className="text-red-500">Cost: </span>${starship.cost_in_credits }</h2>
            <h2 className="text-white text-xl"><span className="text-red-500">Length: </span>{starship.length }kg</h2>
            <h2 className="text-white text-xl"><span className="text-red-500">Skin color: </span>{starship.crew }</h2>
            <h2 className="text-white text-xl"><span className="text-red-500">Passengers: </span>{starship.passengers }</h2>
            <h2 className="text-white text-xl"><span className="text-red-500">Max atmosphering speed: </span>{starship.max_atmosphering_speed }</h2>
            <h2 className="text-white text-xl"><span className="text-red-500">Hyperdrive rating: </span>{starship.hyperdrive_rating }</h2>
            <h2 className="text-white text-xl"><span className="text-red-500">MGLT: </span>{starship.MGLT }</h2>
            <h2 className="text-white text-xl"><span className="text-red-500">Cargo capacity: </span>{starship.cargo_capacity }</h2>
            <h2 className="text-white text-xl"><span className="text-red-500">Consumables: </span>{starship.consumables }</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoStarship