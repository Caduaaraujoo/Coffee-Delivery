import { createContext, ReactNode, useState } from 'react'

export const FormaPayContent = createContext({} as any)

interface FormPayContentProps {
    children: ReactNode
}

export function FormPayContentProvider({ children }: FormPayContentProps) {
    const [formPay, setFormPay] = useState({
        cep: 'lindo',
        rua: 'teste',
        numero: '',
        complemento: '',
        bairro: 'bonito',
        cidade: '',
        uf: ''
    })

    function handleFormPay(content: any) {
        console.log(content)
    }




    return (
        <FormaPayContent.Provider
            value={{
                formPay,
                setFormPay,
                handleFormPay
            }}
        >
            {children}
        </FormaPayContent.Provider>
    )
}