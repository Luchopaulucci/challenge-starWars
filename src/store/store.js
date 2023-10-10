import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./reducers/characterReducer"
import filmReducer from "./reducers/filmReducer"
import starshipReducer from "./reducers/starshipReducer";

export const store = configureStore({
    reducer: {
        characterReducer: characterReducer,
        filmReducer: filmReducer,
        starshipReducer: starshipReducer,
    }
})