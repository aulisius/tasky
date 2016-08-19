import React from 'react'
import { storiesOf } from '@kadira/storybook'
import {
    getMuiTheme,
    MuiThemeProvider
} from 'material-ui/styles'

import User from './index'

storiesOf('User Badge', module)
    .add('simple user badge', () =>
        <MuiThemeProvider muiTheme={getMuiTheme()} >
            <User
                name="Faizaan"
                picture="https://placehold.it/128x128"
                />
        </MuiThemeProvider>
    )
