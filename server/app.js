require('dotenv').config()

const send = require('koa-sendfile')
const logger = require('koa-logger')
const serve = require('koa-static')
const convert = require('koa-convert')
const bodyParser = require('koa-body')
const tasks = require('./routes/tasks')
const users = require('./routes/users')
const path = require('path')

const Koa = require('koa')
const Router = require('koa-router')

let router = new Router()
let app = new Koa()

router.get('*', (ctx, next) => {
    return send(ctx, path.join(__dirname, '..', 'index.html')).then(() => next())

})

const conditional = (ctx, next) => next().then(() => {
    console.log('MW')
    if (ctx.fresh) {
        ctx.status = 304
        ctx.body = null
    }
})

app.use(logger())
    .use(serve(path.join(__dirname, '../public')))
    .use(convert(bodyParser()))
    .use(conditional)
    .use(tasks.routes())
    .use(users.routes())
    .use(router.routes())

app.listen(process.env.PORT, () => console.log('Server started'))
