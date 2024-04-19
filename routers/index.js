import { Router } from "express";
import productsRouter from "./products.js";

const indexRouter = Router()

indexRouter.use("/products", productsRouter)


export default indexRouter