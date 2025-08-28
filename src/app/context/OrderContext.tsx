"use client"
import { createContext, useContext, useState, ReactNode } from "react"

type Customer = {
    name: string,
    phone: string,
    email: string,
    streetName: string,
    streetNumber: number,
    flatNumber: number,
    floorNumber?: number,
    staircase?: number,
    promoCode?: string,
    message?: string,
    payment?: string,
    change?: string
}

type OrderContextType = {
    customer: Customer,
    setCustomer: (data: Partial<Customer>) => void
}

const OrderContext = createContext<OrderContextType | undefined>(undefined)

export function OrderProvider({children}: {children: ReactNode}) {
    const [customer, setCustomerState] = useState<Customer>({
        name: "",
        phone: " ",
        email: "",
        streetName: "",
        streetNumber: 0,
        flatNumber: 0,
        floorNumber: 0,
        staircase: 0,
        promoCode: "",
        message: "",
        payment: "",
        change: "50"
    })

    const setCustomer = (data: Partial<Customer>) => {
        setCustomerState(prev => ({...prev, ...data}))
    }
    return (
        <OrderContext.Provider value={{customer, setCustomer}}>
            { children }
        </OrderContext.Provider>
    )
}

export function useOrder() {
    const context = useContext(OrderContext)
    if(!context) throw new Error("UserOrder must be in inside OrderProvider")
    return context;
}