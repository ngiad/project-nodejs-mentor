import { Router } from "express";
import ProductsController from "../controllers/products.controller.js"

const productsRouter = Router()
const { getProducts, getProductDetail,searchProduct } = new ProductsController()


productsRouter.get("/", getProducts)
productsRouter.get("/search", searchProduct)
productsRouter.get("/:id", getProductDetail)

export default productsRouter