import React from 'react'

import { ThemeProvider } from './providers/ThemeProvider'
import { RoutesProvider } from './providers/RoutesProvider'

import Home from './views/Home/Home'

const App = () => {
    return (
        <ThemeProvider>
            <RoutesProvider>
                <Home />
            </RoutesProvider>
        </ThemeProvider>
    )
}

export default App
