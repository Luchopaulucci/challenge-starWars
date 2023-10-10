import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import filmsData from "../../data/films.json";
import img from "/public/images/logo-default.jpeg"

export const get_films = createAsyncThunk('get_films', async () => {
    try {
        const response = await axios.get("https://swapi.dev/api/films");

        const filmsWithImages = response.data.results.map(film => {
            const imageInfo = filmsData.films.find(img => img.episode_id === film.episode_id);
            const image = imageInfo ? imageInfo.image : img;

            return {
                ...film,
                image: image
            };
        });

        return {
            films: filmsWithImages
        };
    } catch (error) {
        // Lanza un error para que Redux Toolkit maneje el error
        throw error;
    }
});
