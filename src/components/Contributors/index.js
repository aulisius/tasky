import React from 'react'

import Avatar from '../Avatar'

const Contributors = ({users}) => {
    const style = {
        list: {
            'list-style-type': 'none'
        },
        listItem: {
            float: 'right',
            margin: '0px 5px'
        }
    }
    return (
        <ul style={style.list}>
            {
                users.map(user => <li style={style.listItem}> <Avatar size={48} name={user.name} picture={user.picture} /> </li>)
            }
        </ul>
    )
}

export default Contributors
