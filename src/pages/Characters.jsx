import { useEffect, useState } from "react";
import { Skeleton, Card, Pagination, PaginationItem, PaginationCursor } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { get_characters } from "../store/actions/characterAction";
import Cards from "../components/Cards";

const Characters = () => {
  const dispatch = useDispatch();

  const [page, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setLoading(true);
  };

  useEffect(() => {
    dispatch(get_characters(page)).then(() => {
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

  const store = useSelector((state) => state.characterReducer.characters);

  return (
    <div className="bg-pages-Image min-h-full sm:min-h-screen min-w-full">
      <div className="w-full h-full backdrop-blur-xs flex flex-col justify-center items-center">
        <div className="my-20 flex flex-wrap flex-row justify-evenly gap-4 lg:w-3/4">
          {loading ? generateSkeletons(10) : store.map((character) => (
            <Cards
              key={character.name}
              title={character.name}
              subtitle={character.gender}
              toinfo={"infocharacter"}
              image={character.image}
            />
          ))}
        </div>
        <div className="my-10">
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
    </div>
  );
};

export default Characters;