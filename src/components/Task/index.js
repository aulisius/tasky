import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import User from '../User/index'

const Task = ({name, description}) => (
  <Card>
    <CardHeader
      title={name}
      avatar="https://placehold.it/128x128"
    />
    <CardTitle title={name} subtitle={description} />
    <CardText>
        Assignee <User name="Faizaan" picture="https://placehold.it/128x128" />
        Assigner <User name="Faizaan" picture="https://placehold.it/128x128" />
    </CardText>
  </Card>
)

export default Task
