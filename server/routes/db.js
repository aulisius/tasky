const users = require('../repo/user')
const tasks = require('../repo/task')

const db = require('pg-promise')({
    extend: db => {
        db.users = users(db)
        db.tasks = tasks(db)
    }
})(process.env.DATABASE_URL)

module.exports = db
