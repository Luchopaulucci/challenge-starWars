import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

export const get_AllCharacters = createAsyncThunk('get_AllCharacters', async () => {
    try {
        const allResults = [];

        for (let index = 1; index < 10; index++) {
            const response = await axios.get(`https://swapi.dev/api/people/?page=${index}`);
            allResults.push(...response.data.results);
        }

        return {
            AllCharacters: allResults
        };
    } catch (error) {
        console.log(error);
    }
})

export const filter_characters = createAsyncThunk('filter_characters', async (inputValue) => {
    try {
        const encodedObj = encodeURIComponent(inputValue);
        const response = await axios.get(`https://swapi.dev/api/people/?search=${encodedObj}&format=json`);

        return {
            characters: response.data.results
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
})


