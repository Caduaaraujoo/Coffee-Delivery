import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import { ActionsContainer, Cart, Location, NavBarContainer } from './styles'
import { ProductsContext } from '../../context/ProductsContext'
import { useContext } from 'react'
import {NavLink} from 'react-router-dom'

export function Header() {
  const { amountProductsCart } = useContext(ProductsContext)
  return (
    <NavBarContainer>
      <NavLink to="/" title='Home'>
        <img src={Logo} alt="" />
      </NavLink>
      <ActionsContainer>
        <Location>
          <MapPin weight="fill" size={22} />
          <p>Mogi das Cruzes, SP</p>
        </Location>
        <Cart>
          <NavLink to="/checkout" title='Checkout'>
            <ShoppingCart weight="fill" size={22} />
          </NavLink>
          {amountProductsCart >= 1 && <span>{amountProductsCart}</span>}
        </Cart>
      </ActionsContainer>
    </NavBarContainer>
  )
}
