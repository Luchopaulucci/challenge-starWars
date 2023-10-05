import { createReducer } from "@reduxjs/toolkit";
import { filter_characters, get_AllCharacters, get_characters } from "../actions/characterAction";

const initialState = {
    characters: [],
    AllCharacters: [],
}

const characterReducer = createReducer(initialState,
    (builder) => builder
        .addCase(get_characters.fulfilled, (state, action) => {
            return {
                ...state,
                characters: action.payload.characters
            }
        })
        .addCase(get_AllCharacters.fulfilled, (state, action) =>{
            return {
                ...state,
                AllCharacters: action.payload.AllCharacters
            }
        })
        .addCase(filter_characters.fulfilled, (state, action) => {
            return {
                ...state,
                characters: action.payload.characters,
            }
        })
    )

export default characterReducer;