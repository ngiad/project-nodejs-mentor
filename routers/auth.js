import { Router } from "express";
import { wrap } from "../helper/wrapController.js";
import AuthController from "../controllers/auth.controller.js";


const authRouter = Router();
const { login,resiter } = wrap(
  new AuthController()
);

authRouter.post("/login", login)
authRouter.post("/resiter",resiter)
export default authRouter;
