const ProductRouteUser = require('express').Router()
const ProductController = require('../../controller/userController/ProductController')

    ProductRouteUser.get('/', ProductController.Paginate);
    ProductRouteUser.get('/all', ProductController.ProductList);
    
module.exports = ProductRouteUser
