const ProductRouteUser = require('express').Router()
const ProductController = require('../../controller/userController/ProductController')

    ProductRouteUser.get('/', ProductController.Paginate)
    ProductRouteUser.get('/:id', ProductController.show)
    
module.exports = ProductRouteUser
