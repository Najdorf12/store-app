import User from "../models/user.model.js";
import Cart from "../models/cart.model.js";
import bycrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
//import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (userFound) return res.status(400).json(["The email already exist"]);

    const passwordHash = await bycrypt.hash(password, 10);
    const newCart = new Cart({
      user: req.body._id,
    });
    const newUser = new User({
      username,
      email,
      password: passwordHash,
      cart: newCart,
    });

    const userSaved = await newUser.save();
    const cartSaved = await newCart.save();

    const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      cart: cartSaved._id,
      isAuthenticated: true
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email }).populate("cart");
    if (!userFound) return res.status(400).json(["Invalid credentials"]);

    const isMatch = await bycrypt.compare(password, userFound.password);

    if (!isMatch) return res.status(400).json(["Invalid credentials."]);

    const token = await createAccessToken({ id: userFound._id });
    res.cookie("token", token);

    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      cart: userFound.cart,
      isAuthenticated: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    secure: true,
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id).populate("cart");
  if (!userFound) return res.status(400).json({ message: "User not found" });

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    cart: userFound.cart,
  });
};
