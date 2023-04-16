import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ContainerRequests = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.4rem;
  width: 33rem;
  height: 36rem;
  border-radius: 6px 2.7rem;
  background-color: ${(props) => props.theme.base_card};
`
export const ContainerCoffee = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: auto;
`

export const ContainerCoffeeSelected = styled.article`
  width: 22.3rem;
  height: 4.9rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  border-bottom: 1px solid ${(props) => props.theme.base_button};

  img {
    width: 3.9rem;
    height: 3.9rem;
  }

  p {
    font-size: 16px;
  }
`

export const CoffeeAmount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const ContainerAmountAcions = styled.div`
  display: flex;
  gap: 5px;
`

export const ContainerCoffeAmountFunctions = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  justify-content: space-between;
  width: 4.3rem;
  height: 2rem;
  background: ${(props) => props.theme.base_button};
  border-radius: 6px;
  &:hover{
    background-color: ${(props) => props.theme.base_hover};
  }
`
export const ButtonDeleteCoffee = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 6rem;
  height: 2rem;
  background: ${(props) => props.theme.base_button};
  border-radius: 6px;

  &:hover{
    background-color: ${(props) => props.theme.base_hover};
  }
`
export const ContainerCheckoutProducts = styled.form`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ValueLine = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ButtonConfirmProduct = styled.button`
  all: unset;
  text-align: center;
  height: 2.8rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed !important;
    }

  &:hover{
    background-color: ${(props) => props.theme.yellow_dark};
  };
`

export const AlertContainer = styled.span` 
  position: absolute;
  top: 1.8rem;
  right: 9.1rem;
  height: 2.4rem;
  width: 21.21rem;
  padding: 10px;
  background-color: ${(props) => props.theme.input_alert};
  border-radius: 10px;
  
  p{
    color: white;
    font-size: 16px;
    font-weight: 700;
  }
`
