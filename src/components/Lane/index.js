import React from 'react'

import Task from '../Task'
import Badge from '../Badge'

const Lane = ({tasks, title = 'Title', onChange}) => {
    const style = {
        lane: {
            display: 'inline-block',
            margin: '10px',
            border: '5px solid rgba(0, 0, 0, 0)',
            boxShadow: '4px 4px 8px 4px rgba(0,0,0,0.1)',
            padding: '10px'
        },
        taskList: {
            listStyleType: 'none',
            padding: '0px'
        },
        taskItem: {
            margin: '5px'
        },
        laneName: {
            textAlign: 'center'
        }
    }
    return (
        <div style={style.lane}>
            <div style={style.laneName}>
            <Badge text={title} />
            </div>
            <hr/>
            <ul style={style.taskList} >
                {
                    tasks.map(task => <li style={style.taskItem}> <Task {...task} onChange={onChange} /></li>)
                }
            </ul>
        </div>
    )
}

export default Lane
