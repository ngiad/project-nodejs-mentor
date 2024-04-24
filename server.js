import express from "express"
import Dotenv from "dotenv"
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import indexRouter from "./routers/index.js";
import connectMongodb from "./dbs/init.mongodb.js";

    
const __dirname = dirname(fileURLToPath(import.meta.url));
Dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

app.use("/images",express.static(path.join(__dirname,'image')));
app.use("/",express.static(path.join(__dirname, 'pages')))
app.use("/css",express.static(path.join(__dirname, 'styles')))

app.use("/api",indexRouter)


connectMongodb(process.env.CONNECTSTRING).then((data) => {
    console.log(data.message)
    app.listen(PORT,() => console.log("server is running on PORT :", PORT))
})
.catch((err) => {
    console.log(err)
})
