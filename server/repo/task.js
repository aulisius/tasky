module.exports = db => ({
    add: task => db.none('INSERT INTO tasks(assignee, assigner, name, description, status) VALUES(${assignee}, ${assigner}, ${name}, ${description}, ${status})', task),

    findByAssignee: email => db.any('SELECT * FROM tasks WHERE assignee LIKE $1', email),

    findByAssigner: email => db.any('SELECT * FROM tasks WHERE assigner LIKE $1', email),

    all: () => db.any('SELECT * FROM tasks')
})
