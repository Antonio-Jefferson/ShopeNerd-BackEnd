import { Router } from "express";
import { signUp } from "../controllers/Auth.js";
import { signUpSchema } from "../schemas/AuthSchema.js";
import validatorSchema from "../middlewares/validatorSchema.js";

const AuthRouter = Router();

AuthRouter.post("/sign-up", validatorSchema(signUpSchema), signUp);

export default AuthRouter;