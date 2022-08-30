const userRoute = require('express').Router()
const userController = require('../../controller/userController/userController')

userRoute.get('/', userController.List)
userRoute.post('/login', userController.login)
userRoute.post('/register', userController.register)

module.exports = userRoute