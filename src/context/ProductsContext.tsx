/* eslint-disable prettier/prettier */
import { createContext, ReactNode, useState } from 'react'

export const ProductsContext = createContext({} as any)

interface ProductsContextProviderProps {
    children: ReactNode
}

export function ProductsContextProvider({ children }: ProductsContextProviderProps) {
    const [products, setProducts] = useState([{}])
    const [amountProductsCart, setAmountProductsCart] = useState<number>(0)
    const [productsCart, setProductsCart] = useState([])

    function handleAmountCoffeePlus(id: number) {
        const amountCoffeePlus = products.find((product) => product.id == id)
        amountCoffeePlus.amount++
        const indexCoffeplus = products.indexOf(amountCoffeePlus)
        setProducts((state) => {
            const coffes = state.slice(0)
            coffes.splice(indexCoffeplus, 1, amountCoffeePlus)
            return coffes
        })
    }

    function handleAmountCoffeeMinus(id: number) {
        const amountCoffeeMinus = products.find((product) => product.id == id)
        if (amountCoffeeMinus.amount > 1) {
            amountCoffeeMinus.amount--
            const indexCoffeMinus = products.indexOf(amountCoffeeMinus)
            setProducts((state) => {
                const coffes = state.slice(0)
                coffes.splice(indexCoffeMinus, 1, amountCoffeeMinus)
                return coffes
            })
        }
    }
    
    function handleAddCart(index: number) {
        setAmountProductsCart((state) => state + products[index].amount)
        setProductsCart((state) => [...state, products[index]])
    }


    return (
        <ProductsContext.Provider value={{
            products,
            productsCart,
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
