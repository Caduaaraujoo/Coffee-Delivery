import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import { ActionsContainer, Cart, Location, NavBarContainer } from './styles'

export function Header() {
  return (
    <NavBarContainer>
      <img src={Logo} alt="" />
      <ActionsContainer>
        <Location>
          <MapPin weight="fill" size={22} />
          <p>Mogi das Cruzes, SP</p>
        </Location>
        <Cart>
          <ShoppingCart weight="fill" size={22} />
        </Cart>
      </ActionsContainer>
    </NavBarContainer>
  )
}
