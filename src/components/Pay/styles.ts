import styled from 'styled-components'

export const ContainerPayment = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 3rem;
  width: 58rem;
  height: 17.5rem;
  background-color: ${(props) => props.theme.base_card};
  border-radius: 5px;

  p {
    font-size: 16px;
  }

  &.inputAlert {
    border: 1px solid ${(props) => props.theme.input_alert};
  }
`
export const ContainerInfoPayment = styled.div`
  display: flex;
  gap: 3px;
`

export const SectionPaymentSelected = styled.section`
  display: flex;
  gap: 12px;

  `
export const CardPaySelection = styled.button`
  border: none;
  width: 16rem;
  height: 4.2rem;
  display: flex;
  padding: 0 1rem;
  align-items: center;
  gap: 12px;
  background-color: ${(props) => props.theme.base_button};
  border-radius: 6px;

  &:hover{
    background-color: ${(props) => props.theme.base_hover};
  }

  &:focus{
    background-color: ${(props) => props.theme.purple_light};
    border: 1px solid ${(props) => props.theme.purple};
  }

  &.paymentSelected{
    border: 1px solid ${(props) => props.theme.purple};
  }
`
