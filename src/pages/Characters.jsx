import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { Input, Skeleton, Card, Pagination, PaginationItem, PaginationCursor } from "@nextui-org/react";
import axios from "axios";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const skeletons = [];

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  const fetchCharacters = (pageNumber) => {
    setLoading(true);
    axios
      .get(`https://swapi.dev/api/people/?page=${pageNumber}`)
      .then((response) => {
        setCharacters(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
      <div className="w-48 md:w-72">
        <Input
          size="md"
          type="character"
          label="Character"
          placeholder="Enter the character to find"
        />
      </div>
      <div className="flex flex-wrap flex-row justify-evenly gap-4 mt-20 lg:w-3/4">
        {loading ? generateSkeletons(10) : characters.map((character, index) => (
          <Cards
            key={character.url}
            title={character.name}
            subtitle={character.gender}
            url={character.url}
          />
        ))}
      </div>
      <div className="mt-20">
        <Pagination total={9} onChange={handlePageChange} initialPage={page} showControls>
          {(currentPage, isActive) => (
            <PaginationItem key={currentPage} active={isActive}>
              {currentPage}
            </PaginationItem>
          )}
          <PaginationCursor />
        </Pagination>
      </div>
    </div>
  );
};

export default Characters;
