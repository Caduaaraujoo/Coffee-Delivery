/* eslint-disable prettier/prettier */
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import {ImagemContext} from './ImagemContext'

export const ProductsContext = createContext({} as any)
import { Coffe, BasicInfoCoffe } from '../interfaces/Coffe'

interface ProductsContextProviderProps {
    children: ReactNode
}

export function ProductsContextProvider({ children }: ProductsContextProviderProps) {
    const {imagens} = useContext(ImagemContext)
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

    function handleTratamentJson(json: any) {handleCartProducts
        const repeatArray = arrayProductsOriginal.find(array => array.id == json[0].id)

        if (!repeatArray) {
            for (let i = 0; i < json.length; i++) {
                arrayProductsOriginal.push({ id: json[i].id, price: json[i].value, amount: json[i].amount })
            }
        } else {
            return;
        }
        setBasicIndoCoffeOriginal(arrayProductsOriginal)
    }

    function handleAmountPlus(id: number) {
        const productNewAmountPlus = productsEventsAmount.find(product => product.id == id)
        const { price } = basicInfoCoffeOriginal?.find(info => info.id == id)
        if (productNewAmountPlus) {
            const indexProductNewAmountPlus = productsEventsAmount.indexOf(productNewAmountPlus)
            productNewAmountPlus.amount++

            const total = productNewAmountPlus.value + price
            
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
        const { price } = basicInfoCoffeOriginal?.find(info => info.id == id)
        if (productNewAmountMinus && productNewAmountMinus.amount > 1) {
            const indexProductNewAmountMinus = productsEventsAmount.indexOf(productNewAmountMinus)
            productNewAmountMinus.amount--


            const total = productNewAmountMinus.value - price
            
            productNewAmountMinus.value = parseFloat(total.toFixed(2))

            setProductsEventsAmount((state) => {
                const coffes = state.slice(0)
                coffes.splice(indexProductNewAmountMinus, 1, productNewAmountMinus)
                return coffes
            })
        }
    }

    function handleAmountPlusPay(id: number){
        const productNewAmountPlus = productsCart.find(product => product.id == id)
        const { price } = basicInfoCoffeOriginal?.find(info => info.id == id)
        if (productNewAmountPlus) {
            const indexProductNewAmountPlus = productsEventsAmount.indexOf(productNewAmountPlus)
            productNewAmountPlus.amount++

            const total = productNewAmountPlus.value + price
            
            productNewAmountPlus.value = parseFloat(total.toFixed(2))
            setProductsCart((state) => {
                const coffes = state.slice(0)
                coffes.splice(indexProductNewAmountPlus, 1, productNewAmountPlus)
                return coffes
            })
        }
        
    }

    function handleAmountMinusPay(id: number){
        const productNewAmountMinus = productsCart.find(product => product.id == id)
        const { price } = basicInfoCoffeOriginal?.find(info => info.id == id)
        if (productNewAmountMinus && productNewAmountMinus.amount > 1) {
            const indexProductNewAmountMinus = productsCart.indexOf(productNewAmountMinus)
            productNewAmountMinus.amount--


            const total = productNewAmountMinus.value - price
            
            productNewAmountMinus.value = parseFloat(total.toFixed(2))

            setProductsCart((state) => {
                const coffes = state.slice(0)
                coffes.splice(indexProductNewAmountMinus, 1, productNewAmountMinus)
                return coffes
            })
        }
    }

    function handleCartProducts(id: number) {
        const addImagem = imagens.find((img: any) => img.id == id)
        const { price } = basicInfoCoffeOriginal?.find(info => info.id == id)
        const productAddCart = productsEventsAmount.find(product => product.id == id)
        const productAddCartRepeat = productsCart.find(product => product.id == id)
        
        if (!productAddCartRepeat && productAddCart) {
            productAddCart.img = addImagem.imagem.type

            setProductsCart((state) => [...state, productAddCart])

        } else if(productAddCartRepeat && productAddCart){

            const amountProductRepeat = productAddCartRepeat.amount + productAddCart?.amount
            productAddCartRepeat.amount = amountProductRepeat
            const indexProductNewAmountPlus = productsCart.indexOf(productAddCartRepeat)

            const total = productAddCartRepeat.value + price
            
            productAddCartRepeat.value = parseFloat(total.toFixed(2))
            setProductsCart((state) => {
                const coffes = state.slice(0)
                coffes.splice(indexProductNewAmountPlus, 1, productAddCartRepeat)
                return coffes
            })
        } else {
            return;
        }

        const amountInitial = []
        for(let i = 0; i< productsEventsAmount.length; i++){
            amountInitial.push({...productsEventsAmount[i], value: price, amount: 1})
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
