import React from 'react'

import userService from '../../services/userService'

class Login extends React.Component {

    constructor(props) {
        super(props)

        this.loginFB = this.loginFB.bind(this)
    }

    loginFB() {
        FB.login(response => {
            switch (response.status) {
                    case 'connected':
                        FB.api('/me?fields=name,email,picture.type(normal)', (node) => {
                            let { email, picture, name } = node
                            userService
                            .getUser(email)
                            .then(data => (data === {}) ? userService.addUser(node) : data)
                            .then((user) => {
                                sessionStorage.setItem('tasky-user-logged-in', email)
                                this.context.router.push('/home')
                            })
                        })
                        break
                    case 'not_authorized':
                    default:
                        console.log('Some Error occured. Try logging in again.')
                        break
            }
        }, { scope: 'public_profile,email' })
    }

    render() {
        return (
            <div>
                <h1> Login to continue </h1>
                <button onClick={this.loginFB}> LOGIN </button>
            </div>
        );
    }
}

Login.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default Login
