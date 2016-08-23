import React from 'react'

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
                .then(assignee => userService.getUser(task.assigner)
                    .then(assigner => {
                        task.contributors = [assignee, assigner]
                        return task
                    })
                )
            ))
            )
            .then(values => this.setState({tasks: values}))
            .catch(console.err)
    }


    render() {
        return (
            <div>
                {JSON.stringify(this.state.tasks) }
            </div>
        );
    }
}


export default Home
