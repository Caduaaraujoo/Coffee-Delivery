import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ContainerForms = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: 58rem;
  height: 25rem;
  background-color: ${(props) => props.theme.base_card};
  border-radius: 5px;
  padding: 3rem;
`

export const HeaderForm = styled.header`
  display: flex;
  gap: 3px;
`
export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const InputBase = styled.input`
  all: unset;
  border: 1px solid ${(props) => props.theme.base_button};
  height: 2.5rem;
  border-radius: 8px;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.base_button};

  &::placeholder {
    color: ${(props) => props.theme.base_label};
  }

  &:focus{
    border-color: ${(props) =>props.theme.yellow_dark};
  }

  &.inputAlert {
    border-color: ${(props) => props.theme.input_alert};
  }
`

export const ContainerInputsRow = styled.div`
  display: flex;
  gap: 1rem;
`
export const InputZipCode = styled(InputBase)`
  width: 20rem;
`
export const InputRoad = styled(InputBase)`
  width: 51rem;
`
export const InputNumber = styled(InputBase)`
  width: 20rem;
`
export const InputComplement = styled(InputBase)`
  width: 30rem;
`
export const InputDistrict = styled(InputBase)`
  width: 20rem;
`
export const InputCity = styled(InputBase)`
  width: 25rem;
`
export const InputUf = styled(InputBase)`
  width: 4rem;
`
