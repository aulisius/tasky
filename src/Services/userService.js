import HTTP from 'http-with-fetch'

class userService extends HTTP {
    constructor() {
        super('/api/users');
        this.addUser = this.addUser.bind(this)
        this.getUsers = this.getUsers.bind(this)
        this.getUser = this.getUser.bind(this)
    }

    addUser(data) {
        return this.post('/', JSON.stringify(data), this.add('headers', {'content-type': 'application/json'}))
    }

    getUser(email) {
        return this.get(`/${email}`)
    }

    getUsers() {
        return this.get('/')
    }

}

export default userService
