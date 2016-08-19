import React from 'react'
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'

const User = ({name, picture}) => (
    <Chip>
        <Avatar src={picture} />
        {name}
    </Chip>
)

export default User
