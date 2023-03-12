/* eslint-disable prettier/prettier */
import { createContext, ReactNode, useState } from 'react'

export const ProductsContext = createContext({} as any)

interface ProductsContextProviderProps {
    children: ReactNode
}

export function ProductsContextProvider({ children }: ProductsContextProviderProps) {
    const [products, setProducts] = useState([{}])
    const [amountProductsCart, setAmountProductsCart] = useState<number>(0)
    const newAmountCoffee = [...products];

    function handleAmountCoffeePlus(index: number) {
        newAmountCoffee[index].amount++
        setProducts(newAmountCoffee)
    }

    function handleAmountCoffeeMinus(index: number) {
        if (newAmountCoffee[index].amount > 1) {
            newAmountCoffee[index].amount--
            setProducts(newAmountCoffee)
        }
    }

    function handleAddCart(index: number) {
        setAmountProductsCart((state) => state + products[index].amount)
    }


    return (
        <ProductsContext.Provider value={{
            products,
            amountProductsCart,
            handleAmountCoffeePlus,
            handleAmountCoffeeMinus,
            handleAddCart,
            setProducts,
        }}>
            {children}
        </ProductsContext.Provider>
    )
}
