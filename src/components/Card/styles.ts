import styled from 'styled-components'

export const ContainerCard = styled.article`
  position: relative;
  
`

export const ImgCoffee = styled.img`
  position: absolute;
  top: 0;
  margin-left: 70px;
  margin-top: -20px;
`

export const CardInfo = styled.article`
  width: 256px;
  height: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 20px;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme.base_card};

  h2 {
    margin: 16px 0 8px 0;
  }

  p {
    text-align: center;
    color: ${(props) => props.theme.base_label};
    margin-bottom: 32px;
  }

  .buy_value {
    font-size: 24px;
    line-height: 130%;
    margin-right: 23px;
  }
`

export const ContainerTypeCoffe = styled.section`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`

export const TypeCoffe = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 5.5rem;
  height: 1.8rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme.yellow_light};
  color: ${(props) => props.theme.yellow_dark};
  font-weight: 700;
  font-size: 10px;

`

export const SectionFunctionsAmountCoffee = styled.section`
  display: flex;
`

export const AmountCoffees = styled.section`
  display: flex;
  padding: 8px;
  justify-content: space-between;
  align-items: center;
  width: 72px;
  height: 38px;
  background: #e6e5e5;
  border-radius: 6px;
  margin-right: 8px;

  &:hover{
    background-color: ${(props) => props.theme.base_hover};
  }
`

export const ContainerShoppinhCart = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: #4b2995;
  border-radius: 6px;
  cursor: pointer;

  &:hover{
    background-color: ${(props) => props.theme.purple};
  }
`
