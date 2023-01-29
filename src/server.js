import express from "express";
import cors from "cors"
import AuthRouter from "./routes/AuthRouter.js";
import ProductsRouter from "./routes/ProductsRouter.js";
import AdminRouter from "./routes/AdminRouter.js";

const server = express()
server.use(cors())
server.use(express.json())


server.use([AuthRouter, ProductsRouter, AdminRouter]);


const port = process.env.PORT || 5005;
server.listen(port, () => console.log(`running on the p ${port}`))