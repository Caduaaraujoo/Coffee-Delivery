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
                        name='zipCode'
                        placeholder='CEP'
                        value={formPay.zipCode}
                        onChange={(e) => handleOnChange(e)}
                    />
                    <InputRoad
                        name='road'
                        placeholder='RUA'
                        value={formPay.road}
                        onChange={(e) => handleOnChange(e)}
                    />
                    <ContainerInputsRow>
                        <InputNumber
                            name='numberHome'
                            placeholder='NÚMERO'
                            value={formPay.numberHome}
                            onChange={(e) => handleOnChange(e)}
                        />
                        <InputComplement
                            name='complement'
                            placeholder='COMPLEMENTO opcional'
                            value={formPay.complement}
                            onChange={(e) => handleOnChange(e)}
                        />
                    </ContainerInputsRow>
                    <ContainerInputsRow>
                        <InputDistrict
                            name='address'
                            placeholder='BAIRRO'
                            value={formPay.address}
                            onChange={(e) => handleOnChange(e)}
                        />
                        <InputCity
                            name='city'
                            placeholder='CIDADE'
                            value={formPay.city}
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
