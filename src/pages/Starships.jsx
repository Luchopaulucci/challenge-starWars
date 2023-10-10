import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { Skeleton, Card, Pagination, PaginationItem, PaginationCursor } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { get_starships } from "../store/actions/starshipAction";


const Starships = () => {
  const dispatch = useDispatch();

  const [page, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setLoading(true);
  };

  const starships = useSelector((state) => state.starshipReducer.starships)
  useEffect(() => {
    dispatch(get_starships(page)).then(() => {
      setLoading(false);
    });
  }, [page]);

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
      <div className="flex flex-wrap flex-row justify-evenly gap-4 mt-20 md:w-2/4 lg:w-3/4">
        {loading ? generateSkeletons(10) : starships.map((starship) => (
          <Cards
            key={starship.name}
            title={starship.name}
            subtitle={starship.starship_class}
            toinfo={"infostarship"}
            image={starship.image}
          />
        ))}
      </div>
      <div className="my-10">
        <Pagination total={4} onChange={handlePageChange} initialPage={page} showControls>
          {(currentPage, isActive) => (
            <PaginationItem key={currentPage} active={isActive}>
              {currentPage}
            </PaginationItem>
          )}
          <PaginationCursor />
        </Pagination>
      </div>
      </div>
    </div>
  )
}

export default Starships