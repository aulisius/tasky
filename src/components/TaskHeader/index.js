import React from 'react'

import Badge from '../Badge'

const style = {
    taskName: {
        display: 'block',
        padding: '0px'
    },
    sideways: {
        display: 'inline',
        margin: '0 auto'
    }

}

const TaskHeader = ({name = '', description = '', status = ''}) => {
    return (
        <div>
            <div style={style.taskName}>
                <h2> {name} </h2>
                <p> {description} </p>
            </div>
            <Badge text={status} />
            {
                //<Badge text="PRIORITY" />
            }
        </div>
    )
}

export default TaskHeader
