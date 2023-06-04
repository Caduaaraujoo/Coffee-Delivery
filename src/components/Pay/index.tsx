import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useContext } from 'react'
import { FormPayContent } from '../../context/FormPayContext'
import { CardPaySelection, ContainerInfoPayment, ContainerPayment, SectionPaymentSelected } from './styles'

export function Pay() {
    const { setFormPay, formPay, inputEmpty } = useContext(FormPayContent)
    function handlePay(e: any) {
        if (e.target.id !== undefined) {
            setFormPay({ ...formPay, payment: e.target.id })
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
                <CardPaySelection id='credito' onClick={(e) => handlePay(e)} className={inputEmpty.payment == "credito" ? "paymentSelected" : ""}>
                    <CreditCard size={22} color='#8047F8' id='credito' />
                    CARTÃO DE CRÉDITO
                </CardPaySelection>
                <CardPaySelection id='debito' onClick={(e) => handlePay(e)} className={inputEmpty.payment == "debito" ? "paymentSelected" : ""}>
                    <Bank size={22} color='#8047F8' id='debito' />
                    CARTÃO DE DÉBITO
                </CardPaySelection>
                <CardPaySelection id='dinheiro' onClick={(e) => handlePay(e)} className={inputEmpty.payment == "dinheiro" ? "paymentSelected" : ""}>
                    <Money size={22} color='#8047F8' id='dinheiro' />
                    DINHEIRO
                </CardPaySelection>
            </SectionPaymentSelected>
        </ContainerPayment>
    )
}
