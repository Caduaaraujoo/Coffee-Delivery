import styled from 'styled-components'

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 6.3rem;
  padding: 1.93rem 9.7rem;
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const Location = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.purple_light};
  color: ${(props) => props.theme.purple_dark};
  min-width: 9.6rem;
  height: 2.3rem;
  gap: 4px;
  border-radius: 6px;
  padding: 8px;
`

export const Cart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.3rem;
  height: 2.3rem;
  background-color: ${(props) => props.theme.yellow_light};
  color: ${(props) => props.theme.yellow_dark};
  border-radius: 6px;
`

export const AmountCoffee = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.theme.yellow_dark};
  font-weight: 700;
  font-size: 12px;
`
