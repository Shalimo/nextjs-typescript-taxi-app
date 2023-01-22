import Input from "@/app/components/ui/Input/Input"
import { useActions } from "@/app/hooks/useActions"
import { Coords } from "google-map-react"

const ToInput = () => {

  const { setToPlace } = useActions()

  const choosedPlace = (place: string, location: Coords) => {
    setToPlace({ location, place: place })
  }

  return (
    <Input choosedPlace={choosedPlace} type='to'/>
  )
}

export default ToInput