import React from 'react'

import Avatar from '../Avatar'
import TaskHeader from '../TaskHeader'
import Contributors from '../Contributors'

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
    taskFull: {
        boxShadow: '4px 4px 8px 4px rgba(0,0,0,0.2)',
        width: '640px',
        padding: '50px'
    },
    btn: {
        float: 'left'
    }
}

const Task = (props) => {

    const miniView = (
        <div style={style.taskMini}>
            <TaskHeader {...props} />
            <hr/>
            <button style={style.btn} > Status </button>
            <Contributors users={props.contributors} />
        </div>
    )

    const fullView = (
        <div style={style.taskFull}>
            <TaskHeader {...props} />
            <hr />
        </div>
    )

    return props.full ? fullView : miniView
}

export default Task
