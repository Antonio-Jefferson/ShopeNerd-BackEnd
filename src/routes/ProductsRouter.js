import { Router } from "express";
import { getProduct, buyProduct, saveProduct } from "../controllers/Products.js";
import adminAuth from "../middlewares/adminAuth.js";
import regularAuth from "../middlewares/regularAuth.js";
import validatorSchema from "../middlewares/validatorSchema.js";
import { productSchema } from "../schemas/ProductSchema.js";

const ProductsRouter = Router();


ProductsRouter.post("/products", adminAuth, validatorSchema(productSchema), saveProduct);
// ProductsRouter.delete("/products/:id", adminAuth, deleteProduct);
ProductsRouter.put("/products", regularAuth, buyProduct);
ProductsRouter.get("/products", getProduct);
export default ProductsRouter;
