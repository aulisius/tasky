import React from 'react'
import { Table } from 'react-materialize'

const UserDetails = ({ user }) => (
    <Table bordered={true} hoverable={true} centered={true}>
        <tbody>
            <tr>
                <td><b>Username</b></td>
                <td>{user.username}</td>
            </tr>
            <tr>
                <td><b>Role</b></td>
                <td>{user.role}</td>
            </tr>
        </tbody>
    </Table>
)

export default UserDetails