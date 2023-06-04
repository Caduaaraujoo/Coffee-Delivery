import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useContext } from 'react'
import ImgCover from "../../assets/Imagem.svg"
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
  const { productsEventsAmount } = useContext(ProductsContext)

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
        <div >
          <img src={ImgCover} alt="" />
        </div>
      </SectionIntro>
      <SectionProducts>
        <h2 className="text_coffe">Nossos cafés</h2>
        {productsEventsAmount.length > 1 && (
          <ContainerCards>
            {productsEventsAmount.map((product: any, index: number) => (
              <Card
                key={product.id}
                title={product.type}
                name={product.name}
                description={product.description}
                amount={product.amount}
                index={index}
                id={product.id}
                value={product.value}
                imgId={product.idImg}
              />
            ))}
          </ContainerCards>
        )}
      </SectionProducts>
    </ContainerHome>
  )
}
