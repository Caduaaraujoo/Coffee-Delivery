/* eslint-disable prettier/prettier */
import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormaPayContent } from '../../context/FormPayContext'
import { ImagemContext } from '../../context/ImagemContext'
import { ProductsContext } from '../../context/ProductsContext'
import { Coffe } from '../../interfaces/Coffe'
import {
    ButtonConfirmProduct,
    ButtonDeleteCoffee,
    CoffeeAmount,
    Container,
    ContainerAmountAcions,
    ContainerCheckoutProducts,
    ContainerCoffeAmountFunctions,
    ContainerCoffee,
    ContainerCoffeeSelected,
    ContainerRequests,
    ValueLine
} from './styles'

interface PriceCoffee {
    priceCurrent: number,
    priceCoffeesAtual: {
        value: number
    }
}


export function TotalCoffee() {
    const {productsCart, handleAmountPlusPay, handleAmountMinusPay, handleRemoveCoffee} = useContext(ProductsContext)
    const [totalPriceCoffeeCart, setTotalPriceCoffeCart] = useState<number>()
    const [priceDelivery, setPriceDeleviry] = useState<number>(3.50)
    const [totalPricePurchase, setTotalPricePurchase] = useState<number>()
    const [btnDisabled, setBtnDisabled] = useState(true)
    const {imagens} = useContext(ImagemContext)
    const [imagemCart, setImagemCart] = useState()
    const {formPay} = useContext(FormaPayContent)
    const navigate = useNavigate()


    useEffect(() => {
        if(productsCart.length > 0){
            setBtnDisabled(false)
        }
        const totalProductsCart = productsCart.reduce(function(priceCurrent: PriceCoffee, priceCoffeesAtual: PriceCoffee){
            return priceCurrent + priceCoffeesAtual.value
        }, 0)
        const totalPurchase = totalProductsCart + priceDelivery
        setTotalPricePurchase(totalPurchase)
        setTotalPriceCoffeCart(totalProductsCart)
    }, [productsCart])

    function handleSubmit(e: any){
        let emptyField = false
        e.preventDefault()
        Object.keys(formPay).forEach((key) => {
            if(key !== 'complement' && formPay[key] == '' && !emptyField){
                return emptyField = true
            } else {
                return;
            }
        })

        if(!emptyField){
            return navigate('/sucess')
        } else {
            alert("Todos os campos são obrigatórios")
        }
    }

    return (
        <Container>
            <h2>Cafés selecionadas</h2>
            <ContainerRequests>
                <ContainerCoffee>
                    {productsCart.map((product: Coffe) => (
                        <ContainerCoffeeSelected key={product.id}>
                            <img src={product.img} alt='' />
                            <CoffeeAmount>
                                <p>{product.name}</p>
                                <ContainerAmountAcions>
                                    <ContainerCoffeAmountFunctions>
                                        <Minus size={14} weight="bold" color='#8047F8' onClick={() => handleAmountMinusPay(product.id)}/>
                                        <span>{product.amount}</span>
                                        <Plus size={14} weight="bold" color='#8047F8' onClick={() => handleAmountPlusPay(product.id)}/>
                                    </ContainerCoffeAmountFunctions>
                                    <ButtonDeleteCoffee onClick={() => handleRemoveCoffee(product.id)}>
                                        <Trash size={16} color='#8047F8' />
                                        <span>Remover</span>
                                    </ButtonDeleteCoffee>
                                </ContainerAmountAcions>
                            </CoffeeAmount>
                            <span>{product.value}</span>
                        </ContainerCoffeeSelected>
                    ))}
                </ContainerCoffee>
                <ContainerCheckoutProducts onSubmit={handleSubmit}>
                    <ValueLine>
                        <p>Total de itens</p>
                        <span>R$ {totalPriceCoffeeCart?.toFixed(2)}</span>
                    </ValueLine>
                    <ValueLine>
                        <p>Total da Entrega</p>
                        <span>R$ {priceDelivery.toFixed(2)}</span>
                    </ValueLine>
                    <ValueLine>
                        <h3>Total</h3>
                        <h3>R$ {totalPricePurchase?.toFixed(2)}</h3>
                    </ValueLine>
                    <ButtonConfirmProduct disabled={btnDisabled ? true: false}><h3>Confirmar Pedido</h3></ButtonConfirmProduct>
                </ContainerCheckoutProducts>
            </ContainerRequests>
        </Container>
    )
}