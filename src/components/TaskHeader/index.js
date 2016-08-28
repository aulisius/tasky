import React from 'react'

import Badge from '../Badge'
import Avatar from '../Avatar'
import Alternate from '../Alternate'

const style = {
    taskName: {
        display: 'block',
        padding: '0px'
    }
}

const TaskHeaderExtended = ({id, name = '', description = '', status = '', contributors = [], onChange, closeMe}) => {

    let options = []

    switch (status) {
            case 'PENDING':
                options = [
                    {
                        name: 'Current',
                        handler: () => onChange(id, 'Current')
                    },
                    {
                        name: 'Completed',
                        handler: () => onChange(id, 'Completed')
                    }
                ]
                break
            case 'CURRENT':
                options = [
                    {
                        name: 'Pending',
                        handler: () => onChange(id, 'Pending')
                    },
                    {
                        name: 'Completed',
                        handler: () => onChange(id, 'Completed')
                    }
                ]
                break
            case 'COMPLETED':
                options = [
                    {
                        name: 'Pending',
                        handler: () => onChange(id, 'Pending')
                    },
                    {
                        name: 'Current',
                        handler: () => onChange(id, 'Current')
                    }
                ]
                break
            default:
                options = [
                    {
                        name: 'Pending',
                        handler: () => onChange(id, 'Pending')
                    },
                    {
                        name: 'Current',
                        handler: () => onChange(id, 'Current')
                    },
                    {
                        name: 'Completed',
                        handler: () => onChange(id, 'Completed')
                    }
                ]
    }

    const close = (handler) => () => {
        handler()
        closeMe()
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }} > {name} </h1>
            <h4> Description </h4>
            <p> {description} </p>
            <h4> Current Status </h4>
            <Badge text={status} />
            <h5> Change status </h5>
            {
                options.map(option => <button onClick={close(option.handler)}>{`Make it '${option.name}'`}</button>)
            }
            {
                contributors.map(contributor => (
                    <div>
                        <h5> {contributor.type} </h5>
                        <Avatar name={contributor.email} picture={contributor.picture} /> <p> {contributor.name} </p>
                        <br/>
                    </div>
                ))
            }
        </div>
    )
}

const TaskHeader = ({name = '', description = '', status = ''}) => (
    <div>
        <div style={style.taskName}>
            <h2> {name} </h2>
            <p> {description} </p>
        </div>
    </div>
)

export { TaskHeader, TaskHeaderExtended }
