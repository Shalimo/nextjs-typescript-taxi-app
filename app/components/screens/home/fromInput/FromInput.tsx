import Input from "@/app/components/ui/Input/Input"
import { Coords } from "google-map-react"

const FromInput = () => {

  const choosedPlace = (place: string, location: Coords) => {
    console.log(`place choosed: ${place + location}`)
  }

  return (
        <Input choosedPlace={choosedPlace} type='from'/>
  )
}

export default FromInput