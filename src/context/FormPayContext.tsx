import { createContext, ReactNode, useState } from 'react'
import React from 'react'

export const FormPayContent = createContext({} as any)

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

    return (
        <FormPayContent.Provider
            value={{
                inputEmpty,
                formPay,
                setFormPay,
                setInputEmpty
            }}
        >
            {children}
        </FormPayContent.Provider>
    )
}