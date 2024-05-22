import { Router } from "express";
import ProductsController from "../controllers/products.controller.js";
import { wrap } from "../helper/wrapController.js";
import products from "../json.js";

const productsRouter = Router();
const { getProducts, getProductDetail, searchProduct } = wrap(
  new ProductsController()
);

function getTestProduct(req, res) {
  res.json(
    products.filter((item) =>  req.query.category ? item.category === req.query.category :  true)
  );
}

// productsRouter.get("/", getProducts)
productsRouter.get("/", getTestProduct);
productsRouter.get("/search", searchProduct);
productsRouter.get("/:id", getProductDetail);

export default productsRouter;
