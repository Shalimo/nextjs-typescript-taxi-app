import {FC, useEffect, useRef, useState} from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'
import styles from './Input.module.scss'
import {HiOutlineSearch} from 'react-icons/hi'

interface IInput {
    choosedPlace: () => void,
    type: 'from' | 'to'
}

const Input:FC<IInput> = ({choosedPlace, type}) => {

    const inputRef = useRef<HTMLInputElement>(null)

    const [isFocus, setIsFocus] = useState(false)


    const setFocus = () => {
        inputRef?.current?.focus()
        setIsFocus(true)
    }

  const [place, setPlace] = useState('')

  const handleSelect = () => {}

  const isFrom = type === 'from'

  useEffect(() => {
    
    if (isFrom) {
        setFocus()
    }
    
}, [isFrom])


  return (
    <PlacesAutocomplete 
    value={place}
    onChange={(place) => setPlace(place)}
    onSelect={handleSelect}
    onError={err => console.log('Error', err)}
    >
        {
           ({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className={isFrom ? 'mb-5' : 'mb-0'}>
                <div className={styles.inputContainer} onClick={setFocus}>
                    <HiOutlineSearch className='mr-1'/>
                    <input className='outline-none w-full' {...getInputProps({
                        ref: inputRef,
                        placeholder: isFrom ? 'From' : 'To'
                    })}/>
                </div>
            </div>
           )
        }
    </PlacesAutocomplete>
  )
}

export default Input