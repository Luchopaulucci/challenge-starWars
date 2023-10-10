import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import starshipsData from "../../data/starships.json";

export const get_starships = createAsyncThunk('get_starships', async (obj) => {
    try {
        const response = await axios.get(`https://swapi.dev/api/starships/?page=${obj}`)

        const starshipsWithImages = response.data.results.map(starship => {
            const starshipFind = starshipsData.starships.find(img => img.name === starship.name);
            const image = starshipFind ? starshipFind.image : '/public/images/logo-default.jpeg';

            return {
                ...starship,
                image: image
            };
        });

        return {
            starships: starshipsWithImages
        }
    } catch (error) {
        throw error;
    }
})