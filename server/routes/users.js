const router = require('koa-router')({
    prefix: '/api/users'
})

const db = require('./db')

router.post(
    '/',
    ctx => db.users
        .add(ctx.request.body)
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
    (ctx, next) => next().then(() => ctx.status = 200),
    ctx => db.users
        .findByEmail(ctx.params.email)
        .then(data => ctx.body = data)
        .catch(console.error)
)

module.exports = router
