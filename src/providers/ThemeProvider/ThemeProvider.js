import React from 'react'
import { ThemeProvider as Provider } from 'theme-ui'

import { Theme } from './Theme'

const ThemeProvider = ({ children }) => {
    return (
        <Provider theme={Theme}>
            { children }
        </Provider>
    )
}

export { ThemeProvider }