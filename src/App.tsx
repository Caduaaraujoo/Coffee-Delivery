import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { ProductsContextProvider } from './context/ProductsContext'
import { ImagemContextProvider } from './context/ImagemContext'
import { FormPayContentProvider } from './context/FormPayContext'
import React from 'react'


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <ImagemContextProvider>
          <ProductsContextProvider>
            <FormPayContentProvider>
              <Router />
            </FormPayContentProvider>
          </ProductsContextProvider>
        </ImagemContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
