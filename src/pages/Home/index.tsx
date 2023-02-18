import {
  Benefits,
  ConatinerImgBenefits,
  ContainerBenefits,
  ContainerHome,
  Infos,
  PresentationCoffe,
  SectionIntro,
} from './styles'
import ImgCapa from '../../assets/ImgCapa.svg'
import { ShoppingCart } from 'phosphor-react'

export function Home() {
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
              <div>
                <ConatinerImgBenefits>
                  <ShoppingCart size={16} weight="fill" />
                </ConatinerImgBenefits>
                <p>Compra simples e segura</p>
              </div>
              <span>Imagem, Comrpa simples e segura</span>
            </Benefits>
            <Benefits>
              <span>Imagem, Comrpa simples e segura</span>
              <span>Imagem, Comrpa simples e segura</span>
            </Benefits>
          </ContainerBenefits>
        </PresentationCoffe>
        <div>
          <img src={ImgCapa} alt="" />
        </div>
      </SectionIntro>
    </ContainerHome>
  )
}
