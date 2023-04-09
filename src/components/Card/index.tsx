/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-expressions */
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'

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
import {ImagemContext} from '../../context/ImagemContext'

export function Card({
  title,
  name,
  description,
  amount,
  index,
  id,
  value,
  imgId
}: Coffe) {
  const [img, setImg] = useState()
  const {handleAmountPlus, handleAmountMinus, handleCartProducts} = useContext(ProductsContext)
  const {imagens} = useContext(ImagemContext)

  useEffect(() => {
    const imgCoffee = imagens.find((img: any) => img.id == imgId)
    setImg(imgCoffee.imagem.type)
  }, [])




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
