import React from 'react'

import Badge from '../Badge'
import Alternate from '../Alternate'

const style = {
    taskName: {
        display: 'block',
        padding: '0px'
    }
}

const TaskHeader = ({name = '', description = '', status = '', fullView = false}) => {

    const full = (
        <div style={style.taskName}>
            <h1 style={{textAlign: 'center'}} > {name} </h1>
            <h4> description </h4>
            <p> {description} </p>
            <h4> Status </h4>
            <Badge text={status} />
        </div>
    )

    const mini = (
        <div style={style.taskName}>
            <h2> {name} </h2>
            <p> {description} </p>
        </div>
    )

    return (
        <div>
            <Alternate
                original={mini}
                alternate={full}
                alter={fullView}
                />
        </div>
    )
}

export default TaskHeader
