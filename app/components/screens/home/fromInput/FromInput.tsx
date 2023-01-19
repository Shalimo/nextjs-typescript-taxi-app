import Input from "@/app/components/ui/Input/Input"

const FromInput = () => {

  const choosedPlace = () => {
    console.log('place choosed')
  }

  return (
        <Input choosedPlace={choosedPlace} type='from'/>
  )
}

export default FromInput