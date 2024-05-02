import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";

export const getCart = async (req, res) => {
  const cart = await Cart.findById(req.params.id);
  if (!cart) return res.status(404).json({ message: "Cart not found" });
  res.json(cart);
};

export const deleteCart = async (req, res) => {
  const cart = await Cart.findByIdAndDelete(req.params.id);
  if (!cart) return res.status(404).json({ message: "Cart not found" });
  res.json(cart);
};

export const updateCart = async (req, res) => {
  try {
    /* Ejemplo del body que envias */
    /* {"productId": "asd456wwer", "quantity": 12} */
    const { productId, quantity } = req.body;
    const cart = await Cart.findById(req.params.id);
    const productFound = cart.products.find(
      (product) => product.productId === productId
    );

    if (productFound) {
      let index = cart.products.indexOf(productFound);
      productFound.quantity = quantity;
      cart.products[index] = productFound;
      await cart.save();
    } else {
      const newProduct = {
        productId: productId,
        quantity: quantity,
      };
      cart.products.push(newProduct);
      await cart.save();
    }

    if (!cart) return res.status(404).json({ message: "Cart not found" });
    res.json(cart);
  } catch (error) {
    res
      .status(500)
      .json({ status: "Error", code: 500, message: error.message });
  }
};
