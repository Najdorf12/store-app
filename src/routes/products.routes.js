import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
  getProductByCategory,
  getProductByName
} from "../controllers/products.controller.js"; 
import { createProductSchema } from "../schemas/product.schema.js";
import { validateSchema } from "../middlewares/validateSchema.js";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProduct);

router.post("/", authRequired, validateSchema(createProductSchema), createProduct);
router.put("/:id", authRequired, updateProduct);
router.delete("/:id", authRequired, deleteProduct);

router.get("/category/:categoryName", getProductByCategory)
router.get("/leaked/:name", getProductByName)


export default router;
