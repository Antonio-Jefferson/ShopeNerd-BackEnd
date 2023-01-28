import { Router } from "express";
import adminAuth from "../middlewares/adminAuth.js";



const AdminRouter = Router();

AdminRouter.post("/admin", adminAuth, (_, res) => res.send(true));

export default AdminRouter;