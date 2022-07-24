const AdminOrderRoute = require('express').Router()
const OrderController = require('../../controller/adminController/orderController')

    AdminOrderRoute.get('/', OrderController.Index);

module.exports = AdminOrderRoute
