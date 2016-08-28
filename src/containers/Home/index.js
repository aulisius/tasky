import React from 'react'

import Lane from '../../components/Lane'
import Hidden from '../../components/Hidden'

import userService from '../../services/userService'
import taskService from '../../services/taskService'

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

//TODO add ability to change state of task
class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            tasks: []
        }

        this.onChange = this.onChange.bind(this)

    }

    componentDidMount() {
        taskService
            .getTasks()
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
            .then(tasks => this.setState({ tasks: tasks }))
            .catch(console.error)
    }

    onChange(id, status) {
        taskService
            .updateTask(id, status)
            .then(() => {
                let { tasks } = this.state
                tasks.forEach(task => {
                    if (task.id === id) {
                        task.status = status.toUpperCase()
                    }
                })
                this.setState({ tasks: tasks })
            })
            .catch(console.error)
    }

    render() {
        let { tasks } = this.state
        console.log(tasks)
        const pending = tasks.filter(task => task.status === 'PENDING')
        const current = tasks.filter(task => task.status === 'CURRENT')
        const completed = tasks.filter(task => task.status === 'COMPLETED')
        return (
            <div style={{
                width: '1000px',
                padding: '20px',
                margin: '0 auto'
            }}>
                <Hidden hide={pending.length === 0}>
                    <Lane title="Pending" tasks={pending} onChange={this.onChange} />
                </Hidden>
                <Hidden hide={current.length === 0}>
                    <Lane title="Current" tasks={current} onChange={this.onChange} />
                </Hidden>
                <Hidden hide={completed.length === 0}>
                    <Lane title="Completed" tasks={completed} onChange={this.onChange} />
                </Hidden>
            </div>
        );
    }
}


export default Home
