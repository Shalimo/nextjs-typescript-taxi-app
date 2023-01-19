import Input from "@/app/components/ui/Input/Input"

const ToInput = () => {

  const choosedPlace = () => {
    console.log('place choosed')
  }

  return (
    <Input choosedPlace={choosedPlace} type='to'/>
  )
}

export default ToInput