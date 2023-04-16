import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import { ActionsContainer, Cart, Location, NavBarContainer, AmountCoffee } from './styles'
import { useContext, useEffect, useState } from 'react'
import {ProductsContext} from '../../context/ProductsContext'
import React from 'react'

export function Header() {
  const [amountCoffeCart, setAmountCoffeCart] = useState<number>(0)
  const {productsCart} = useContext(ProductsContext)
    
  useEffect(() => {
    if(productsCart.lenght == 1){
      setAmountCoffeCart(productsCart[0].amount)
    } else {
      const totalCoffees = productsCart.reduce(function(soma: number, currentCoffee: number){
          return soma + currentCoffee.amount
      }, 0)
      setAmountCoffeCart(totalCoffees)

    }
  }, [productsCart])
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
            <ShoppingCart weight="fill" size={22} color='#C47F17'/>
          </NavLink>
          {amountCoffeCart >=1 && <AmountCoffee>{amountCoffeCart}</AmountCoffee>}
        </Cart>
      </ActionsContainer>
    </NavBarContainer>
  )
}
