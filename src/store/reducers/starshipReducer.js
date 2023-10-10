import { createReducer } from "@reduxjs/toolkit";
import { get_starships } from "../actions/starshipAction";

const initialState = {
    starships: [],
}

const starshipReducer = createReducer(initialState,
    (builder) => builder
    .addCase(get_starships.fulfilled, (state, action) => {
        return {
            ...state,
            starships: action.payload.starships
        }
    })
    )

export default starshipReducer;