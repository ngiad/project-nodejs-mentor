import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const UserSchema = mongoose.Schema({
    username : String,
    password : String,
    fullname : String
})

UserSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next()
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(this.password,salt)    
    this.password = hashPassword
    next()
})

const UserModel = mongoose.model("users",UserSchema)
export default UserModel