import { Image } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const InfoFilm = () => {
  const { title} = useParams();
  const films = useSelector((state) => state.filmReducer.films);

  const film = films.find((film) => film.title === title);
  console.log(title);
  console.log(films);

  if (!film) {
    return <div className="h-full bg-pages-Image text-4xl text-center">Film not found.</div>;
  }

  return (
    <div className="bg-pages-Image min-h-full sm:min-h-screen min-w-full">
      <div className="w-full h-screen backdrop-blur-xs flex flex-col items-center">
        <div className="w-full flex items-start">
          <h2 className="text-3xl sm:text-8xl text-bold my-10 mx-20 text-white text-center">
            {title.toLocaleUpperCase()}
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-start justify-start w-full">
          <div className="mx-20">
              <Image
                isBlurred
                width={500}
                lazy
                src={film.image}
                alt="NextUI Album Cover"
                classNames="m-5"
              />
          </div>
          <div className="flex flex-col items-center sm:items-start w-full sm:w-2/4">
            <h2 className="text-white text-xl"><span className="text-red-500">Opening crawl: </span>{film.opening_crawl}</h2>
            <h2 className="text-white text-xl"><span className="text-red-500">Director: </span>{film.director }</h2>
            <h2 className="text-white text-xl"><span className="text-red-500">Producer: </span>{film.producer }</h2>
            <h2 className="text-white text-xl"><span className="text-red-500">Release Date: </span>{film.release_date }</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoFilm