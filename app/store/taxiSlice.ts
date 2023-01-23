import { createSlice } from '@reduxjs/toolkit';
import { TypeTaxiInitialState, TypeFromTo } from './types';

const initialState: TypeTaxiInitialState = {
    toPlace: {} as TypeFromTo,
    fromPlace: {} as TypeFromTo,
    selectedVariant: '1',
    time: ''
}

export const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        setFromPlace: (state, { payload }) => {
            state.fromPlace = payload
        },

        setToPlace: (state, { payload }) => {
            state.toPlace = payload
        },

        setVariantOfTrip: (state, { payload }) => {
            state.selectedVariant = payload
        },

        setTime: (state, { payload }) => {
            state.time = payload
        }
    }
})