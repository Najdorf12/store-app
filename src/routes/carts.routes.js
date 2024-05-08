import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getCart,
  updateCart,
} from "../controllers/carts.controller.js"; 

const router = Router();

router.get("/:id", authRequired, getCart);
router.put("/:id", authRequired, updateCart);

export default router;
