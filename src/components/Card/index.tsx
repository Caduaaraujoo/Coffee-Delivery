/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-expressions */
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import Americano from '../../assets/Americano.svg'
import Arabe from '../../assets/Arabe.svg'
import CafeComLeite from '../../assets/CafeComLeite.svg'
import CafeGelado from '../../assets/CafeGelado.svg'
import Capuccino from '../../assets/Capuccino.svg'
import ChocolateQuente from '../../assets/ChocolateQuente.svg'
import Cubano from '../../assets/Cubano.svg'
import Expresso from '../../assets/Expresso.svg'
import ExpressoCremoso from '../../assets/ExpressoCremoso.svg'
import Havaiano from '../../assets/Havaiano.svg'
import Irlandes from '../../assets/Irlandes.svg'
import Latte from '../../assets/Latte.svg'
import Macchiato from '../../assets/Macchiato.svg'
import Mochaccino from '../../assets/Mochaccino.svg'
import { Coffe } from '../../interfaces/Coffe'
import {
  AmountCoffees,
  Buy,
  CardInfo,
  ContainerCard,
  ContainerShoppinhCart,
  ImgCoffee,
} from './styles'
import {ProductsContext} from '../../context/ProductsContext'

export function Card({
  title,
  name,
  description,
  amount,
  index,
  id,
  value
}: Coffe) {
  const [img, setImg] = useState()
  const {handleAmountPlus, handleAmountMinus, handleCartProducts} = useContext(ProductsContext)

  useEffect(() => {
    const imagem = imagens[index].type
    setImg(imagem)
  }, [])


  const imagens = [
    <Expresso />,
    <Americano />,
    <ExpressoCremoso />,
    <CafeGelado />,
    <CafeComLeite />,
    <Latte />,
    <Capuccino />,
    <Macchiato />,
    <Mochaccino />,
    <ChocolateQuente />,
    <Cubano />,
    <Havaiano />,
    <Arabe />,
    <Irlandes />,
  ]

  return (
    <ContainerCard>
      <ImgCoffee src={img} alt="" />
      <CardInfo>
        <span>{title}</span>
        <h2>{name}</h2>
        <p>{description}</p>
        <Buy>
          <span className="buy_value">R${value}</span>
          <AmountCoffees>
            <Minus
              size={14}
              weight="bold"
              onClick={() => handleAmountMinus(id)}
            />
            <span>{amount}</span>
            <Plus
              size={14}
              weight="bold"
              onClick={() => handleAmountPlus(id)}
            />
          </AmountCoffees>
          <ContainerShoppinhCart>
            <ShoppingCart
              size={22}
              weight="fill"
              color="white"
              onClick={() => handleCartProducts(id)}
            />
          </ContainerShoppinhCart>
        </Buy>
      </CardInfo>
    </ContainerCard>
  )
}
