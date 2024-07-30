import { Router } from "express";
import productsRouter from "./products.js";
import authRouter from "./auth.js";

const indexRouter = Router()

indexRouter.use("/products", productsRouter)
indexRouter.use("/auth", authRouter)

export default indexRouter