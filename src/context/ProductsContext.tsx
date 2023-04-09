/* eslint-disable prettier/prettier */
import { createContext, ReactNode, useEffect, useState } from 'react'

export const ProductsContext = createContext({} as any)
import { Coffe, BasicInfoCoffe } from '../interfaces/Coffe'

interface ProductsContextProviderProps {
    children: ReactNode
}

export function ProductsContextProvider({ children }: ProductsContextProviderProps) {
    const [productsEventsAmount, setProductsEventsAmount] = useState<Coffe[]>([])
    const [productsCart, setProductsCart] = useState<Coffe[]>([])
    const arrayProductsOriginal: BasicInfoCoffe[] = []
    const [basicInfoCoffeOriginal, setBasicIndoCoffeOriginal] = useState<BasicInfoCoffe[]>()


    useEffect(() => {
        fetch('http://localhost:3000/produtos')
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                handleTratamentJson(json)
                setProductsEventsAmount(json)
            })
    }, [])

    function handleTratamentJson(json: any) {
        const repeatArray = arrayProductsOriginal.find(array => array.id == json[0].id)

        if (!repeatArray) {
            for (let i = 0; i < json.length; i++) {
                arrayProductsOriginal.push({ id: json[i].id, prince: json[i].value, amount: json[i].amount })
            }
        } else {
            return;
        }
        setBasicIndoCoffeOriginal(arrayProductsOriginal)
    }

    function handleAmountPlus(id: number) {
        const productNewAmountPlus = productsEventsAmount.find(product => product.id == id)
        const { prince } = basicInfoCoffeOriginal?.find(info => info.id == id)
        if (productNewAmountPlus) {
            const indexProductNewAmountPlus = productsEventsAmount.indexOf(productNewAmountPlus)
            productNewAmountPlus.amount++

            const total = productNewAmountPlus.value + prince
            
            productNewAmountPlus.value = parseFloat(total.toFixed(2))
            setProductsEventsAmount((state) => {
                const coffes = state.slice(0)
                coffes.splice(indexProductNewAmountPlus, 1, productNewAmountPlus)
                return coffes
            })
        }
        //aumentar a quantidade de cafes selecionados
    }

    function handleAmountMinus(id: number) {
        //diminuir a quantidade de cafes selecionados
        const productNewAmountMinus = productsEventsAmount.find(product => product.id == id)
        const { prince } = basicInfoCoffeOriginal?.find(info => info.id == id)
        if (productNewAmountMinus && productNewAmountMinus.amount > 1) {
            const indexProductNewAmountMinus = productsEventsAmount.indexOf(productNewAmountMinus)
            productNewAmountMinus.amount--


            const total = productNewAmountMinus.value - prince
            
            productNewAmountMinus.value = parseFloat(total.toFixed(2))

            setProductsEventsAmount((state) => {
                const coffes = state.slice(0)
                coffes.splice(indexProductNewAmountMinus, 1, productNewAmountMinus)
                return coffes
            })
        }
    }

    function handleAmountPlusPay(id: number){
        console.log(id)
    }

    function handleAmountMinusPay(id: number){
        console.log(id)
    }

    function handleCartProducts(id: number) {
        //adicionar oshandleAmountMinusPayar do mesmo local onde o handleAmountPlus e handleAmountMinus irão efetuar as mudanças*
        const { prince } = basicInfoCoffeOriginal?.find(info => info.id == id)
        const productAddCart = productsEventsAmount.find(product => product.id == id)
        const productAddCartRepeat = productsCart.find(product => product.id == id)
        if (!productAddCartRepeat && productAddCart) {
            setProductsCart((state) => [...state, productAddCart])
        } else {
            return;
            // const total = productAddCartRepeat.amount + productAddCart.amount
            // productAddCartRepeat.amount = total
        }
        const amountInitial = []
       for(let i = 0; i< productsEventsAmount.length; i++){
            amountInitial.push({...productsEventsAmount[i], value: prince, amount: 1})
       }
    setProductsEventsAmount(amountInitial)
    }

    function handleRemoveCoffee(id: number) {
        setProductsCart(productsCart.filter(product => product.id !== id))
    }

    return (
        <ProductsContext.Provider value={{
            productsCart,
            productsEventsAmount,
            handleAmountPlus,
            handleAmountMinus,
            handleCartProducts,
            handleRemoveCoffee,
            handleAmountPlusPay,
            handleAmountMinusPay
        }}>
            {children}
        </ProductsContext.Provider>
    )
}
