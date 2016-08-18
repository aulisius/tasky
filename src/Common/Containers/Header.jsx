import React from 'react'

import {
    Link
} from 'react-router'

import {
    AppBar,
    IconButton,
    FlatButton
} from 'material-ui'

import Hidden from '../Components/Hidden.jsx'

import UserService from '../../Services/userService'

const user = new UserService()

class Header extends React.Component {
    constructor(props) {
        super(props)



        this.state = {
            loggedIn: false,
            user: {
                name: '',
                email: '',
                picture: ''
            }
        }

        this.gotoLocation = this.gotoLocation.bind(this)
        this.loginFB = this.loginFB.bind(this)
    }

    componentWillMount() {
        FB.getLoginStatus((response) => {
            switch (response.status) {
                    case 'connected':
                        FB.api('/me?fields=email', ({email}) => {
                            user.getUser(email)
                            .then((user) => {
                                this.setState({
                                    user: user,
                                    loggedIn: true
                                })
                            })

                        })
                        break
                    case 'not_authorized':
                    default:
            }
        })
    }

    loginFB() {
        FB.login(response => {
            switch (response.status) {
                    case 'connected':
                        FB.api('/me?fields=first_name,email,picture.type(small)', ({first_name, picture, email, id}) => {
                            user.addUser({
                                name: first_name,
                                email: email,
                                id: id,
                                picture: picture.data.url
                            })
                            .then((user) => {
                                this.setState({
                                    user: user,
                                    loggedIn: true
                                })
                            })
                        })
                        break
                    case 'not_authorized':
                        console.log('Please login to continue')
                        break
                    default:
                        console.log('Login into Facebook')
                        break
            }
            console.log(response)
        }, { scope: 'public_profile,email' })
    }

    gotoLocation(location, title) {
        this.context.router.push(location)
    }

    render() {

        let rightMenu = <FlatButton label="Login" default={true} onClick={this.loginFB}/>

        return (
            <div>
                <AppBar
                    title="Tasky"
                    iconElementLeft	= { <IconButton></IconButton> }
                    iconElementRight = { rightMenu }
                    />
                {this.props.children}
            </div>
        )
    }
}

Header.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default Header
