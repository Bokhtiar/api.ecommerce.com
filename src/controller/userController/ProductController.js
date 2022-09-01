const products = require('../../models/products.model')
const { Host} = require("../../helplers/index");

/**-----------categories ways product show ------------- */
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


/**-----------product list show with paginate */
const Paginate = async (req, res, next) => {
  try {
    let currentPage = parseInt(req.query.page) || 1
    let itemPerPage = 12
    const items = [];
    const results = await products.find()
                          .skip((itemPerPage * currentPage) - itemPerPage)
                          .limit(itemPerPage);
    let totalProduct = await products.countDocuments()
    let totalPage = parseInt(totalProduct / itemPerPage)

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
      totalPage: totalPage,
      currentPage: currentPage,
      itemPerPage: itemPerPage
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/**----------product list without paginate ------------------- */
const ProductList = async (req, res, next) => {
  try {
   
    const items = [];
    const results = await products.find()
              
   

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
};


/*-----------------*/
module.exports = {
    CategoryProduct,
    Paginate,
    ProductList
}