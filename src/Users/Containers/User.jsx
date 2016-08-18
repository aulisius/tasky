import React from 'react'

import {
    Row,
    Col,
} from 'react-materialize'

import {
    Dialog,
    FlatButton,
    MenuItem,
    RaisedButton,
    SelectField,
    Snackbar
} from 'material-ui'

import UserDetails from '../Components/UserDetails.jsx'
import Hidden from '../../Common/Components/Hidden.jsx'

import user from '../../Services/userService'

const possibleRoles = [
    {
        text: 'Superadmin',
        role: 'ROLE_SUPERADMIN'
    },
    {
        text: 'Admin',
        role: 'ROLE_ADMIN'
    },
    {
        text: 'User',
        role: 'ROLE_USER'
    },
    {
        text: 'View',
        role: 'ROLE_VIEW'
    }
]

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                username: 'Dummy',
                role: 'Dummy'
            },
            alert: {
                open: false,
                body: ''
            },
            dialog: {
                open: false,
                value: ''
            }
        }

        this.getUser = this.getUser.bind(this)
        this.changeRole = this.changeRole.bind(this)

        this.handleChange = this.handleChange.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.closeAlert = this.closeAlert.bind(this)

        this.openDialog = this.openDialog.bind(this)
    }

    componentWillMount() {
        this.getUser()
    }

    handleClose() {
        this.setState({
            alert: {
                open: false,
                body: ''
            }
        })

    }

    handleChange(event, index, payload) {
        this.setState({
            dialog: {
                open: true,
                value: payload
            },
        })
    }

    closeAlert() {
        this.setState({
            dialog: {
                open: false,
            }
        })
    }

    getUser() {
        user.findUser(this.props.params.username)
            .then(user => this.setState({
                user: user
            }))
            .catch(err => this.setState({
                user: {
                    username: 'Dummy',
                    role: 'Dummy'
                }
            }))
    }

    openDialog() {
        this.setState({
            dialog: {
                open: true
            }
        })
    }

    changeRole() {
        this.setState({
            dialog: {
                open: false
            }
        })

        user.updateRole({
            name: this.state.user.username,
            role: this.state.dialog.value
        })
            .then(success => this.setState({
                user: success
            }))
            .catch(e => console.error(e))
    }

    render() {
        let {
            user,
            dialog,
            alert
        } = this.state

        let {
            open,
            body,
        } = alert

        return (
            <div>
                <Row>
                    <Col m={8} offset="m3">
                        <UserDetails
                            user= {user}
                            />
                    </Col>
                </Row>
                <Row>
                    <Col m={3} offset="m4">
                        <RaisedButton
                            primary={true}
                            label="Change role"
                            onClick={this.openDialog}
                            />
                    </Col>
                </Row>
                <Snackbar
                    open={open}
                    message= {body}
                    autoHideDuration={1000}
                    onRequestClose={this.handleClose}
                    />
                <Dialog
                    actions={[
                        <FlatButton
                            primary={true}
                            label= "Change"
                            onClick={this.changeRole}
                            />,
                        <FlatButton
                            primary={true}
                            label= "Cancel"
                            onClick={this.closeAlert}
                            />
                    ]}
                    modal={false}
                    open={dialog.open}
                    onRequestClose={this.closeAlert}
                    >
                    Select new role for this user
                    <br />
                    <SelectField value={dialog.value} onChange={this.handleChange}>
                        {
                            possibleRoles
                                .filter(info => info.role !== user.role)
                                .map((info, index) => (
                                    <MenuItem
                                        key={index}
                                        value={info.role}
                                        label={info.text}
                                        primaryText={info.text}
                                        />
                                ))
                        }
                    </SelectField>
                </Dialog>
            </div>
        )
    }
}

export default User