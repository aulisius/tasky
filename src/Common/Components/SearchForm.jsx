import React from 'react'

import {
    Form
} from 'formsy-react'

import {
    FormsyText,
} from 'formsy-material-ui/lib'

import {
    RaisedButton,
} from 'material-ui'

class SearchForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            canSubmit: false
        }

        this.enableButton = this.enableButton.bind(this)
        this.disableButton = this.disableButton.bind(this)
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

    render() {

        let {
            search,
            notifyError,
            textStuff
        } = this.props

        return (
            <div style={{
                width: '100%',
                maxWidth: 700,
                margin: 'auto'
            }}>
                <Form
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    onValidSubmit={search}
                    onInvalidSubmit={notifyError}
                    >
                    <FormsyText
                        name={textStuff.title}
                        hintText={textStuff.hintText}
                        required
                        disabled={false}
                        floatingLabelFixed={true}
                        floatingLabelText={textStuff.floatingLabelText}
                        />
                    <RaisedButton
                        type="submit"
                        label="Search"
                        style={{ margin: '0px 10px' }}
                        disabled={!this.state.canSubmit}
                        />
                </Form>
            </div>
        )
    }
}

export default SearchForm