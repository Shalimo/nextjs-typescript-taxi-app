import { Coords } from 'google-map-react';
export type TypeFromTo = {
    location: Coords,
    place: string
}

export type TypeTaxiInitialState = {
    toPlace: {},
    fromPlace: {},
    variant: string
}