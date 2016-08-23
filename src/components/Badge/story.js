import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Badge from './index'

storiesOf('Badge', module)
    .add('status badge', () =>
     <Badge
        text='Status'
     />
    )
