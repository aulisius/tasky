import React from 'react'

import Lane from '../../components/Lane'
import Hidden from '../../components/Hidden'

import userService from '../../services/userService'

[
    {
        id: 1,
        assignee: 'demo@gmail.com',
        assigner: 'demo@gmail.com',
        name: 'demo task',
        description: 'demo task to be done',
        status: 'PENDING'
    }
]


//TODO create TaskExtendedView and show it in modal
//TODO add ability to change state of task
class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            tasks: []
        }

    }

    componentDidMount() {
        fetch('/api/tasks')
            .then(res => res.json())
            .then(tasks => Promise.all(tasks.map(task => userService.getUser(task.assignee)
                .then(assignee => {
                    assignee.type = 'Assignee'
                    if (task.assignee === task.assigner) {
                        task.contributors = [assignee]
                        return task
                    }
                    return userService.getUser(task.assigner)
                        .then(assigner => {
                            assigner.type = 'Assigner'
                            task.contributors = [assignee, assigner]
                            return task
                        })
                })
            ))
            )
            .then(values => this.setState({ tasks: values }))
            .catch(console.err)
    }


    render() {
        let { tasks } = this.state
        console.log(tasks)
        let pending = tasks.filter(task => task.status === 'PENDING')
        let current = tasks.filter(task => task.status === 'CURRENT')
        let completed = tasks.filter(task => task.status === 'COMPLETED')
        return (
            <div style={{
                width: '1000px',
                padding: '20px',
                margin: '0 auto'
            }}>
                <Hidden hide={pending.length === 0}>
                    <Lane title="Pending" tasks={pending} />
                </Hidden>
                <Hidden hide={current.length === 0}>
                    <Lane title="Current" tasks={current} />
                </Hidden>
                <Hidden hide={completed.length === 0}>
                    <Lane title="Completed" tasks={completed} />
                </Hidden>
            </div>
        );
    }
}


export default Home
