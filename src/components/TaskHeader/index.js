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

const TaskHeaderExtended = ({name = '', description = '', status = '', contributors = []}) => (
    <div>
        <h1 style={{ textAlign: 'center' }} > {name} </h1>
        <h4> Description </h4>
        <p> {description} </p>
        <h4> Status </h4>
        <Badge text={status} />
        {
            contributors.map(contributor => {
                return (
                    <div>
                        <h5> {contributor.type} </h5>
                        <Avatar name={contributor.email} picture={contributor.picture} /> <p> {contributor.name} </p>
                        <br/>
                    </div>
                )
            })
        }
    </div>
)

const TaskHeader = ({name = '', description = '', status = ''}) => (
    <div>
        <div style={style.taskName}>
            <h2> {name} </h2>
            <p> {description} </p>
        </div>
    </div>
)

export { TaskHeader, TaskHeaderExtended }
