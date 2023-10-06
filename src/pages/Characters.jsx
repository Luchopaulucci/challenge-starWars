import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { Skeleton, Card, Pagination, PaginationItem, PaginationCursor, Button } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { get_characters } from "../store/actions/characterAction";

const Characters = () => {
  const [page, setCurrentPage] = useState(1); //Para setear la pagina actual en la que me encuentro y esta misma se la paso a la api
  const [loading, setLoading] = useState(true); //El estado de loading le indica a los skeletons cuando se muestran y cuando se dejan de mostrar
  const skeletons = []; //inicializo un array vacio para meter a los skeletons que luego voy a mostrar
  const dispatch = useDispatch(); //Dispatch para usar redux

  //Traigo la pagina de characters que tengo en el store que me trajo el get_characters al hacer la peticion de la pagina actual
  const store = useSelector((state) => state.characterReducer.characters);

  //Mando a buscar la pagina
  useEffect(() => {
    dispatch(get_characters(page)).then(() => {
      setLoading(false);
    });
  }, [page]);

  //Manejo de el cambio de paginas
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setLoading(true);
  };
  
  //Genero los skeletons y los guardo en el array vacio de arriba
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
      <div className="flex flex-wrap flex-row justify-evenly gap-4 mt-20 lg:w-3/4">
        {loading ? generateSkeletons(10) : store.map((character) => (
          <Cards
            key={character.url}
            title={character.name}
            subtitle={character.gender}
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