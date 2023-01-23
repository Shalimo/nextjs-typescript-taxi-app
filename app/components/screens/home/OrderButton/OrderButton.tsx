import Button from "@/app/components/ui/button/Button"
import { useState } from "react"

const OrderButton = () => {

    const [isOrdered, setIsOrdered] = useState(false)

    const orderHandler = () => {
        setIsOrdered(true)
        setTimeout(() => setIsOrdered(false), 2000)
    }

    return (
        <div>
            <Button cb={orderHandler} isActive={false} title={!isOrdered ? 'Order a taxi' : 'Successfully ordered'} />
        </div>
    )
}

export default OrderButton