import ProductServices from "../services/products.service.js";

class ProductsController {
  getProducts = async (req, res, next) =>
    (await ProductServices.getProducts(req.query.category)).send(res);

  getProductDetail = async (req, res, next) =>
    (await ProductServices.getProductDetail(req.params.id)).send(res);

  searchProduct = async (req, res, next) =>
    (await ProductServices.searchProduct(req.query.title)).send(res);
}
export default ProductsController;
