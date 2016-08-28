const router = require('koa-router')({
    prefix: '/api/users'
})

const db = require('./db')

router.post(
    '/',
    ctx => db.users
        .add(JSON.parse(ctx.request.body))
        .then(() => ctx.status = 201)
        .catch(console.error)
)

router.get(
    '/',
    ctx => db.users
        .all()
        .then(data => ctx.response.body = JSON.stringify(data))
        .then(() => ctx.status = 200)
)

router.get(
    '/:email',
    ctx => db.users
        .findByEmail(ctx.params.email)
        .then(data => {
            if (data)
                ctx.response.body = data
            else
                ctx.response.body = JSON.stringify({})
        })
        .then(() => ctx.status = 200)
        .catch(console.error)
)

module.exports = router
