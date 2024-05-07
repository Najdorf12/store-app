import imgHome from "/home4.png";
import About from "./About";
import Store from "./Store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyTokenThunk } from "../store/slices/isAuthenticated";
import Cookies from "js-cookie";
import axios from "../api/axios";

const Home = () => {

  const user = useSelector(state => state.user);
 
  const dispatch = useDispatch();

   useEffect(() => {
    const cookies = Cookies.get();
    if (cookies.token) {
      dispatch(verifyTokenThunk())
    }
    console.log(user);
  }, []);

  return (
    <>
      <section
        id="home-wrapper"
        className="relative after:w-full h-screen bg-[#1a8e79]  overflow-hidden flex flex-col items-center justify-between"
      >
        <article className="z-10 absolute top-14 sm:top-5 md:-top-10 md:lg:tracking-[1.2rem] lg:-top-20 xl:-top-24 lg:tracking-[1.5rem]">
          <h1 className="font-bold mt-5  font-title text-[#ebebeb] text-[10rem]  sm:text-[16rem] md:text-[24rem] lg:text-[25rem]  xl:text-[34rem] 2xl:text-[36rem]">
            <span className="text-[#dbf01f]">P</span>RISM
            <span className="text-[#dbf01f]">A </span>
          </h1>
        </article>
        <picture className="z-40  max-w-fit">
          <img
            className="w-72  sm:w-[300px] lg:w-[340px] mt-44 xl:mt-52  xl:w-[410px]"
            src={imgHome}
            alt=""
          />
        </picture>

        <ul className="absolute right-0 bottom-0 text-4xl text-gray-200 flex justify-center items-center m-2 md:gap-3 sm:text-5xl lg:mr-32 lg:mb-8 z-10 lg:gap-6">
          <li>
            <i className="bx bxl-instagram cursor-pointer hover:scale-105 hover:text-[#dbf01f] duration-200"></i>
          </li>
          <li>
            <i className="bx bxl-facebook cursor-pointer hover:scale-105 hover:text-[#dbf01f] duration-200"></i>
          </li>
          <div className="w-24 h-1 rounded-sm bg-[#dbf01f] lg:w-28"></div>
        </ul>
      </section>
      <About />
      <Store />
    </>
  );
};
export default Home;
