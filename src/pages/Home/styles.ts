import styled from 'styled-components'

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const SectionIntro = styled.section`
  display: flex;
  gap: 56px;
`
export const PresentationCoffe = styled.section`
  display: flex;
  flex-direction: column;
  gap: 66px;
`

export const Infos = styled.div`
  width: 35.6rem;
  height: 11.6rem;
  p: {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    overflow-wrap: break-word;
    color: ${(props) => props.theme.base_subtitle};
  }
`
export const ContainerBenefits = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 34.3rem;
  height: 5rem;
`

export const Benefits = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
`

export const ConatinerImgBenefits = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow_dark};
`
