import React from 'react'

import taskService from '../../services/taskService'

class NewTask extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            status: 'PENDING',
            assigner: sessionStorage.getItem('tasky-user-logged-in'),
            assignee: ''
        }

        this.setName = this.setName.bind(this)
        this.setDesc = this.setDesc.bind(this)
        this.setAssignee = this.setAssignee.bind(this)
        this.addTask = this.addTask.bind(this)
    }

    setName(event) {
        this.setState({
            name: event.target.value
        })
    }


    setDesc(event) {
        this.setState({
            description: event.target.value
        })
    }

    setAssignee(event) {
        this.setState({
            assignee: event.target.value
        })
    }

    addTask() {
        console.log(this.state)
        taskService
            .addTask(this.state)
            .then(() => {
                this.context.router.push('/home')
            })
            .catch(console.error)

        return false
    }

    render() {
        let {name, description, assignee} = this.state
        return (
            <div>
                <form onSubmit={() => false}>
                    Task name: <br/>
                    <input type="text" name="name" value={name} onInput={this.setName}/><br/>
                    Task desc: <br/>
                    <input type="text" name="desc" value={description} onInput={this.setDesc} /><br/>
                    Assigned to (email): <br/>
                    <input type="email" name="desc" value={assignee} onInput={this.setAssignee} /><br/>
                    <button type="button" onClick={this.addTask}> Create task </button>
                </form>
            </div>
        )
    }
}

NewTask.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default NewTask
