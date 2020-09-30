import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWrapper from './Route';

/* Screens */
import SignIn from '../pages/Login';
import Home from '../pages/Home';

function Routes() {
    return(
        <Switch>
            <RouteWrapper component={SignIn} path="/" exact />
            <RouteWrapper component={Home} path="/home" isPrivate={true} />
            <RouteWrapper path= "/" component={() => <h1>4040</h1>} />
        </Switch>
    )
}

export default Routes;