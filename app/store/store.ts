import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { slice } from "./taxiSlice";

const reducer = combineReducers({
    slice: slice.reducer
})

export const store = configureStore({
    reducer: reducer
})

export type TypeStore = ReturnType<typeof reducer>