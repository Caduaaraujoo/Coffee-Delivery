import { MapPinLine } from 'phosphor-react'
import { useContext } from 'react'
import { FormPayContent } from '../../context/FormPayContext'
import { Container, ContainerForms, ContainerInputs, ContainerInputsRow, HeaderForm, InputCity, InputComplement, InputDistrict, InputNumber, InputRoad, InputUf, InputZipCode } from './styles'

export function Form() {
    const { formPay, setFormPay, inputEmpty } = useContext(FormPayContent)

    function handleOnChange(e: any) {
        setFormPay({ ...formPay, [e.target.name]: e.target.value })
    }

    return (
        <Container>
            <h2>Complete seu pedido</h2>
            <ContainerForms>
                <HeaderForm>
                    <MapPinLine size={22} color="#C47F17" />
                    <section>
                        <h3>Endereço de Entrega</h3>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </section>
                </HeaderForm>
                <ContainerInputs>
                    <InputZipCode
                        className={inputEmpty.zipCode == "" ? 'inputAlert' : ""}
                        name='zipCode'
                        placeholder='CEP'
                        value={formPay.zipCode}
                        onChange={(e) => handleOnChange(e)}
                    />
                    <InputRoad
                        className={inputEmpty.road == "" ? 'inputAlert' : ""}
                        name='road'
                        placeholder='RUA'
                        value={formPay.road}
                        onChange={(e) => handleOnChange(e)}
                    />
                    <ContainerInputsRow>
                        <InputNumber
                            className={inputEmpty.numberHome == "" ? 'inputAlert' : ""}
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
                            className={inputEmpty.address == "" ? 'inputAlert' : ""}
                            name='address'
                            placeholder='BAIRRO'
                            value={formPay.address}
                            onChange={(e) => handleOnChange(e)}
                        />
                        <InputCity
                            className={inputEmpty.city == "" ? 'inputAlert' : ""}
                            name='city'
                            placeholder='CIDADE'
                            value={formPay.city}
                            onChange={(e) => handleOnChange(e)}
                        />
                        <InputUf
                            className={inputEmpty.uf == "" ? 'inputAlert' : ""}
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
