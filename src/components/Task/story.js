import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Task from './index'

const users = [
    {
        name: 'Faizaan',
        picture: 'https://placehold.it/64x64'
    },
    {
        name: 'Faizaan',
        picture: 'https://placehold.it/64x64'
    }
]

let assignee, assigner

assignee = assigner = {
    name: 'Faizaan',
    picture: 'https://placehold.it/64x64'
}


storiesOf('Task', module)
    .add('task in mini view', () =>
        <Task
            name="Demo task"
            description="Task to be completed"
            status="Pending"
            contributors={users}
            />
    )
    .add('task in full view', () =>
        <Task
            name="Demo task"
            description="Task to be completed"
            status="Pending"
            assignee={assignee}
            assigner={assigner}
            full={true}
            />
    )
