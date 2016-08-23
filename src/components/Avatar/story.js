import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Avatar from './index'

storiesOf('User Badge', module)
    .add('badge with default size', () =>
        <Avatar
            name="Faizaan"
            picture="https://placehold.it/128x128"
            />
    )
    .add('badge with size set', () =>
        <Avatar
            name="Faizaan"
            picture="https://placehold.it/128x128"
            size={48}
            />
    )
