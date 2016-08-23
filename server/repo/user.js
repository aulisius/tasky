module.exports = db => ({
    add: (user) => db.none('INSERT INTO users(email, picture, name) VALUES(${email}, ${picture}, ${name})', user),

    findByEmail: email => db.oneOrNone('SELECT * FROM users WHERE email LIKE $1', email),

    all: () => db.any('SELECT * FROM users')
})
