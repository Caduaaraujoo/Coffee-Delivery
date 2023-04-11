/* eslint-disable prettier/prettier */
import {
    Container,
    ContainerRequests,
    ContainerCoffee,
    ContainerCoffeeSelected,
    CoffeeAmount,
    ContainerAmountAcions,
    ContainerCoffeAmountFunctions,
    ButtonDeleteCoffee,
    ContainerCheckoutProducts,
    ValueLine,
    ButtonConfirmProduct
} from './styles'
import { Minus, Plus, Trash } from 'phosphor-react'
import {ProductsContext} from '../../context/ProductsContext'
import {ImagemContext} from '../../context/ImagemContext'
import { useContext, useEffect, useState } from 'react'
import {Coffe} from '../../interfaces/Coffe'

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
    const {imagens} = useContext(ImagemContext)
    const [imagemCart, setImagemCart] = useState()


    useEffect(() => {
        const totalProductsCart = productsCart.reduce(function(priceCurrent: PriceCoffee, priceCoffeesAtual: PriceCoffee){
            return priceCurrent + priceCoffeesAtual.value
        }, 0)
        const totalPurchase = totalProductsCart + priceDelivery
        setTotalPricePurchase(totalPurchase)
        setTotalPriceCoffeCart(totalProductsCart)
    }, [productsCart])

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
                <ContainerCheckoutProducts>
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
                    <ButtonConfirmProduct><h3>Confirmar Pedido</h3></ButtonConfirmProduct>
                </ContainerCheckoutProducts>
            </ContainerRequests>
        </Container>
    )
}