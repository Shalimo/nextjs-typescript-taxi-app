import GoogleMapReact from "google-map-react"

const GoogleMap = () => {
  return (
    <div className="h-screen w-full">
        <GoogleMapReact
        bootstrapURLKeys={{key: String(process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY)}}
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
    />
    </div>
  )
}

export default GoogleMap