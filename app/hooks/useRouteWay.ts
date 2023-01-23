import { useTypedSelector } from "@/app/hooks/useTypedSelector"
import { useState } from "react"

interface IMapApi {
    map: google.maps.Map,
    maps: any
}

export const useRouteWay = () => {
    const { fromPlace, toPlace } = useTypedSelector(state => state.slice)

    const [mapAPI, setMapApi] = useState<IMapApi>({} as IMapApi)

    const routeTrip = () => {
        const { map, maps } = mapAPI

        if (typeof maps.DirectionsRenderer === 'function') {
            const directionsRenderer: google.maps.DirectionsRenderer = new maps.DirectionsRenderer()
            const directionsService: google.maps.DirectionsService = new maps.DirectionsService()
            directionsService.route({
                origin: fromPlace.location,
                destination: toPlace.location,
                travelMode: google.maps.TravelMode.DRIVING
            }).then(res => {
                directionsRenderer.setDirections(res)

            }).catch(err => { alert('Cant get directions because it goes across the sea') })

            directionsRenderer.setOptions({
                markerOptions: {
                    clickable: false
                },
                polylineOptions: {
                    strokeColor: '#16A34A',
                    strokeWeight: 5
                }
            })

            directionsRenderer.setMap(map)
        }
    }

    return { routeTrip, mapAPI, setMapApi, fromPlace, toPlace }
}   