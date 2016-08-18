import React from 'react'

import {
    Link
} from 'react-router'

import {
    Table
} from 'react-materialize'

import Hidden from '../../Common/Components/Hidden.jsx'

const UserList = ({ legends, users, target }) => (
    <Table
        striped={true}
        bordered={true}
        >
        <thead>
            <tr>
                { legends.map((legend, index) => <th key={index}> {legend} </th>) }
            </tr>
        </thead>
        <tbody>
            {
                users.map(({
                    username,
                    role
                }) =>
                    <tr key={username}>
                        <td><Link to={`${target}/${username}`}>{username}</Link></td>
                        <td>{role}</td>
                    </tr>
                )
            }
        </tbody>
    </Table>
)

UserList.propTypes = {
    legends: React.PropTypes.array.isRequired,
    users: React.PropTypes.array.isRequired
}

export default UserList