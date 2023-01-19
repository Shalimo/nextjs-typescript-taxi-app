import {FC, useState} from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'
import styles from './Input.module.scss'

interface IInput {
    choosedPlace: () => void,
    type: 'from' | 'to'
}

const Input:FC<IInput> = ({choosedPlace, type}) => {

  const [place, setPlace] = useState('')

  const handleSelect = () => {}

  const isFrom = type === 'from'


  return (
    <PlacesAutocomplete 
    value={place}
    onChange={(place) => setPlace(place)}
    onSelect={handleSelect}
    onError={err => console.log('Error', err)}
    >
        {
           ({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
                <div className={styles.inputContainer}>
                    <input className='outline-none w-full' {...getInputProps({
                        placeholder: isFrom ? 'From' : 'To'
                    })}/>
                    {!isFrom && (
                        <div>- min.</div>
                    )}
                </div>
            </div>
           )
        }
    </PlacesAutocomplete>
  )
}

export default Input