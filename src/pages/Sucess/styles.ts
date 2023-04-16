import styled from "styled-components";

export const ContainerSucess = styled.div`
    display: flex;
    gap: 100px;
    width: 100%;
    height: 32.9rem;
    padding: 100px 160px;
`
export const ContainerDelivery = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const BoxDelivery = styled.div`
    width: 526px;
    height: 270px;
    border: double 2px transparent;
    border-radius: 6px 36px;
    background-origin: border-box;
    background-clip: content-box, border-box;
    background-image: linear-gradient(white, white), radial-gradient(circle at top left, #94bbe9, #94bbe9);
`
export const ContainerInfoDelivery = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 32px;
`

export const ImgDelivery = styled.img`
    width: 492px;
    height: 293px;
`
export const ContainerLineInfo = styled.div`
    display: flex;
    align-items: center;
    width: 354px;
    height: 42px;
    gap: 12px;
`

const CircleContainerIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
`

export const CircleContainerIconAdress = styled(CircleContainerIcon)`
    background-color: ${(props) => props.theme.purple};
`

export const CircleContainerIconTimer = styled(CircleContainerIcon)`
    background-color: ${(props) => props.theme.yellow};
`

export const CircleContainerIconPayment = styled(CircleContainerIcon)`
    background-color: ${(props) => props.theme.yellow_dark};
`

export const LineCollum = styled.div`
    display: flex;
    flex-direction: column;
`