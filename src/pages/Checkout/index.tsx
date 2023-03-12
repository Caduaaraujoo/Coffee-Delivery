import { Form } from '../../components/Form'
import { TotalCoffee } from '../../components/TotalCoffee'
import { Pay } from '../../components/Pay'
import { Container, ContainerPay } from './styles'

export function Checkout() {
  return (
    <Container>
      <ContainerPay>
        <Form />
        <Pay />
      </ContainerPay>
      <TotalCoffee />
    </Container>
  )
}
