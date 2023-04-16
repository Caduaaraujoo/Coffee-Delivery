import { Form } from '../../components/Form'
import { Pay } from '../../components/Pay'
import { TotalCoffee } from '../../components/TotalCoffee'
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
