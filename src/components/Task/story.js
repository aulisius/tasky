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

storiesOf('Task', module)
    .add('simple task', () =>
        <Task
            name="Demo task"
            description="Task to be completed"
            status="Pending"
            contributors={users}
            />
    )
