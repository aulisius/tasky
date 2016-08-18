import React from 'react'

import {
    Col,
    Row
} from 'react-materialize'

import {
    Snackbar
} from 'material-ui'

import Hidden from '../../Common/Components/Hidden.jsx'

import SearchForm from '../../Common/Components/SearchForm.jsx'
import UserList from '../Components/UserList.jsx'

import service from '../../Services/userService'

class UserSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: [],
            help: '',
            fetching: false,
            open: false
        }

        this.searchUsers = this.searchUsers.bind(this)
        this.notifyFormError = this.notifyFormError.bind(this)
    }

    searchUsers({ username }) {
        this.setState({
            fetching: true
        })

        service
            .findUser(username)
            .then(user => {
                this.setState({
                    user: [user],
                    help: Object.keys(user).length > 0 ? 'User found' : 'No user found',
                    fetching: false,
                    open: true
                })
            })
            .catch(err => {
                this.setState({
                    fetching: false,
                    help: 'Search failed. Try again',
                    open: true
                })
                console.info(err)
            })
    }

    notifyFormError(data) {
        console.error('Form error:', data)
    }

    render() {
        const legends = [
            'Username',
            'Role',
        ]

        return (
            <div>
                <SearchForm
                    search = {this.searchUsers}
                    notifyError = {this.notifyFormError}
                    textStuff = {{
                        title: 'username',
                        hintText: 'John Doe',
                        floatingLabelText: 'Enter username to search',
                    }}
                    />
                <br/>
                <Hidden hide = {this.state.user.length === 0}>
                    <Row>
                        <Col m={6} offset="m3">
                            <UserList
                                legends = { legends }
                                users = {this.state.user}
                                target = "/user/view"
                                />
                        </Col>
                    </Row>
                </Hidden>
                <Snackbar
                    open = {this.state.open}
                    message = {this.state.help}
                    autoHideDuration = {1500}
                    />
            </div>
        )
    }
}

export default UserSearch