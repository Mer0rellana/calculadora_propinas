import { useMemo } from "react"
import { formatCurrency } from "../helpers"

interface OrderTotalsProps {
    order: OrderItem[]
    tip: number
    placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder}:OrderTotalsProps){

    const subtotal = useMemo(() => order.reduce((total, item)=> total +(item.quantity*item.price),0), [order])

    const tips = useMemo(() => subtotal * tip, [tip, order])

    const total = useMemo(() => subtotal + tips, [tip, order])

    return(
        <div>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">
                    Totales y propina:
                </h2>
                <p>
                    Subtotal a pagar: {''}
                    <span className="font-bold">
                         {formatCurrency(subtotal)}
                    </span>
                </p>
                <p>
                    Propina: {''}
                    <span className="font-bold">
                         {formatCurrency(tips)}
                    </span>
                </p>
                <p>
                    Total a pagar: {''}
                    <span className="font-bold">
                         {formatCurrency(total)}
                    </span>
                </p>
            </div>
            <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10" onClick={()=>placeOrder} disabled={total === 0}>
                Guardar orden
            </button>
        </div>
    )
}