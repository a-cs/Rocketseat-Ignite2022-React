import { ThemeProvider, StyleSheetManager } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import isPropValid from '@emotion/is-prop-valid'

import { Router } from './Router'

import { defaultTheme } from './components/styles/themes/default'
import { GlobalStyle } from './components/styles/global'
import { CyclesContextProvider } from './contexts/CyclesContext'

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <StyleSheetManager shouldForwardProp={isPropValid}>
                <BrowserRouter>
                    <CyclesContextProvider>
                        <Router />
                    </CyclesContextProvider>
                </BrowserRouter>
            </StyleSheetManager>
            <GlobalStyle />
        </ThemeProvider>
    )
}
