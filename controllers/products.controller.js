import ProductServices from "../services/products.service.js"


class ProductsController {
    getProducts = async (req, res, next) => {
        try {
            const respose = await ProductServices.getProducts(req.query.category)
            res.status(respose.meta.statusCode || 200).json(respose)
        } catch (error) {
            next({message : error.message,code : "01",statusCode : 400})
        }
    }

    getProductDetail = async (req, res, next) => {
        try {
            const respose = await ProductServices.getProductDetail(req.params.id)
            res.status(respose.meta.statusCode || 200).json(respose)
        } catch (error) {
            next({message : error.message,code : "01",statusCode : 400})
        }
    }


    searchProduct = async (req, res, next) => {
        try {
            const respose = await ProductServices.searchProduct(req.query.title)
            res.status(respose.meta.statusCode || 200).json(respose)
        } catch (error) {
            next({message : error.message,code : "01",statusCode : 400})
        }
    }
}


export default ProductsController