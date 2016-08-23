import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Lane from './index'

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

const tasks = [
    {
        name: 'Demo task 1',
        description: 'Task to be done',
        status: 'Pending',
        contributors: users
    },
    {
        name: 'Demo task 2',
        description: 'Task to be done',
        status: 'Pending',
        contributors: users
    }
]

storiesOf('Lane', module)
    .add('simple task lane', () =>
        <Lane tasks={tasks} />
    )
    .add('multiple lanes', () => {
        return (
            <div>
                <Lane tasks={tasks} />
                <Lane tasks={tasks} />
                <Lane tasks={tasks} />
            </div>
        )
    })
