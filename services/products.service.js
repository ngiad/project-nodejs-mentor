import ProductModel from "../models/product.model.js";

class ProductServices {
  getProducts = async (category) => {
    const query = category ? { category } : {};
    const data = await ProductModel.find(query);
    return {
      meta: {
        success: true,
        error: null,
        code: "00",
        statusCode: 200,
      },
      data,
    };
  };

  getProductDetail = async (id) => {
    if (!id) throw new Error("id undefined");
    const data = await ProductModel.findOne({ _id: id });
    return {
      meta: {
        success: true,
        error: null,
        code: "00",
        statusCode: 200,
      },
      data,
    };
  };

  searchProduct = async (title) => {
    if (!title) throw new Error("title undefined");
    const data = await ProductModel.find({ title: { $regex: title } });
    return {
      meta: {
        success: true,
        error: null,
        code: "00",
        statusCode: 200,
      },
      data,
    };
  };
}

export default new ProductServices();
