import React from 'react'
import { storiesOf } from '@kadira/storybook'

import AccessDenied from './index'

storiesOf('Access Denied', module)
  .add('when access is denied', () => <AccessDenied />)
