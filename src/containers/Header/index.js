import React from 'react'
import Link from 'react-router/lib/Link'

import userService from '../../services/userService'

//TODO check prefixer.js and file issue if needed
class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        let loggedIn = sessionStorage.getItem('tasky-user-logged-in') !== null

        let links = []

        const style = {
            navbar: {
                display: 'block',
                background: 'black'
            },
            links: {
                background: 'black',
                listStyleType: 'none'
            },
            link: {
                float: 'right',
                padding: '10px'
            }
        }

        if (loggedIn) {
            links = [
                {
                    to: '/logout',
                    link: 'Logout'
                },
                {
                    to: '/add',
                    link: 'Add'
                },
                {
                    to: '/home',
                    link: 'Home'
                }
            ]
        } else {
            links = [
                {
                    to: '/login',
                    link: 'Login'
                }
            ]
        }

        return (
            <div>
                <nav>
                    <p>Tasky</p>
                    <ul style={style.links}>
                        {
                            links.map(link => <li style={style.link}> <Link to={link.to}> {link.link} </Link> </li>)
                        }
                    </ul>
                </nav>
                {this.props.children}
            </div>
        )
    }
}

Header.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default Header
