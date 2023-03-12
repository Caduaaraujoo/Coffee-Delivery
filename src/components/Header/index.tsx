import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import { ActionsContainer, Cart, Location, NavBarContainer } from './styles'
import { ProductsContext } from '../../context/ProductsContext'
import { useContext } from 'react'

export function Header() {
  const { amountProductsCart } = useContext(ProductsContext)
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
          {amountProductsCart >= 1 && <span>{amountProductsCart}</span>}
        </Cart>
      </ActionsContainer>
    </NavBarContainer>
  )
}
