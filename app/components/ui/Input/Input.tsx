import {FC, useEffect, useRef, useState} from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'
import styles from './Input.module.scss'
import {HiOutlineSearch} from 'react-icons/hi'
import Spinner from '../Spinner/Spinner'

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

                    <div className='hide-scroll-bar absolute w-[320px] ml-[-20px] mt-44 overflow-y-auto rounded-b-lg z-10' style={suggestions.length ? {height: '130px'} : {height: 0}}>
                        {loading && <Spinner/>}
                        
                        {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer', padding: '5px' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer', padding: '5px' };
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
                    </div>
                </div>
            </div>
           )
        }
    </PlacesAutocomplete>
  )
}

export default Input