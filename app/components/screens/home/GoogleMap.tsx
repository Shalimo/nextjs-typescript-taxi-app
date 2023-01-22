import { useTypedSelector } from "@/app/hooks/useTypedSelector"
import GoogleMapReact from "google-map-react"

const GoogleMap = () => {

  const { fromPlace } = useTypedSelector(state => state.slice)

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
    />
    </div>
  )
}

export default GoogleMap