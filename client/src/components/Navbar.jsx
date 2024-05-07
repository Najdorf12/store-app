import { Link, useNavigate } from "react-router-dom";
import imgCart from "/cart.png";
import imgCartProduct from "/home2.png";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticated } from "../store/slices/isAuthenticated";
import { useState } from "react";
import axios from "../api/axios";
import { setUser } from "../store/slices/user";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    axios
      .post("/auth/logout")
      .then((res) => {
        dispatch(setIsAuthenticated(false));
        dispatch(setUser(null));
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <nav className="w-full  absolute z-50 flex justify-end items-center gap-2 px-4 py-4 xl:px-8 ">
        <ul className="flex gap-4 mr-16 mt-4 font-semibold font-text2 text-gray-200 text-lg lg:mr-20 lg:gap-7 lg:text-xl xl:mr-24 z-[100]">
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
        {isAuthenticated && (
          <>
            {" "}
            <button
              onClick={() => setActive(!active)}
              className={`fixed max-w-12 lg:max-w-[60px] mt-4 z-[100] cursor-pointer hover:scale-105  duration-200`}
            >
              <img src={imgCart} alt="" />
            </button>
          </>
        )}

        <div
          className={`cart fixed w-full h-screen top-0 bottom-0 right-0 left-0 bg-[rgb(0,0,0,.8)] z-50 flex justify-end  ${
            active ? "scale-x-1" : "scale-x-0"
          }`}
        >
          <section className="bg-[rgb(0,0,0,.9)] w-full lg:w-2/5 h-screen z-[150] flex flex-col justify-start items-center pt-32 px-2 lg:px-6">
            <h2 className="text-2xl lg:text-3xl font-normal font-title text-[#1a8e79] ">
              Lorem Impsum
            </h2>

            <div className="bg-zinc-700 w-full rounded-xl h-32 lg:h-40 mt-6 flex justify-center items-center">
              <picture className=" max-w-32 ">
                <img className=" lg:w-full " src={imgCartProduct} alt="" />
              </picture>
              <article className="">
                <p className="text-lg lg:text-xl font-text2 font-semibold text-zinc-300">
                  Product 1
                </p>
                <p className="mt-1 text-sm lg:text-lg font-text text-zinc-400 leading-6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
                <div className="flex gap-3 lg:gap-5 items-center mt-3">
                  <span className="font-text py-[1px] px-3 font-semibold text-xl lg:text-3xl text-zinc-300 lg:mr-4 tracking-wide">
                    $124
                  </span>
                  <i className="bx bx-plus-circle text-2xl lg:text-3xl text-[#dbf01f] cursor-pointer hover:scale-110 hover:text-zinc-900 duration-300"></i>
                  <i className="bx bx-minus-circle text-2xl lg:text-3xl text-[#dbf01f] cursor-pointer hover:scale-110 hover:text-zinc-900 duration-300"></i>
                  <i className="bx bxs-trash-alt text-2xl lg:text-3xl text-[#dbf01f] cursor-pointer hover:scale-110 hover:text-zinc-900 duration-300"></i>
                </div>
              </article>
            </div>
          </section>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
