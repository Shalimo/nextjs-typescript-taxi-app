import simpleCar from '../assets/icons/simpleCar.png'
import fastCar from '../assets/icons/fastCar.png'
import electricCar from '../assets/icons/electricCar.png'
import xl from '../assets/icons/xl.png'
import premium from '../assets/icons/premium.png'

interface IVariants {
    id: string,
    title: string,
    car: string
}

export const variants: IVariants[] = [
    {
        id: '1',
        title: 'Standart',
        car: simpleCar.src
    },
    {
        id: '2',
        title: 'Fast',
        car: fastCar.src
    },
    {
        id: '3',
        title: 'Green',
        car: electricCar.src
    },
    {
        id: '4',
        title: 'XL',
        car: xl.src
    },
    {
        id: '5',
        title: 'Premium',
        car: premium.src
    },
]