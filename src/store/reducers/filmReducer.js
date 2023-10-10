import { createReducer } from "@reduxjs/toolkit";
import { get_films } from "../actions/filmAction";

const initialState = {
    films: [],
}

const filmReducer = createReducer(initialState,
    (builder) => builder
    .addCase(get_films.fulfilled, (state, action) => {
        return {
            ...state,
            films: action.payload.films
        }
    })
    )

export default filmReducer;