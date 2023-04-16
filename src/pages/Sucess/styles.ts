import styled from "styled-components";

export const ContainerSucess = styled.div`
    display: flex;
    align-items: end;
    gap: 6rem;
    width: 100%;
    height: 32.9rem;
    padding: 6rem 9.7rem;
`
export const ContainerDelivery = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
        color: ${(props) => props.theme.yellow_dark};
    }
`

export const BoxDelivery = styled.div`
    width: 32rem;
    height: 16.3rem;
    border: double 2px transparent;
    border-radius: 6px 36px;
    background-origin: border-box;
    background-clip: content-box, border-box;
    background-image: linear-gradient(white, white), radial-gradient(circle at top left, #DBAC2C, #8047F8);
`
export const ContainerInfoDelivery = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.4rem;
    gap: 2rem;
`

export const ImgDelivery = styled.img`
    width: 30rem;
    height: 18rem;
`
export const ContainerLineInfo = styled.div`
    display: flex;
    align-items: center;
    width: 21.5rem;
    height: 2.5rem;
    gap: 0.8rem;
`

const CircleContainerIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
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