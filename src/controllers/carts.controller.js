import Cart from "../models/cart.model.js";

export const getCart = async (req, res) => {
  const cart = await Cart.findById(req.params.id);
  if (!cart) return res.status(404).json({ message: "Cart not found" });
  res.json(cart);
};

export const updateCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const cart = await Cart.findById(req.params.id);
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const productFound = cart.products.find(
      (product) => product.productId?.toString() === productId
    );
    const index = cart.products.findIndex(
      (product) => product.productId?.toString() === productId
    );

    if (!productFound) {
      cart.products.push({
        productId,
        quantity,
      });
    } else {
      cart.products[index] = {
        productId,
        quantity,
      };
    }
    await cart.save();
    res.json(cart);
  } catch (error) {
    res
      .status(500)
      .json({ status: "Error", code: 500, message: error.message });
  }
};

export const deleteProductCart = async (req, res) => {
  console.log(req.body)
  const { productId } = req.body;
  try {
    const cart = await Cart.findById(req.params.id);
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const productFound = cart.products.find(
      (product) => product.productId?.toString() === productId
    );
    const index = cart.products.findIndex(
      (product) => product.productId?.toString() === productId
    );
    if (!productFound)
      return res.status(404).json({ message: "Product not found" });
    if (productFound) {
      cart.products.splice(index, 1);
    }

    await cart.save();
    return res.json(cart);
  } catch (error) {
    console.error(error);
  }
};
