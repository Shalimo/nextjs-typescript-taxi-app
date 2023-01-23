import GoogleMapReact from "google-map-react"
import { useEffect } from "react"
import { useRouteWay } from '../../../hooks/useRouteWay'

const GoogleMap = () => {

  const { routeTrip, setMapApi, fromPlace, toPlace } = useRouteWay()

  useEffect(() => {
    if (fromPlace.location && toPlace.location) {
      routeTrip()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromPlace.location, toPlace.location])

  return (
    <div className="h-screen w-full">
        <GoogleMapReact
        bootstrapURLKeys={{key: String(process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY), libraries:['places'],}}
        defaultCenter={{
            lat: 53.904541,
            lng: 27.561523
        }}
        defaultZoom={13}
        options={{
          clickableIcons: false,
          keyboardShortcuts: false,
          zoomControl: false,
          fullscreenControl: false
        }}
        center={fromPlace.location?.lat ?
          {
            lat: fromPlace.location.lat,
            lng: fromPlace.location.lng
          } : undefined
        }
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={setMapApi}
    />
    </div>
  )
}

export default GoogleMap