import React from 'react'
import { storiesOf } from '@kadira/storybook'

import PageNotFound from './index'

storiesOf('404', module)
  .add('when route not found', () => <PageNotFound />)
