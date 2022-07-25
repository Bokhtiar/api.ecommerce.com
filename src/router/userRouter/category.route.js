const UserCategoryRoute = require('express').Router()
const ProductController = require('../../controller/userController/ProductController')


    UserCategoryRoute.get('/product/:id', ProductController.CategoryProduct)

module.exports = UserCategoryRoute