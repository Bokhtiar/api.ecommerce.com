const orders = require('../../models/order.model')

const Index = async(req, res, next) =>{
    try {
        const results = await orders.find()
        res.status(200).json({
            status: true,
            data: results,
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

module.exports ={Index}
    
