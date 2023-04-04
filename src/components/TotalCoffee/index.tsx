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
import Americano from '../../assets/Americano.svg'
import { Minus, Plus, Trash } from 'phosphor-react'
import {ProductsContext} from '../../context/ProductsContext'
import { useContext } from 'react'

export function TotalCoffee() {
    const {productsCart, handleAmountCoffeeMinus, handleAmountCoffeePlus} = useContext(ProductsContext)
    return (
        <Container>
            <h2>Cafés selecionadas</h2>
            <ContainerRequests>
                <ContainerCoffee>
                    {productsCart.map((product: any, index: number) => (
                        <ContainerCoffeeSelected key={product.id}>
                            <img src={Americano} alt='' />
                            <CoffeeAmount>
                                <p>{product.name}</p>
                                <ContainerAmountAcions>
                                    <ContainerCoffeAmountFunctions>
                                        <Minus size={14} weight="bold" color='#8047F8' onClick={() => handleAmountCoffeeMinus(product.id)}/>
                                        <span>{product.amount}</span>
                                        <Plus size={14} weight="bold" color='#8047F8' onClick={() => handleAmountCoffeePlus(product.id)}/>
                                    </ContainerCoffeAmountFunctions>
                                    <ButtonDeleteCoffee>
                                        <Trash size={16} color='#8047F8' />
                                        <span>Remover</span>
                                    </ButtonDeleteCoffee>
                                </ContainerAmountAcions>
                            </CoffeeAmount>
                            <span>R$ 9,90</span>
                        </ContainerCoffeeSelected>
                    ))}
                </ContainerCoffee>
                <ContainerCheckoutProducts>
                    <ValueLine>
                        <p>Total de itens</p>
                        <span>R$ 29,70</span>
                    </ValueLine>
                    <ValueLine>
                        <p>Total da Entrega</p>
                        <span>R$ 3,50</span>
                    </ValueLine>
                    <ValueLine>
                        <h3>Total</h3>
                        <h3>R$ 33,20</h3>
                    </ValueLine>
                    <ButtonConfirmProduct><h3>Confirmar Pedido</h3></ButtonConfirmProduct>
                </ContainerCheckoutProducts>
            </ContainerRequests>
        </Container>
    )
}