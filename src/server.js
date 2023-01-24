import express from "express";
import cors from "cors"

const server = express()
server.use(cors())
server.use(express.json())






const PORT = 5005;
server.listen(PORT, ()=> console.log(`running on the p ${PORT}`))