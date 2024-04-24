import ProductServices from "../services/products.service.js"


class ProductsController {
    getProducts = async (req, res, next) => {
        try {
            const respose = await ProductServices.getProducts(req.query.category)
            res.status(respose.meta.statusCode || 200).json(respose)
        } catch (error) {
            res.status(400).json({
                meta: {
                    success: false,
                    error: error,
                    code: "01"
                },
                data: null
            })
        }
    }

    getProductDetail = async (req, res, next) => {
        try {
            const respose = await ProductServices.getProductDetail(req.params.id)
            res.status(respose.meta.statusCode || 200).json(respose)
        } catch (error) {
            res.status(400).json({
                meta: {
                    success: false,
                    error: error,
                    code: "01"
                },
                data: null
            })
        }
    }


    searchProduct = async (req, res, next) => {
        try {
            const respose = await ProductServices.searchProduct(req.query.title)
            res.status(respose.meta.statusCode || 200).json(respose)
        } catch (error) {
            res.status(400).json({
                meta: {
                    success: false,
                    error: error,
                    code: "01"
                },
                data: null
            })
        }
    }
}


export default ProductsController