
interface TMenu {
    id: number
    name: string,
    price: number
}

type OrderItem = TMenu &{
    quantity: number
}