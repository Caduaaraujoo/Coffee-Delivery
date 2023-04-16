import styled from 'styled-components'

export const ContainerPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 50px;
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
export const ContainerSpan = styled.span`
  display: flex;
  gap: 3px;
`

export const ContainerPaySelection = styled.div`
  display: flex;
  gap: 12px;

  `
export const CardPaySelection = styled.button`
  border: none;
  width: 250px;
  height: 70px;
  display: flex;
  padding: 0 16px;
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
