/* eslint-disable prettier/prettier */
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { ContainerPayment, ContainerSpan, ContainerPaySelection, CardPaySelection } from './styles'

export function Pay() {
    return (
        <ContainerPayment>
            <ContainerSpan>
                <CurrencyDollar size={32} color='#8047F8' />
                <div>
                    <h3>Pagamento</h3>
                    <p>O pagamento é feito na entrega. Escolha a forma que desejar pagar.</p>
                </div>
            </ContainerSpan>
            <ContainerPaySelection>
                <CardPaySelection>
                    <CreditCard size={22} color='#8047F8' />
                    <p>CARTÃO DE CRÉDITO</p>
                </CardPaySelection>
                <CardPaySelection>
                    <Bank size={22} color='#8047F8' />
                    <p>CARTÃO DE DÉBITO</p>
                </CardPaySelection>
                <CardPaySelection>
                    <Money size={22} color='#8047F8' />
                    <p>DINHEIRO</p>
                </CardPaySelection>
            </ContainerPaySelection>
        </ContainerPayment>
    )
}
