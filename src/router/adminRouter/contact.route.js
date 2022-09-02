const AdminContactRoute = require('express').Router()
const ContactController = require('../../controller/adminController/ContactController')
    
    AdminContactRoute.get('/', ContactController.List)
    AdminContactRoute.get('/status/:id', ContactController.Status)

module.exports = AdminContactRoute