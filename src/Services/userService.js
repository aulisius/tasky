import HTTP from './fetch'

class UserService extends HTTP {
    constructor(base) {
        super(base);
        this.addUser = this.addUser.bind(this)
        this.getUsers = this.getUsers.bind(this)
        this.getUser = this.getUser.bind(this)
    }

    addUser(data) {
        return this.post('/', JSON.stringify(data), 'json', this.add('headers', {'content-type': 'application/json'}))
    }

    getUser(email) {
        return this.get(`/${email}`)
    }

    getUsers() {
        return this.get('/')
    }

}

let userService = new UserService('/api/users')

export default userService
