import ProductModel from "../models/product.model.js"

class ProductServices {
    getProducts = async (category) => {
        try {
            const query = category ? { category } : {}
            const data = await ProductModel.find(query)
            return {
                meta: {
                    success: true,
                    error: null,
                    code: "00",
                    statusCode: 200
                },
                data
            }
        } catch (error) {
            throw new Error(error.message)
        }
    }

    getProductDetail = async (id) => {
        try {
            if (!id) throw new Error("id undefined")
            const data = await ProductModel.findOne({ _id: id })
            return {
                meta: {
                    success: true,
                    error: null,
                    code: "00",
                    statusCode: 200
                },
                data
            }
        } catch (error) {
            throw new Error(error.message)
        }
    }

    searchProduct = async (title) => {
        try {
            if (!title) throw new Error("title undefined")
            const data = await ProductModel.find({ title: { $regex: title } })
            return {
                meta: {
                    success: true,
                    error: null,
                    code: "00",
                    statusCode: 200
                },
                data
            }
        } catch (error) {
            throw new Error(error.message)
        }
    }

}


export default new ProductServices()