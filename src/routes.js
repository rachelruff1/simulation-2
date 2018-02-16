import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import Dashboard from './components/Dashboard/Dashboard';

export default (
    <Switch>
        <Route exact path='/' component={SignIn}/>
        <Route path='/dashboard' component={Dashboard}/>
    </Switch>
)