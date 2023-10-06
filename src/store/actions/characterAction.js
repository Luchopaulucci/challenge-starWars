import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from 'sweetalert2'

export const get_characters = createAsyncThunk('get_characters', async (obj) => {
    try {
        const response = await axios.get(`https://swapi.dev/api/people/?page=${obj}`)
        return {
            characters: response.data.results
        }
    } catch (error) {
        console.log(error);
    }
})

export const filter_characters = createAsyncThunk('filter_characters', async (inputValue) => {
    try {
        const encodedObj = encodeURIComponent(inputValue);
        const response = await axios.get(`https://swapi.dev/api/people/?search=${encodedObj}&format=json`);

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

        return {
            characters: response.data.results,
            characters_list: response.data.results,
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
});