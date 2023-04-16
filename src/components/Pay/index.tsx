import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useContext } from 'react'
import { FormPayContent } from '../../context/FormPayContext'
import { CardPaySelection, ContainerInfoPayment, ContainerPayment, SectionPaymentSelected } from './styles'

export function Pay() {
    const {setFormPay, formPay, inputEmpty} = useContext(FormPayContent)
    function handlePay(e: any){
        if(e.target.name !== undefined){
            setFormPay({...formPay, payment: e.target.name})
        } else {
            alert("Forma de pagamento não localizada")
        }
    }

    return (
        <ContainerPayment className={inputEmpty.payment == "" ? "inputAlert" : ""}>
            <ContainerInfoPayment>
                <CurrencyDollar size={32} color='#8047F8' />
                <section>
                    <h3>Pagamento</h3>
                    <p>O pagamento é feito na entrega. Escolha a forma que desejar pagar.</p>
                </section>
            </ContainerInfoPayment>
            <SectionPaymentSelected >
                <CardPaySelection name='credito'onClick={(e) => handlePay(e)} className={inputEmpty.payment == "credito" ? "paymentSelected" : ""}>
                    <CreditCard size={22} color='#8047F8' />
                    <p>CARTÃO DE CRÉDITO</p>
                </CardPaySelection>
                <CardPaySelection name='debito' onClick={(e) => handlePay(e)} className={inputEmpty.payment == "debito" ? "paymentSelected" : ""}>
                    <Bank size={22} color='#8047F8' />
                    <p>CARTÃO DE DÉBITO</p>
                </CardPaySelection>
                <CardPaySelection name='dinheiro' onClick={(e) => handlePay(e)} className={inputEmpty.payment == "dinheiro" ? "paymentSelected" : ""}>
                    <Money size={22} color='#8047F8' />
                    <p>DINHEIRO</p>
                </CardPaySelection>
            </SectionPaymentSelected>
        </ContainerPayment>
    )
}
