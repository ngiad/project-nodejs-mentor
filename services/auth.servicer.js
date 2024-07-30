import { BadRequest } from "../core/response.error.js";
import { SuccessResponse } from "../core/response.success.js";
import UserModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"

const generateToken = (obj) => {
  return jwt.sign(obj, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

const generateRefreshToken = (obj) => {
  return jwt.sign(obj, process.env.JWT_SECRET, {
    expiresIn: "999d",
  });
};

class AuthService {
  login = async (userLogin) => {
    const { username, password, isSaveAccount } = userLogin;
    if (!username || !password)
      throw new BadRequest("Thiếu thông tin!");

    const userExits = await UserModel.findOne({
      username,
    });
    if (!userExits) throw new BadRequest("Tài khoản không tồn tại");

    const passIssCorrect = await bcrypt.compare(password,userExits.password)
    if(!passIssCorrect)throw new BadRequest("Mật khẩu chưa chính xác!");
    const output = Object.keys(userExits.toObject()).filter((item) => !(item === "password")).reduce((prev,next) => {
      const obj = userExits.toObject()
      return {...prev,[next] : obj[next]}
    },{})
    
    let refreshToken = null
    if(isSaveAccount)refreshToken = generateRefreshToken(output);
    const token = generateToken(output);
    return new SuccessResponse({ ...output, refreshToken, token });
  };

  resiter = async (newUserBody) => {
    const { username, password, fullname } = newUserBody;
    if (!username || !password || !fullname)
      throw new BadRequest("Thiếu thông tin!");
    const userExits = await UserModel.findOne({
      username,
    });
    if (userExits) throw new BadRequest("Tài khoản đã tồn tại");
    const newUser = new UserModel(newUserBody);
    await newUser.save();
    const output = Object.keys(newUser.toObject()).filter((item) => !(item === "password")).reduce((prev,next) => {
      const obj = newUser.toObject()
      return {...prev,[next] : obj[next]}
    },{})
    const refreshToken = generateRefreshToken(output);
    const token = generateToken(output);
    return new SuccessResponse({ ...output, refreshToken, token });
  };
}
export default new AuthService();
