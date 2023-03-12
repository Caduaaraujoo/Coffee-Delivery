/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import ImgCapa from '../../assets/ImgCapa.svg'
import { Card } from '../../components/Card'
import { ProductsContext } from '../../context/ProductsContext'
import {
  BenefitLine,
  Benefits,
  ContainerBenefits,
  ContainerCards,
  ContainerHome,
  ContainerImgBenefitsCart,
  ContainerImgBenefitsCoffee,
  ContainerImgBenefitsPackage,
  ContainerImgBenefitsTimer,
  Infos,
  PresentationCoffe,
  SectionIntro,
  SectionProducts,
} from './styles'

export function Home() {
  const { products, setProducts } = useContext(ProductsContext)
  useEffect(() => {
    fetch('http://localhost:3000/produtos')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        setProducts(json)
      })
  }, [])

  return (
    <ContainerHome>
      <SectionIntro>
        <PresentationCoffe>
          <Infos>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Infos>
          <ContainerBenefits>
            <Benefits>
              <BenefitLine>
                <ContainerImgBenefitsCart>
                  <ShoppingCart size={16} weight="fill" />
                </ContainerImgBenefitsCart>
                <p>Compra simples e segura</p>
              </BenefitLine>
              <BenefitLine>
                <ContainerImgBenefitsTimer>
                  <Timer size={16} weight="fill" />
                </ContainerImgBenefitsTimer>
                <p>Entrega rápida e rastreada</p>
              </BenefitLine>
            </Benefits>
            <Benefits>
              <BenefitLine>
                <ContainerImgBenefitsPackage>
                  <Package size={16} weight="fill" />
                </ContainerImgBenefitsPackage>
                <p>Embalagem mantém o café intacto</p>
              </BenefitLine>
              <BenefitLine>
                <ContainerImgBenefitsCoffee>
                  <Coffee size={16} weight="fill" />
                </ContainerImgBenefitsCoffee>
                <p>o café chega fresquinho até você</p>
              </BenefitLine>
            </Benefits>
          </ContainerBenefits>
        </PresentationCoffe>
        <div>
          <img src={ImgCapa} alt="" />
        </div>
      </SectionIntro>
      <SectionProducts>
        <h2 className="text_coffe">Nossos cafés</h2>
        {products.length > 1 && (
          <ContainerCards>
            {products.map((product: any, index: number) => (
              <Card
                key={product.id}
                title={product.type[0]}
                name={product.name}
                description={product.description}
                value={product.value}
                amount={product.amount}
                index={index}
              />
            ))}
          </ContainerCards>
        )}
      </SectionProducts>
    </ContainerHome>
  )
}
