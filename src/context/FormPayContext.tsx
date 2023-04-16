import { createContext, ReactNode, useState } from 'react'
import React from 'react'

export const FormaPayContent = createContext({} as any)

interface FormPayContentProps {
    children: ReactNode
}

export function FormPayContentProvider({ children }: FormPayContentProps) {
    const [inputEmpty, setInputEmpty] = useState([])
    const [formPay, setFormPay] = useState({
        zipCode: '',
        road: '',
        numberHome: '',
        complement: '',
        address: '',
        city: '',
        uf: '',
        payment: ''
    })

    function handleFormPay(content: any) {
        console.log(content)
    }




    return (
        <FormaPayContent.Provider
            value={{
                inputEmpty,
                formPay,
                setFormPay,
                handleFormPay,
                setInputEmpty
            }}
        >
            {children}
        </FormaPayContent.Provider>
    )
}