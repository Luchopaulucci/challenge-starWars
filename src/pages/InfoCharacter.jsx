import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Image } from "@nextui-org/react";

const InfoCharacter = () => {
  const { name } = useParams();
  const characters = useSelector((state) => state.characterReducer.characters);

  const character = characters.find((char) => char.name === name);

  if (!character) {
    return <div className="h-full bg-pages-Image text-4xl text-center">Character not found.</div>;
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
                src={character.image}
                alt="NextUI Album Cover"
                classNames="m-5"
              />
          </div>
          <div className="flex flex-col items-center sm:items-start w-full sm:w-fit">
            <h2 className="text-white text-xl"><span className="text-red-500">Height: </span>{character.height}cm</h2>
            <h2 className="text-white text-xl"><span className="text-red-500">Gender: </span>{character.gender}</h2>
            <h2 className="text-white text-xl"><span className="text-red-500">Eye color: </span>{character.eye_color}</h2>
            <h2 className="text-white text-xl"><span className="text-red-500">Hair color: </span>{character.hair_color}</h2>
            <h2 className="text-white text-xl"><span className="text-red-500">Mass: </span>{character.mass}kg</h2>
            <h2 className="text-white text-xl"><span className="text-red-500">Skin color: </span>{character.skin_color}</h2>
            <h2 className="text-white text-xl"><span className="text-red-500">Birthay: </span>{character.birth_year}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCharacter;
