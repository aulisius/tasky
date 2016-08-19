import React from 'react'
import { storiesOf } from '@kadira/storybook'
import {
    getMuiTheme,
    MuiThemeProvider
} from 'material-ui/styles'

import Task from './index'

storiesOf('Task', module)
    .add('simple task', () =>
        <MuiThemeProvider muiTheme={getMuiTheme()} >
            <Task
                name ="Demo task"
                description = "Demo task to be done"
                />
        </MuiThemeProvider>
    )
