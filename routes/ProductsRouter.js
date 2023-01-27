import { Router } from "express";
import { getProduct, saveProduct } from "../controllers/Products.js";
import adminAuth from "../middlewares/adminAuth.js";
import validatorSchema from "../middlewares/validatorSchema.js";
import { ProductSchema } from "../schemas/ProductSchema.js";

const ProductsRouter = Router();


ProductsRouter.post("/products", adminAuth, validatorSchema(ProductSchema), saveProduct);
// ProductsRouter.delete("/products/:id", adminAuth, deleteProduct);
ProductsRouter.get("/products", getProduct);

export default ProductsRouter;