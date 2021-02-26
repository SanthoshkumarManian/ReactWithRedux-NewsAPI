import React from 'react';
import {BrowserRouter as  Router, Switch,Route } from 'react-router-dom';
import App from '../App'
import Content from  '../component/content/content';

const Routes = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/content/:id" component={Content}/>
            </Switch>
        </Router>
    )
}

export default Routes
