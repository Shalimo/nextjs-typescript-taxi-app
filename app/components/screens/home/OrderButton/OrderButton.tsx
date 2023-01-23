import Button from "@/app/components/ui/button/Button"
import { useState } from "react"
import { useTypedSelector } from "@/app/hooks/useTypedSelector"
import { useActions } from "@/app/hooks/useActions"

const OrderButton = () => {

    const [isOrdered, setIsOrdered] = useState(false)
    const { time, selectedVariant } = useTypedSelector(state => state.slice)
    const { setVariantOfTrip, setTime, setFromPlace } = useActions()

    const orderHandler = () => {
        setIsOrdered(true)
        setTimeout(() => setIsOrdered(false), 2000)
        setVariantOfTrip('1')
        setTime('')
    }

    const isActive = time && selectedVariant ? true : false
    const title = !isOrdered ? 'Order a taxi' : 'Successfully ordered'

    return (
        <div>
            <Button cb={orderHandler} isActive={isActive} title={title} />
        </div>
    )
}

export default OrderButton