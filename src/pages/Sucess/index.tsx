import {ContainerDelivery, ContainerSucess, BoxDelivery, ImgDelivery, ContainerInfoDelivery, CircleContainerIconAdress, CircleContainerIconTimer, CircleContainerIconPayment, ContainerLineInfo, LineCollum} from './styles'
import Delivery from '../../assets/delivery.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {FormPayContent} from '../../context/FormPayContext'
import { useContext } from 'react'

export function Sucess() {
  const {formPay} = useContext(FormPayContent)

  return (
    <ContainerSucess>
      <ContainerDelivery>
        <h1>Uhu! Pedido confirmado</h1>
        <h4>Agora é só aguardar que logo o café chegará até você</h4>
        <BoxDelivery>
          <ContainerInfoDelivery>
            <ContainerLineInfo>
              <CircleContainerIconAdress>
                <MapPin size={16} color='white' weight='fill'/>
              </CircleContainerIconAdress>
              <LineCollum>
                <p>Entrega em <span style={{fontWeight: 'bold'}}>Rua {formPay.road}, {formPay.numberHome}</span> {formPay.address} - {formPay.city}, {formPay.uf}</p>
              </LineCollum>
            </ContainerLineInfo>
            <ContainerLineInfo>
              <CircleContainerIconTimer>
                <Timer size={16} weight='fill' color='white'/>
              </CircleContainerIconTimer>
              <LineCollum>
                <p>Previsão de entraga</p>
                <p style={{fontWeight: 'bold'}}>20 min - 30 min</p>
              </LineCollum>
            </ContainerLineInfo>
            <ContainerLineInfo>
              <CircleContainerIconPayment>
                <CurrencyDollar size={16} weight='fill' color='white'/>
              </CircleContainerIconPayment>
              <LineCollum>
                <p>Pagamento na entrega</p>
                {formPay.payment == "debito" || formPay.payment == "credito"
                  ?
                  <p style={{fontWeight: 'bold'}}> Cartão de {formPay.payment}</p>
                  :
                  <p style={{fontWeight: 'bold'}}> Dinheiro</p>
                }
              </LineCollum>
            </ContainerLineInfo>
          </ContainerInfoDelivery>
        </BoxDelivery>
      </ContainerDelivery>
      <ImgDelivery src={Delivery}/>
    </ContainerSucess>
  )
}
