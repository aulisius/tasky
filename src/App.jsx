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
import Header from './Common/Containers/Header.jsx'
import Alternate from './Common/Components/Alternate.jsx'
import AccessDenied from './Common/Components/AccessDenied.jsx'
import PageNotFound from './Common/Components/PageNotFound.jsx'
import Welcome from './Common/Components/Welcome.jsx'

//Service
import user from './Services/userService'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'

const userHasAccess = (requiredRole, component, render) =>
    user.getRole()
        .then(userRole => {
            user.hasRoleAtleast(requiredRole, userRole)
                ? render(null, component)
                : render(null, AccessDenied)
        })

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme({ palette: { primary2Color: '#fff' } }) } >
        <Router history={browserHistory}>
            <Route path="/"  component={Header}>
                <IndexRedirect to="/welcome" />
                <Route path="/welcome" component={Welcome} />
                <Route path="/user">
                    <IndexRedirect to="/user/all" />
{//                    <Route path="/user/all" component={UserList} />
//                    <Route path="/user/:username" component={User} />
}                </Route>
                <Route path="/logout" />
                <Route path="/denied" component={AccessDenied} />
                <Route path="*" component={PageNotFound} />
            </Route>
        </Router>
    </MuiThemeProvider>
)

export default App
