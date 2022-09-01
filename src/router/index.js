const appRouter = require('express').Router()
const { IsUser } = require('../middleware/userMiddleware')
const adminRoute = require('../router/adminRouter/auth/admin.route')
const categoryRoute = require('../router/adminRouter/category.route.js')
const productRoute = require('../router/adminRouter/product.route')
const cartRoute = require('./userRouter/cartRoute')
const orderRoute = require('./userRouter/order.route')
const userRoute = require('./userRouter/user.route')
const AdminOrderRoute = require('./adminRouter/order.route')
const UserCategoryRoute = require('./userRouter/category.route')
const ProductRouteUser = require('./userRouter/product.route')



/*user route */
appRouter.use('/user', userRoute)
appRouter.use('/cart', IsUser, cartRoute)
appRouter.use('/order', IsUser, orderRoute)
appRouter.use('/product', ProductRouteUser)
appRouter.use('/category', UserCategoryRoute)


/*admin route*/
appRouter.use('/admin', adminRoute)
appRouter.use('/category', categoryRoute)
appRouter.use('/admin/product', productRoute)
appRouter.use('/admin/order', AdminOrderRoute)





    

module.exports = appRouter
