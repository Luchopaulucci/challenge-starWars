import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import filmsData from "../../data/films.json";

export const get_films = createAsyncThunk('get_films', async () => {
    try {
        const response = await axios.get("https://swapi.dev/api/films");

        const filmsWithImages = response.data.results.map(film => {
            const filmFind = filmsData.films.find(img => img.episode_id === film.episode_id);
            const image = filmFind ? filmFind.image : '/public/images/logo-default.jpeg';

            return {
                ...film,
                image: image
            };
        });

        return {
            films: filmsWithImages
        };
    } catch (error) {
        throw error;
    }
});
