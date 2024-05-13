import { Router } from "express";
import ProductsController from "../controllers/products.controller.js"
import { wrap } from "../helper/wrapController.js";

const productsRouter = Router()
const { getProducts, getProductDetail,searchProduct } = wrap(new ProductsController()) 


productsRouter.get("/", getProducts)
productsRouter.get("/search", searchProduct)
productsRouter.get("/:id", getProductDetail)

export default productsRouter