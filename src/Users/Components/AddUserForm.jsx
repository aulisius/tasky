import React from 'react'

import {
    Form
} from 'formsy-react'

import {
    Paper,
    RaisedButton,
    MenuItem
} from 'material-ui'

import {
    FormsySelect,
    FormsyText,
} from 'formsy-material-ui/lib'

import service from '../../Services/userService'

class AddUserForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            canSubmit: false
        }

        this.enableButton = this.enableButton.bind(this)
        this.disableButton = this.disableButton.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.notifyFormError = this.notifyFormError.bind(this)
    }

    submitForm(data) {
        console.log(data)

        service.addUser(`${data.username},${data.role}`)
            .then(res => console.log(res))
            .catch(console.error)
    }


    enableButton() {
        this.setState({
            canSubmit: true
        })
    }

    disableButton() {
        this.setState({
            canSubmit: false
        })
    }

    notifyFormError(data) {
        console.error('Form error:', data)
    }

    render() {
        let styles = {
            paperStyle: {
                width: 300,
                margin: 'auto',
                padding: 20
            },
            submitStyle: {
                marginTop: 32
            }
        }

        return (
            <div style={{
                width: '100%',
                maxWidth: 700,
                margin: 'auto',
                padding: '50px 10px 10px 10px'
            }}>
                <Paper style={styles.paperStyle}>
                    <Form
                        onValid={this.enableButton}
                        onInvalid={this.disableButton}
                        onValidSubmit={this.submitForm}
                        onInvalidSubmit={this.notifyFormError}
                        >
                        <FormsyText
                            name="username"
                            hintText="John Doe"
                            required
                            floatingLabelText="Username"
                            />
                        <FormsySelect
                            name="role"
                            required
                            floatingLabelText="What role to assign?"
                            menuItems={this.selectFieldItems}
                            >
                            <MenuItem value={'ROLE_SUPERADMIN'} primaryText="Super Admin" />
                            <MenuItem value={'ROLE_ADMIN'} primaryText="Admin" />
                            <MenuItem value={'ROLE_USER'} primaryText="User" />
                            <MenuItem value={'ROLE_VIEW'} primaryText="View" />
                        </FormsySelect>
                        <RaisedButton
                            style={styles.submitStyle}
                            type="submit"
                            label="Add"
                            disabled={!this.state.canSubmit}
                            />
                    </Form>
                </Paper>
            </div>
        )
    }
}

export default AddUserForm