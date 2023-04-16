import styled from 'styled-components'

export const ContainerHome = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 32.9rem;
  padding: 6rem 9.7rem;
  background: rgb(251, 233, 255);
  background: radial-gradient(
    circle,
    rgba(251, 233, 255, 0.9906163148853291) 0%,
    rgba(250, 250, 250, 1) 67%
  );
`

export const SectionIntro = styled.section`
  display: flex;
  gap: 3.3rem;
  margin-bottom: 3rem;
`
export const PresentationCoffe = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const Infos = styled.header`
  p {
    font-size: 20px;
    overflow-wrap: break-word;
    color: ${(props) => props.theme.base_subtitle};
  }
`
export const ContainerBenefits = styled.section`
  display: flex;
  gap: 1.2rem;
  width: 34.3rem;
  height: 5rem;
`

export const Benefits = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const BenefitLine = styled.section`
  min-width: 8rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
`

const ContainerImgBenefitsCommon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 50%;
  color: ${(props) => props.theme.white};
`

export const ContainerImgBenefitsCart = styled(ContainerImgBenefitsCommon)`
  background-color: ${(props) => props.theme.yellow_dark};
`
export const ContainerImgBenefitsTimer = styled(ContainerImgBenefitsCommon)`
  background-color: ${(props) => props.theme.yellow};
`
export const ContainerImgBenefitsPackage = styled(ContainerImgBenefitsCommon)`
  background-color: ${(props) => props.theme.base_text};
`
export const ContainerImgBenefitsCoffee = styled(ContainerImgBenefitsCommon)`
  background-color: ${(props) => props.theme.purple};
`

export const SectionProducts = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .text_coffe {
    margin: 2rem 0 3.2rem 0;
  }
`

export const ContainerCards = styled.section`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  margin-bottom: 2.4rem;
`
