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

app.use(express.json())

app.use("/images",express.static(path.join(__dirname,'image')));
app.use("/",express.static(path.join(__dirname, 'pages')))
app.use("/css",express.static(path.join(__dirname, 'styles')))
app.use("/scripts",express.static(path.join(__dirname,'scripts')));

app.use("/api",indexRouter)


app.use((err,req,res,next) =>{
    const statusCode = err.statusCode || 500
    const code = err.code || "01"

    if(err.message.includes("Cast to ObjectId failed for value")) err.message = "Notfound!"
    return res.status(statusCode).json({
        meta: {
            success: false,
            error: err?.message ?? "Error",
            code
        },
        data: null
    })
})


connectMongodb(process.env.CONNECTSTRING).then((data) => {
    console.log(data.message)
    app.listen(PORT,() => console.log(`running on http://localhost:${PORT}/`))
})
.catch((err) => {
    console.log(err)
})
