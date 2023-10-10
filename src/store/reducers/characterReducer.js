import { createReducer } from "@reduxjs/toolkit";
import { filter_characters, get_characters } from "../actions/characterAction";

const initialState = {
    characters: [],
    characters_list: [],
}

const characterReducer = createReducer(initialState,
    (builder) => builder
        .addCase(get_characters.fulfilled, (state, action) => {
            return {
                ...state,
                characters: action.payload.characters
            }
        })
        .addCase(filter_characters.fulfilled, (state, action) => {
            return {
                ...state,
                characters: action.payload.characters,
                characters_list: [...state.characters_list, ...action.payload.characters_list],
            }
        })
    )

export default characterReducer;