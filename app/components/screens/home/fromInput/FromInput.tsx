import Input from "@/app/components/ui/Input/Input"
import { useActions } from "@/app/hooks/useActions"
import { Coords } from "google-map-react"

const FromInput = () => {

  const { setFromPlace, setToPlace } = useActions()

  const choosedPlace = (place: string, location: Coords) => {
    setFromPlace({ location, place: place })
    setToPlace('')
  }

  return (
        <Input choosedPlace={choosedPlace} type='from'/>
  )
}

export default FromInput