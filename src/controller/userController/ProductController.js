const products = require('../../models/products.model')
const { Host} = require("../../helplers/index");

const CategoryProduct = async(req, res, next)=>{
    try {

        const items = [];
        const {id} = req.params;
        const results = await products.find()
                              .where('category_id', id)

        if (results && results.length > 0) {
          for (let i = 0; i < results.length; i++) {
            const element = results[i];
            
            items.push({
              _id: element._id,
              name: element.name,
              image: element.image
                ? Host(req) + "uploads/product/" + element.image
                : null,
              category_id: element.category_id,
              price: element.price,
              description: element.description,
              product_status: element.product_status,
            });
          }
        }
    
        res.status(200).json({
          status: true,
          data: items,
        });
      } catch (error) {
        console.log(error);
        next(error);
      }
}

module.exports = {
    CategoryProduct
}