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

router.get('*', ctx => send(ctx, path.join(__dirname, '../public/index.html')))

app.use(serve(path.join(__dirname + '../public')))
    .use(logger())
    .use(convert(bodyParser()))
    .use(tasks.routes())
    .use(users.routes())
    .use(router.routes())

app.listen(3000, () => console.log('Server started'))
