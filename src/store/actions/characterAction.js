import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import charactersData from "../../data/characters.json";
import Swal from "sweetalert2";

export const get_characters = createAsyncThunk('get_characters', async (obj) => {
    try {
        const response = await axios.get(`https://swapi.dev/api/people/?page=${obj}`)

        const charactersWithImages = response.data.results.map(character => {
            const characterFind = charactersData.characters.find(char => char.name === character.name);
            const image = characterFind ? characterFind.image : '/public/images/logo-default.jpeg';

            return {
                ...character,
                image: image
            };
        });

        return {
            characters: charactersWithImages
        }
    } catch (error) {
        throw error;
    }
})


export const filter_characters = createAsyncThunk('filter_characters', async (inputValue) => {
    try {
        const response = await axios.get(`https://swapi.dev/api/people/?search=${inputValue}&format=json`);

        if (response.data.results.length === 0) {
            Swal.fire({
                title: 'Not found',
                width: 600,
                padding: '3em',
                color: 'white',
                background: '#ffff url("/public/images/fondo-error.jpg")',
                backdrop: `
                rgba(123, 0, 0, 0.4)
                `
              })
        }

        const charactersWithImages = response.data.results.map(character => {
            const characterFind = charactersData.characters.find(char => char.name === character.name);
            const image = characterFind ? characterFind.image : '/public/images/logo-default.jpeg';

            return {
                ...character,
                image: image
            };
        });

        return {
            characters: charactersWithImages,
            characters_list: charactersWithImages
        }
    } catch (error) {
        throw error;
    }
});