import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { Home } from '../pages'
import { RouteHelper } from './route'

const DynamicRouter = ({component : Component, ...rest}) => {
    return (
        <>
            <Route 
            {...rest}
            render={props => (
                <Component {...props} />
            )}
            />
        </>
    )
}


export default () => (
    <BrowserRouter>
        <Switch>
            <DynamicRouter exact path={RouteHelper.Home.path} component={Home} />
        </Switch>
    </BrowserRouter>
)
