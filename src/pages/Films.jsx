import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { Skeleton, Card } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { get_films } from "../store/actions/filmAction";

const Films = () => {
  const dispatch = useDispatch()

  const films = useSelector((state) => state.filmReducer.films)
  useEffect(() => {
    dispatch(get_films()).then(() => {
      setLoading(false);
    });
  }, []);

  const [loading, setLoading] = useState(true);
  const skeletons = [];
  const generateSkeletons = (count) => {
    for (let i = 0; i < count; i++) {
      skeletons.push(
        <Card isFooterBlurred className="w-72 h-80 col-span-12 sm:col-span-7" key={i}>
          <Skeleton className="z-0 w-full h-full object-cover" />
        </Card>
      );
    }
    return skeletons;
  };

  return (
    <div className="bg-pages-Image min-h-full sm:min-h-screen min-w-full">
      <div className="w-full min-h-screen backdrop-blur-xs flex flex-col justify-center items-center">
        <div className="my-20 flex flex-wrap flex-row justify-evenly gap-4 w-3/4">
          {loading ? generateSkeletons(6) : films.map((film) => (
            <Cards
              key={film.name}
              title={film.title}
              subtitle={film.episode_id}
              toinfo={"infofilm"}
              image={film.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Films