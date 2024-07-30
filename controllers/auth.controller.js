import authServicer from "../services/auth.servicer.js";

class AuthController {
  login = async (req, res, next) =>
    (await authServicer.login(req.body)).send(res);
  resiter = async (req, res, next) =>
    (await authServicer.resiter(req.body)).send(res);
}
export default AuthController;
