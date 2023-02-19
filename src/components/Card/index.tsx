import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import Expresso from '../../assets/Expresso.svg'
import {
  AmountCoffees,
  Buy,
  CardInfo,
  ContainerCard,
  ContainerShoppinhCart,
  ImgCoffee,
} from './styles'

export function Card() {
  return (
    <ContainerCard>
      <ImgCoffee src={Expresso} alt="" />
      <CardInfo>
        <span>TRADICIONAL</span>
        <h2>Expresso Tradicional</h2>
        <p>O tradicional café feito com água quente e grãos moídos</p>
        <Buy>
          <span className="buy_value">R$9,90</span>
          <AmountCoffees>
            <Minus size={14} weight="bold" />
            <span>1</span>
            <Plus size={14} weight="bold" />
          </AmountCoffees>
          <ContainerShoppinhCart>
            <ShoppingCart size={22} weight="fill" color="white" />
          </ContainerShoppinhCart>
        </Buy>
      </CardInfo>
    </ContainerCard>
  )
}
