import React from 'react'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from '../../views/Home/Home'

const RoutesProvider = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Redirect to='/' />
            </Switch>
        </BrowserRouter>
    )
}

export { RoutesProvider }
