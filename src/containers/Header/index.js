import React from 'react'

import {
    Link
} from 'react-router'

import {
    AppBar,
    IconButton,
    FlatButton
} from 'material-ui'

import Hidden from '../../components/Hidden'

import userService from '../../services/userService'


//TODO check prefixer.js and file issue if needed
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
        this.logoutFB = this.logoutFB.bind(this);
    }

    componentWillMount() {
        // FB.getLoginStatus((response) => {
        //     switch (response.status) {
        //             case 'connected':
        //                 FB.api('/me?fields=email', ({email}) => {
        //                     userService.getUser(email)
        //                     .then((user) => {
        //                         this.setState({
        //                             user: user,
        //                             loggedIn: true
        //                         })
        //                     })

        //                 })
        //                 break
        //             case 'not_authorized':
        //             default:
        //                 console.log('not logged in')
        //     }
        // })
    }

    loginFB() {
        FB.login(response => {
            switch (response.status) {
                    case 'connected':
                        FB.api('/me?fields=name,email,picture.type(normal)', (node) => {
                            console.log(node)
                            userService.getUser(node.email)
                            .then((data) => {
                                if (data) {
                                    return data
                                } else {
                                    return userService.addUser(node)
                                }
                            })
                            .then((user) => {
                                this.setState({
                                    user: {
                                        name: node.name,
                                        picture: node.picture.data.url,
                                        email: node.email
                                    },
                                    loggedIn: true
                                })
                            })
                        })
                        break
                    case 'not_authorized':
                    default:
                        console.log('Some Error occured. Try loggin in again.')
                        break
            }
            console.log(response)
        }, { scope: 'public_profile,email' })
    }

    logoutFB() {
        FB.logout(response => {
            console.log('Logged out')
            this.setState({
                loggedIn: false
            })
        })
    }

    gotoLocation(location) {
        this.context.router.push(location)
    }

    render() {

        // let rightMenu = <FlatButton label="Login" default={true} onClick={this.loginFB}/>

        // let logoutMenu = [
        //     <FlatButton label="Home" default={true} onClick={this.gotoLocation('/home')}/>,
        //     <FlatButton label="Logout" default={true} onClick={this.logoutFB}/>
        // ]

        let {loggedIn} = this.state

        return (
            <div>
                <AppBar
                    title="Tasky"
                    iconElementLeft	= { <IconButton></IconButton> }
                    iconElementRight = { <button /> }
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
