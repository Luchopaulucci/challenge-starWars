import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_starships = createAsyncThunk('get_starships', async (obj) => {
    try {
        const response = await axios.get(`https://swapi.dev/api/starships/?page=${obj}`)

        const starshipsWithImages = response.data.results.map(starship => {
            const image = starship.image = '/public/images/logo-default.jpeg'

            return {
                ...starship,
                image: image
            };
        });

        return {
            starships: starshipsWithImages
        }
    } catch (error) {
        console.log(error);
    }
})