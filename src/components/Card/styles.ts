import styled from 'styled-components'

export const ContainerCard = styled.div`
  position: relative;
`

export const ImgCoffee = styled.img`
  position: absolute;
  top: 0;
  margin-left: 70px;
  margin-top: -20px;
`

export const CardInfo = styled.div`
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
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme.base_label};
    margin-bottom: 32px;
  }

  .buy_value {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 130%;
    margin-right: 23px;
  }
`

export const Buy = styled.div`
  display: flex;
`

export const AmountCoffees = styled.div`
  display: flex;
  padding: 8px;
  justify-content: space-between;
  align-items: center;
  width: 72px;
  height: 38px;
  background: #e6e5e5;
  border-radius: 6px;
  margin-right: 8px;
`

export const ContainerShoppinhCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background: #4b2995;
  border-radius: 6px;
`
