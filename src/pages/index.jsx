import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import { filter_characters } from "../store/actions/characterAction";
import Swal from "sweetalert2";
import { Input, Checkbox } from "@nextui-org/react";


const Index = () => {
  const inputSearch = useRef();
  const dispatch = useDispatch();
  const [selectedGenders, setSelectedGenders] = useState([]); // Estado para los géneros seleccionados

  const list = useSelector((state) => state.characterReducer.characters_list);

  const listFiltered = list.filter((character, index, self) =>
    index === self.findIndex((c) => c.name === character.name)
  );
  //Saco los egneros de los peronajes
  const genders = list.map((character) => character.gender);
  //Filtro los repetidos y dejo solo uno de cada uno
  const gendersFiltered = genders.filter((gender, index, self) =>
    index === self.findIndex((g) => g === gender)
  );
  //Mira cuando cambia de valor el handleCheckboxChange
  const handleCheckboxChange = (gender) => {
    if (selectedGenders.includes(gender)) {
      setSelectedGenders(selectedGenders.filter((g) => g !== gender));
    } else {
      setSelectedGenders([...selectedGenders, gender]);
    }
  };
  //Hace la busqueda en en el Action y actualiza el valor de list
  const handleSearch = () => {
    const inputValue = inputSearch.current.value.trim();
    if (inputValue.length > 0) {
      dispatch(filter_characters(inputValue));
      inputSearch.current.value = '';
    } else {
      Swal.fire('Enter a name of character to find');
    }
  };
  //Filtramos dependiendo los checkbox
  const filteredCharacters = selectedGenders.length === 0
  ? listFiltered
  : listFiltered.filter((character) => selectedGenders.includes(character.gender));


  return (
    <div className="flex flex-col min-h-screen sm:min-h-screen max-w-full">
      <section className="relative overflow-hidden flex flex-col justify-center items-center w-full">
        <div className="relative z-20 mx-auto max-w-screen flex flex-col justify-center items-center h-fit text-center text-white">
          <h1 className="text-4xl sm:text-8xl mt-24 mb-2">STAR WARS</h1>
          <p className="text-lg sm:text-4xl font-semibold mb-4">
            Find your favorite character
          </p>
          <div className="w-48 md:w-72 flex">
            <Input ref={inputSearch} name="character" label="Character" placeholder="Enter the character to find" className="text-black" />
            <button onClick={handleSearch} type="button" className="text-gray-600 hover:text-gray-700 mx-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth="1.5" stroke="white" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="z-30 flex flex-row my-10 gap-4">
          {gendersFiltered.map((gender) => (
            <Checkbox defaultChecked={selectedGenders.includes(gender)} size="md" text="primary" onChange={() => handleCheckboxChange(gender)} >
              <span className="text-white text-xl">{gender}</span>
            </Checkbox>
          ))}
        </div>
        <div className="flex flex-wrap flex-row justify-evenly gap-4 w-2/4 mt-20">
          {filteredCharacters.map((character) => (
            <Cards
              key={character.name}
              title={character.name}
              subtitle={character.gender}
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


