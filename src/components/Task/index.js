import React from 'react'

import Avatar from '../Avatar'
import TaskHeader from '../TaskHeader'
import Contributors from '../Contributors'

const style = {
    task: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        display: 'inline-block',
        borderRadius: '5%',
        width: '320px',
        textAlign: 'top',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        padding: '10px'
    }
}

const Task = (props) => (
    <div style={style.task}>
        <TaskHeader {...props} />
        <hr/>
        <Contributors users={props.contributors} />
    </div>
)

export default Task
