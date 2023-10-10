import { useEffect, useState } from "react";
import { Skeleton, Card, Pagination, PaginationItem, PaginationCursor } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { get_characters } from "../store/actions/characterAction";
import Cards from "../components/Cards";

const Characters = () => {
  //Dispatch para usar redux
  const dispatch = useDispatch();

  //Para setear la pagina actual en la que me encuentro y esta misma se la paso a la api
  const [page, setCurrentPage] = useState(1);
  //Manejo de el cambio de paginas
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setLoading(true);
  };

  //Traigo la pagina de characters que tengo en el store que me trajo el get_characters al hacer la peticion de la pagina actual
  const store = useSelector((state) => state.characterReducer.characters);
  //Mando a buscar la pagina
  useEffect(() => {
    dispatch(get_characters(page)).then(() => {
      setLoading(false);
    });
  }, [page]);

  //El estado de loading le indica a los skeletons cuando se muestran y cuando se dejan de mostrar
  const [loading, setLoading] = useState(true);
  //inicializo un array vacio para meter los skeletons que luego voy a mostrar cuando el loading sea true
  const skeletons = [];
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