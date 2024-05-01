import { useState } from "react"

export default function useOrder(){
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item:TMenu) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)

        if(itemExist){
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? {...item, quantity: orderItem.quantity + 1} : orderItem)
            setOrder(updatedOrder)
        }else {
            const nItem = {...item, quantity: 1}
            setOrder([...order, nItem])
        }
    }

    const removeItem = (id:TMenu['id']) =>{
        setOrder(order.filter(item => item.id !== id))
    }

    const placeOrder = () =>{
        setOrder([])
        setTip(0)
    }

    return {
        addItem,
        order,
        removeItem,
        tip,
        setTip,
        placeOrder
    }
}