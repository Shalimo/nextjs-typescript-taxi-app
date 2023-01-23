import { createSlice } from '@reduxjs/toolkit';
import { TypeTaxiInitialState, TypeFromTo } from './types';

const initialState: TypeTaxiInitialState = {
    toPlace: {} as TypeFromTo,
    fromPlace: {} as TypeFromTo,
    selectedVariant: '1'
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
        }
    }
})