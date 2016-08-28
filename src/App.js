import React from 'react'

import browserHistory from 'react-router/lib/browserHistory'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import IndexRedirect from 'react-router/lib/IndexRedirect'

import Header from './containers/Header'
import Home from './containers/Home'

import Login from './components/Login'
import Logout from './components/Logout'
import NewTask from './components/NewTask'
import AccessDenied from './components/AccessDenied'
import PageNotFound from './components/404'

const userIsLoggedIn = (nextState, replace) => {
    if (!sessionStorage.getItem('tasky-user-logged-in')) {
        replace('/login')
    }
}

const skipIfLoggedIn = (nextState, replace) => {
    if (sessionStorage.getItem('tasky-user-logged-in')) {
        replace('/home')
    }
}


const App = () => (
    <Router history={browserHistory}>
        <Route path="/"  component={Header}>
            <Route path="/home" component={Home} onEnter={userIsLoggedIn} />
            <Route path="/add" component={NewTask} onEnter={userIsLoggedIn} />
            <Route path="/login" component={Login} onEnter={skipIfLoggedIn} />
            <Route path="/logout" component={Logout} />
            <Route path="/denied" component={AccessDenied} />
            <Route path="*" component={PageNotFound} />
        </Route>
    </Router>
)

export default App
