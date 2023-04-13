/* eslint-disable prettier/prettier */
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { ContainerPayment, ContainerSpan, ContainerPaySelection, CardPaySelection } from './styles'
import {FormaPayContent} from '../../context/FormPayContext'
import { useContext } from 'react'

export function Pay() {
    const {setFormPay, formPay} = useContext(FormaPayContent)
    function handlePay(e: any){
        if(e.target.name !== undefined){
            setFormPay({...formPay, payment: e.target.name})
        } else {
            alert("Forma de pagamento não localizada")
        }
    }

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
                <CardPaySelection name='credito'onClick={(e) => handlePay(e)}>
                    <CreditCard size={22} color='#8047F8' />
                    <p>CARTÃO DE CRÉDITO</p>
                </CardPaySelection>
                <CardPaySelection name='debito' onClick={(e) => handlePay(e)}>
                    <Bank size={22} color='#8047F8' />
                    <p>CARTÃO DE DÉBITO</p>
                </CardPaySelection>
                <CardPaySelection name='dinheiro' onClick={(e) => handlePay(e)}>
                    <Money size={22} color='#8047F8' />
                    <p>DINHEIRO</p>
                </CardPaySelection>
            </ContainerPaySelection>
        </ContainerPayment>
    )
}
