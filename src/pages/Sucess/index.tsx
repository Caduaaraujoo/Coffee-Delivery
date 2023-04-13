import {ContainerDelivery, ContainerSucess, BoxDelivery, ImgDelivery, ContainerInfoDelivery} from './styles'
import Delivery from '../../assets/delivery.svg'

export function Sucess() {
  return (
    <ContainerSucess>
      <ContainerDelivery>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <BoxDelivery>
          <ContainerInfoDelivery>
            <p>Entra em Rua João Daniel, 102 Farrapos-Porto Alegre, RS</p>
            <p>Previsão de entraga</p>
            <p>Pagamento na entrega</p>
            </ContainerInfoDelivery>
        </BoxDelivery>
      </ContainerDelivery>
      <ImgDelivery src={Delivery}/>
    </ContainerSucess>
  )
}
