import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import { filter_characters } from "../store/actions/characterAction";
import Swal from "sweetalert2";
import { Input, Checkbox } from "@nextui-org/react";


const Index = () => {
  //Dispatch para usar redux
  const dispatch = useDispatch();
  //captura el valor del input
  const inputSearch = useRef();

  //Hace la busqueda en en el Action y actualiza el valor de list
  const handleSearch = () => {
    const inputValue = inputSearch.current.value.trim();
    inputValue.length > 0
      ? (dispatch(filter_characters(inputValue)), (inputSearch.current.value = ''))
      : Swal.fire('Enter a name of character to find');
  };
  //Traigo la lista de redux que tiene solo los personajes que busque mediante el input
  const list = useSelector((state) => state.characterReducer.characters_list);
  //Filtro la lista para que no tenga personajes repetidos
  const listFiltered = list.filter((character, index, self) =>
    index === self.findIndex((c) => c.name === character.name)
  );

  //Saco los generos de los peronajes
  const genders = list.map((character) => character.gender);
  //Filtro la lista de egneros repetidos y dejo solo uno de cada uno
  const gendersFiltered = genders.filter((gender, index, self) =>
    index === self.findIndex((g) => g === gender)
  );

  // Estado para los géneros seleccionados en los checkbox
  const [selectedGenders, setSelectedGenders] = useState([]);
  //Mira cuando cambia de valor el handleCheckboxChange
  const handleCheckboxChange = (gender) => {
    if (selectedGenders.includes(gender)) {
      setSelectedGenders(selectedGenders.filter((g) => g !== gender));
    } else {
      setSelectedGenders([...selectedGenders, gender]);
    }
  };

  //Filtro la lista de todos los personajes que busque y dejo solo los que pertenecen a los generos seleccionados si no tengo ninguno seleccionado muestro todos
  const filteredCharacters = selectedGenders.length === 0
    ? listFiltered
    : listFiltered.filter((character) => selectedGenders.includes(character.gender));

  return (
    <div className="flex flex-col min-h-screen max-w-screen">
      <section className="mt-32 absolut overflow-hidden z-20 flex flex-col justify-center items-center w-full text-white">
        <h1 className="text-4xl sm:text-8xl mb-4">STAR WARS</h1>
        <p className="text-2xl sm:text-4xl mb-4">Find your favorite character</p>
        <div className="w-56 md:w-72 flex">
          <Input ref={inputSearch} name="character" label="Character" placeholder="Enter the character to find" className="text-black" />
          <button onClick={handleSearch} type="button" className="mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth="1.5" stroke="white" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>
        <div className="z-20 flex flex-row flex-wrap justify-center my-10 gap-4">
          {gendersFiltered.map((gender) => (
            <Checkbox defaultChecked={selectedGenders.includes(gender)} size="md" text="primary" onChange={() => handleCheckboxChange(gender)} >
              <span className="text-white text-xl">{gender}</span>
            </Checkbox>
          ))}
        </div>
        <div className="flex flex-row flex-wrap justify-evenly gap-4 w-3/4">
          {filteredCharacters.map((character) => (
            <Cards
              key={character.name}
              title={character.name}
              subtitle={character.gender}
              toinfo={"infocharacter"}
              image={character.image}
            />
          ))}
        </div>
      </section>
      <video muted autoPlay loop className="fixed top-0 left-0 w-full h-full object-cover z-0">
        <source src="/public/videos/bg-home.mp4" type="video/mp4" />
      </video>
      <div className="bg-black opacity-50 mix-blend-overlay absolute top-0 left-0 w-full h-full object-cover z-10"></div>
    </div>
  );
};

export default Index;