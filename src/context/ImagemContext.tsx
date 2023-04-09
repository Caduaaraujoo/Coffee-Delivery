import { createContext, ReactNode, useState } from "react";
import Americano from '../assets/Americano.svg'
import Arabe from '../assets/Arabe.svg'
import CafeComLeite from '../assets/CafeComLeite.svg'
import CafeGelado from '../assets/CafeGelado.svg'
import Capuccino from '../assets/Capuccino.svg'
import ChocolateQuente from '../assets/ChocolateQuente.svg'
import Cubano from '../assets/Cubano.svg'
import Expresso from '../assets/Expresso.svg'
import ExpressoCremoso from '../assets/ExpressoCremoso.svg'
import Havaiano from '../assets/Havaiano.svg'
import Irlandes from '../assets/Irlandes.svg'
import Latte from '../assets/Latte.svg'
import Macchiato from '../assets/Macchiato.svg'
import Mochaccino from '../assets/Mochaccino.svg'

export const ImagemContext = createContext({} as any)

interface ImagemContextProviderProps {
    children: ReactNode
}

export function ImagemContextProvider({ children }: ImagemContextProviderProps) {
    const [imagens, setImagens] = useState(
        [
            { id: 0, imagem: <Expresso />, },
            { id: 1, imagem: <Americano />, },
            { id: 2, imagem: <ExpressoCremoso />, },
            { id: 3, imagem: <CafeGelado />, },
            { id: 4, imagem: <CafeComLeite />, },
            { id: 5, imagem: <Latte />, },
            { id: 6, imagem: <Capuccino />, },
            { id: 7, imagem: <Macchiato />, },
            { id: 8, imagem: <Mochaccino />, },
            { id: 9, imagem: <ChocolateQuente />, },
            { id: 10, imagem: <Cubano />, },
            { id: 11, imagem: <Havaiano />, },
            { id: 12, imagem: <Arabe />, },
            { id: 13, imagem: <Irlandes />, },
        ]
    )


    return (
        <ImagemContext.Provider value={{ imagens }}>
            {children}
        </ImagemContext.Provider>
    )
}