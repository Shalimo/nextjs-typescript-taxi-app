import Button from "@/app/components/ui/button/Button"
import { useState } from "react"
import { useTypedSelector } from "@/app/hooks/useTypedSelector"
import { useActions } from "@/app/hooks/useActions"
import { variants } from "@/app/data/data"

const OrderButton = () => {

    const [isOrdered, setIsOrdered] = useState(false)
    const [success, setSuccess] = useState('')
    const { time, selectedVariant, fromPlace, toPlace } = useTypedSelector(state => state.slice)
    const { setVariantOfTrip, setTime } = useActions()

    const orderHandler = () => {
        setIsOrdered(true)
        setTimeout(() => setIsOrdered(false), 2000)
        setVariantOfTrip('1')
        setTime('')
        variants.find(variant => variant.id === selectedVariant ? setSuccess(variant.title) : '')

        const successId = setTimeout(() => {
            setSuccess('')
            clearTimeout(successId)
        }, 2000)
    }

    const isActive = time && selectedVariant ? true : false
    const title = !isOrdered ? 'Order a taxi' : 'Successfully ordered'

    return (
        <div className="flex justify-center flex-col items-center">
            <Button cb={orderHandler} isActive={isActive} title={title} success={success} />
            {success !== '' ? <div className="rounded-lg py-3 px-16 mt-5 mb-5 shadow-slate-400 shadow-md flex justify-center flex-col items-center bg-white font-bold">
                <div>{`Ordered taxi: ${success}`}</div>
                <div>{`From: ${fromPlace.place}`}</div>
                <div>{`To: ${toPlace.place}`}</div>
            </div> : null}
        </div>
    )
}

export default OrderButton