import React from 'react'

import {
    Router,
    Route,
    IndexRedirect,
    browserHistory
} from 'react-router'

import {
    getMuiTheme,
    MuiThemeProvider
} from 'material-ui/styles'

//Common
import Header from './containers/Header'
import Alternate from './components/Alternate'
import AccessDenied from './components/AccessDenied'
import PageNotFound from './components/404'
import Home from './containers/Home'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme({ palette: { primary2Color: '#fff' } }) } >
        <Router history={browserHistory}>
            <Route path="/"  component={Header}>
                <Route path="/home" component={Home} />
                <Route path="/user">
                    <IndexRedirect to="/user/all" />
                </Route>
                <Route path="/logout" />
                <Route path="/denied" component={AccessDenied} />
                <Route path="*" component={PageNotFound} />
            </Route>
        </Router>
    </MuiThemeProvider>
)

export default App
