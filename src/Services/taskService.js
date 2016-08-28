import HTTP from './fetch'

class TaskService extends HTTP {
    constructor(base) {
        super(base);
        this.addTask = this.addTask.bind(this)
        this.getTasks = this.getTasks.bind(this)
        this.getTask = this.getTask.bind(this)
    }

    addTask(data) {
        return this.post('/', JSON.stringify(data), 'text', this.add('headers', {'content-type': 'application/json'}))
    }

    getTask(id) {
        return this.get(`/${id}`)
    }

    updateTask(id, status) {
        return this.method(`/${id}/${status}`, 'text', 'PUT')
    }

    getTasks() {
        return this.get('/')
    }

}

let taskService = new TaskService('/api/tasks')

export default taskService
