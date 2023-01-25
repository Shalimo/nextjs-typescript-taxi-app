import simpleCar from '../assets/icons/simpleCar.png'
import fastCar from '../assets/icons/fastCar.png'
import electricCar from '../assets/icons/electricCar.png'
import xl from '../assets/icons/xl.png'
import premium from '../assets/icons/premium.png'

interface IVariants {
    id: string,
    title: string,
    car: string,
    rate: number
}

interface IInfo {
    information: string
}

export const variants: IVariants[] = [
    {
        id: '1',
        title: 'Standart',
        car: simpleCar.src,
        rate: 0.7
    },
    {
        id: '2',
        title: 'Premium',
        car: premium.src,
        rate: 1.5
    },
    {
        id: '3',
        title: 'Premium-x',
        car: fastCar.src,
        rate: 2
    },
    {
        id: '4',
        title: 'Green',
        car: electricCar.src,
        rate: 0.9
    },
    {
        id: '5',
        title: 'XL',
        car: xl.src,
        rate: 1.6
    }
]

export const information: IInfo = {
    information: 'To order a taxi, you should type your current location and choose a ride destination. Then select your preferred ride-type and confirm your request.'
}