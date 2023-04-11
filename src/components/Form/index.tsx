/* eslint-disable prettier/prettier */
import { MapPinLine } from 'phosphor-react'
import { Container, ContainerForms, ContainerInputs, ContainerInputsRow, ContainerSpan, InputCity, InputComplement, InputDistrict, InputNumber, InputRoad, InputUf, InputZipCode } from './styles'
import { FormaPayContent } from '../../context/FormPayContext'
import { useContext } from 'react'

export function Form() {
    const { formPay, setFormPay } = useContext(FormaPayContent)
    function handleOnChange(e: any) {
        setFormPay({ ...formPay, [e.target.name]: e.target.value })
    }
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
                    <InputZipCode
                        name='cep'
                        placeholder='CEP'
                        value={formPay.cep}
                        onChange={(e) => handleOnChange(e)}
                    />
                    <InputRoad
                        name='rua'
                        placeholder='RUA'
                        value={formPay.rua}
                        onChange={(e) => handleOnChange(e)}
                    />
                    <ContainerInputsRow>
                        <InputNumber
                            name='numero'
                            placeholder='NÚMERO'
                            value={formPay.numero}
                            onChange={(e) => handleOnChange(e)}
                        />
                        <InputComplement
                            name='complemento'
                            placeholder='COMPLEMENTO opcional'
                            value={formPay.complemento}
                            onChange={(e) => handleOnChange(e)}
                        />
                    </ContainerInputsRow>
                    <ContainerInputsRow>
                        <InputDistrict
                            name='bairro'
                            placeholder='BAIRRO'
                            value={formPay.bairro}
                            onChange={(e) => handleOnChange(e)}
                        />
                        <InputCity
                            name='cidade'
                            placeholder='CIDADE'
                            value={formPay.cidade}
                            onChange={(e) => handleOnChange(e)}
                        />
                        <InputUf
                            name='uf'
                            placeholder='UF'
                            value={formPay.uf}
                            onChange={(e) => handleOnChange(e)}
                        />
                    </ContainerInputsRow>
                </ContainerInputs>
            </ContainerForms>
        </Container>
    )
}
