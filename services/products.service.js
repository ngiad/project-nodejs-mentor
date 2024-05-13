import  {  ValidationEmpty } from "../core/response.error.js";
import { Ok, SuccessResponse } from "../core/response.success.js";
import ProductModel from "../models/product.model.js";


class ProductServices {
  getProducts = async (category) => {
    const query = category ? { category } : {};
    const data = await ProductModel.find(query);
    return new Ok(data);
  };

  getProductDetail = async (id) => {
    if (!id) throw new ValidationEmpty("id empty!");
    const data = await ProductModel.findOne({ _id: id });
    return new SuccessResponse(data);
  };

  searchProduct = async (title) => {
    if (!title) throw new ValidationEmpty("title empty string!");
    const data = await ProductModel.find({ title: { $regex: title } });
    return new SuccessResponse(data);
  };
}

export default new ProductServices();
