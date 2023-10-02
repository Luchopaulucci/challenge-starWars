import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { Input, Skeleton, Card, Pagination, PaginationItem, PaginationCursor } from "@nextui-org/react";
import axios from "axios";

const Films = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const skeletons = [];

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://swapi.dev/api/films/")
      .then((response) => {
        setFilms(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  console.log(films);

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
    <div className="my-10 flex justify-center items-center flex-col min-h-full sm:min-h-screen min-w-full">
      <div className="flex flex-wrap flex-row justify-evenly gap-4 mt-20 w-4/4">
        {loading ? generateSkeletons(6) : films.map((film) => (
          <Cards
            key={film.url}
            title={film.title}
            subtitle={film.episode_id}
            url={film.url}
          />
        ))}
      </div>
    </div>
  )
}

export default Films