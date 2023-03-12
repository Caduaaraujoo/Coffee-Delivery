import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ContainerRequests = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 40px;
  width: 33rem;
  height: 36rem;
  border-radius: 6px 44px;
  background-color: ${(props) => props.theme.base_card};
`
export const ContainerCoffee = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: auto;
`

export const ContainerCoffeeSelected = styled.div`
  width: 368px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  border-bottom: 1px solid ${(props) => props.theme.base_button};

  img {
    width: 64px;
    height: 64px;
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

export const ContainerCoffeAmountFunctions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  justify-content: space-between;
  width: 72px;
  height: 32px;
  background: ${(props) => props.theme.base_button};
  border-radius: 6px;
`
export const ButtonDeleteCoffee = styled.div`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 100px;
  height: 32px;
  background: ${(props) => props.theme.base_button};
  border-radius: 6px;
`
export const ContainerCheckoutProducts = styled.div`
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
  height: 46px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
`
