import { Router } from "express";
import { signIn, signUp } from "../controllers/Auth.js";
import { signInSchema, signUpSchema } from "../src/schemas/AuthSchema.js";
import validatorSchema from "../middlewares/validatorSchema.js";

const AuthRouter = Router();

AuthRouter.post("/sign-up", validatorSchema(signUpSchema), signUp);
AuthRouter.post("/sign-in", validatorSchema(signInSchema), signIn);

export default AuthRouter;