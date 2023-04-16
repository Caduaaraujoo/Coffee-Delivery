import { Form } from '../../components/Form'
import { TotalCoffee } from '../../components/TotalCoffee'
import { Pay } from '../../components/Pay'
import { Container, ContainerPay } from './styles'
import React from 'react'

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
