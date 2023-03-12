/* eslint-disable prettier/prettier */
import { MapPinLine } from 'phosphor-react'
import { Container, ContainerForms, ContainerInputs, ContainerInputsRow, ContainerSpan, InputCity, InputComplement, InputDistrict, InputNumber, InputRoad, InputUf, InputZipCode } from './styles'

export function Form() {
    return (
        <Container>
            <h2>Complete seu pedido</h2>
            <ContainerForms>
                <ContainerSpan>
                    <MapPinLine size={22} color="#C47F17" />
                    <div>
                        <h3>Endereço de Entrega</h3>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>
                </ContainerSpan>
                <ContainerInputs>
                    <InputZipCode placeholder='CEP' />
                    <InputRoad placeholder='RUA' />
                    <ContainerInputsRow>
                        <InputNumber placeholder='NÚMERO' />
                        <InputComplement placeholder='COMPLEMENTO opcional' />
                    </ContainerInputsRow>
                    <ContainerInputsRow>
                        <InputDistrict placeholder='BAIRRO' />
                        <InputCity placeholder='CIDADE' />
                        <InputUf placeholder='UF' />
                    </ContainerInputsRow>
                </ContainerInputs>
            </ContainerForms>
        </Container>
    )
}
