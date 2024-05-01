import { formatCurrency } from "../helpers"

interface OrderContentProps {
    order: OrderItem[]
    removeItem: (item:number) => void
}

export const OrderContent = ({
    order, 
    removeItem
}:OrderContentProps) => {
  return (
    <div>
       <h2 className='font-black text-4xl mt-10'>Consumo</h2> 
       <div className="space-y-3 mt-5">
       {
        order.map( or =>(
            <div className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b" key={or.id}>
                <div>
                <p className="text-lg">
                    {or.name} - {formatCurrency(or.price)}
                </p>
                <p className="font-black">
                   Cantidad: {or.quantity} - {formatCurrency(or.price*or.quantity)}
                </p>
                </div>

                <button className="bg-red-600 h-8 w-8 rounded-full text-white font-bold" onClick={()=>removeItem(or.id)}>
                    X
                </button>
            </div>
        ))
       }
       </div>
    </div>
  )
}
