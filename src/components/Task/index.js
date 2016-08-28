import React from 'react'
import Modal from 'react-modal'

import Avatar from '../Avatar'
import { TaskHeader, TaskHeaderExtended } from '../TaskHeader'
import Contributors from '../Contributors'
import Hidden from '../Hidden'

const style = {
    taskMini: {
        boxShadow: '4px 4px 8px 4px rgba(0,0,0,0.2)',
        display: 'inline-block',
        borderRadius: '5%',
        width: '320px',
        textAlign: 'top',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        padding: '10px'
    },
    btn: {
        float: 'left'
    },
    modalStyle: {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.5)'
        },
        content: {
            position: 'absolute',
            margin: '80px',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            boxShadow: '4px 4px 8px 4px rgba(0,0,0,0.2)',
            width: '640px',
            outline: 'none'
        }
    }
}

class Task extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            showModal: false
        }

        this.handleClose = this.handleClose.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
    }

    handleClose() {
        this.setState({ showModal: false })
    }

    handleOpen() {
        this.setState({ showModal: true })
    }

    render() {
        return (
            <div>
                <div style={style.taskMini}>
                    <TaskHeader {...this.props} />
                    <hr/>
                    <button style={style.btn} onClick={this.handleOpen} > Expand </button>
                    <Contributors users={this.props.contributors} />
                </div>
                <Modal
                    style={style.modalStyle}
                    isOpen={this.state.showModal}
                    onRequestClose={this.handleClose}
                    >
                    <TaskHeaderExtended {...this.props} closeMe={this.handleClose} />
                </Modal>
            </div>
        )
    }
}

export default Task
