import Cart from "./Cart";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticated } from "../store/slices/isAuthenticated";
import { setUser } from "../store/slices/user";
import { useState, useEffect } from "react";
import axios from "../api/axios";
import { setCart } from "../store/slices/cart";

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productsInCart = cart.products?.map((product) => {
    const productFound = product.productId;
    const productos = products.find(
      (producto) => producto._id === productFound
    );
    return productos;
  });

  useEffect(()=> {
  },[])

  const logout = () => {
    axios
      .post("/auth/logout")
      .then((res) => {
        dispatch(setIsAuthenticated(false));
        dispatch(setUser({}));
        dispatch(setCart({}));
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <nav className="w-full  absolute z-50 flex justify-center items-center gap-2 px-4 py-4 xl:px-8  md:justify-end">
        <ul className="flex gap-4  mt-4 font-semibold font-text2 text-gray-200 text-lg lg:mr-20 lg:gap-7 lg:text-xl xl:mr-24 z-[100]">
          <Link to={"/"}>
            <li className="cursor-pointer hover:scale-105 hover:text-[#dbf01f] duration-200">
              Home
            </li>
          </Link>
          {isAuthenticated && (
            <>
              <Link to={"/profile"}>
                <li className="cursor-pointer hover:scale-105 hover:text-[#dbf01f] duration-200">
                  Profile
                </li>
              </Link>
              <li
                className="cursor-pointer hover:scale-105 hover:text-[#dbf01f] duration-200"
                onClick={logout}
              >
                Logout
              </li>
            </>
          )}
          {!isAuthenticated && (
            <>
              <Link to={"/login"}>
                <li className="cursor-pointer hover:scale-105 hover:text-[#dbf01f] duration-200">
                  Login
                </li>
              </Link>
              <Link to={"/register"}>
                <li className="cursor-pointer hover:scale-105 hover:text-[#dbf01f] duration-200">
                  Register
                </li>
              </Link>
            </>
          )}
        </ul>
        <Cart productsInCart={productsInCart}  />
      </nav>
    </>
  );
};

export default Navbar;
