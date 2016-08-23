import React from 'react'

import Task from '../Task'

const Lane = ({tasks}) => {
    const style = {
        lane: {
            display: 'inline-block',
            margin: '10px',
            border: '1px solid',
            padding: '10px'
        },
        taskList: {
            listStyleType: 'none',
            padding: '0px'
        },
        taskItem: {
            margin: '5px'
        }
    }
    return (
        <div style={style.lane}>
            <header> Lane name </header>
            <hr/>
            <ul style={style.taskList} >
                {
                    tasks.map(task => <li style={style.taskItem}> <Task {...task} /></li>)
                }
            </ul>
        </div>
    )
}

export default Lane
