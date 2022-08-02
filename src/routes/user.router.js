const Router = require('koa-router')

const { register, login } = require('../controller/user.controller')
const router = new Router()

router.prefix('/users')

router.post('/register', register)
router.post('/login', login)

module.exports = router
