import React, { useEffect, useState, useRef } from "react";
import Cards from "../components/Cards";
import { Input, Skeleton, Card, Pagination, PaginationItem, PaginationCursor, button, Button } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { filter_characters, get_characters } from "../store/actions/characterAction";

const Characters = () => {
  const [page, setCurrentPage] = useState(1); //Para setear la pagina actual en la que me encuentro y esta misma se la paso a la api
  const [loading, setLoading] = useState(true); //El estado de loading le indica a los skeletons cuando se muestran y cuando se dejan de mostrar
  const skeletons = []; //inicializo un array vacio para meter a los skeletons que luego voy a mostrar

  const dispatch = useDispatch(); //Dispatch para usar redux
  const inputSearch = useRef(); //Para capturar el input
  const [isSearch, setIsSearch] = useState(false) //Para saber si estoy buscando un personaje para mostrar el boton abajo de restaurar pagina
  const [originalPage, setOriginalPage] = useState(1); //Estado para rastrear la página original para cuando restaur la pagina luego de una busqueda
  const [restoreExecuted, setRestoreExecuted] = useState(false); //Estado para ver si realizamos una nueva peticion

  const store = useSelector((state) => state.characterReducer.characters); //Traigo la pagina de characters que tengo en el store que me trajo el get_characters al hacer la peticion de la pagina actual
  //Mando a buscar la pagina
  useEffect(() => {
    if (restoreExecuted) {
      dispatch(get_characters(page)).then(() => {
        setLoading(false);
        setRestoreExecuted(false); // Restablece la variable restoreExecuted
      });
    } else {
      dispatch(get_characters(page)).then(() => {
        setLoading(false);
      });
    }
  }, [page, restoreExecuted]);
  //Buscar personajes
  const handleSearch = () => {
    const inputValue = inputSearch.current.value.trim(); //Elimino los espacios en blanco del input
    if (inputValue.length > 0) { //Valido si el input tiene algun valor
      setIsSearch(true);
      setOriginalPage(page);
      setLoading(true);
      dispatch(filter_characters(inputValue));
    } else { //Si no tiene valor manda la alerta
      alert("Please enter a name of character");
    }
  };
  //Manejo de el cambio de paginas
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setLoading(true);
  };
  //Manejo el restaurar la pagina lueo de hacer una busqueda
  const handleRestore = () => {
    setIsSearch(false);
    setCurrentPage(originalPage);
    setRestoreExecuted(true);
    setLoading(true);
  }
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
      <div className="w-48 md:w-72 flex">
        <Input ref={inputSearch} name="character" label="Character" placeholder="Enter the character to find" />
        <button onClick={handleSearch} type="button" className="text-gray-600 hover:text-gray-700 mx-2 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </div>
      <div className="flex flex-wrap flex-row justify-evenly gap-4 mt-20 lg:w-3/4">
        {loading ? generateSkeletons(10) : store.map((character) => (
          <Cards
            key={character.url}
            title={character.name}
            subtitle={character.gender}
          />
        ))}
      </div>
      {isSearch ?
        (
          <div className="mt-20">
            <Button onClick={handleRestore} color="primary" variant="shadow" className="font-semibold">
              Keep watching
            </Button>
          </div>
        )
        :
        (
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
        )}
    </div>
  );
};

export default Characters;
