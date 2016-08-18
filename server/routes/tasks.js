const router = require('koa-router')({
    prefix: '/api/tasks'
})

const db = require('./db')

router.post(
    '/',
    ctx => db.tasks
        .add(ctx.request.body)
        .then(() => ctx.status = 201)
        .catch(console.error)
)

router.get(
    '/',
    ctx => db.tasks
        .all()
        .then((data) => ctx.body = JSON.stringify(data))
        .then(() => ctx.status = 200)
)

router.get(
    '/assignee/:email',
    ctx => db.tasks
        .findByAssignee(ctx.params.email)
        .then(data => ctx.body = data)
        .then(() => ctx.status = 200)
)

router.get(
    '/assigner/:email',
    ctx => db.tasks
        .findByAssigner(ctx.params.email)
        .then(data => ctx.body = data)
        .then(() => ctx.status = 200)
)

module.exports = router
