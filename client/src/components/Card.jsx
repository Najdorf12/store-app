import { useDispatch, useSelector } from "react-redux";
import imgStore from "/images/Jupiter.jpeg";
import { Link } from "react-router-dom";
import { addProductCartThunk } from "../store/slices/cart";
import { useEffect } from "react";

const Card = ({ data, cartId }) => {
  const { _id, name, description, price, category } = data;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      addProductCartThunk(cartId, {
        productId: _id,
        quantity: 1,
      })
    );
  };

  return (
    <>
      <div
        id="card"
        className="w-72 h-[480px] bg-[rgb(0,0,0,.5)] rounded-2xl text-white  font-text hover:scale-105 duration-500"
      >
        <picture>
          <img
            className="rounded-t-2xl rounded-tr-2xl "
            src={imgStore}
            alt=""
          />
        </picture>
        <article className="relative pt-4 px-3 flex flex-col gap-3">
          <h6 className="font-text text-2xl">{name}</h6>
          <p className="text-gray-400 text-xl font-text2">{category}</p>
          <div className="w-full my-2 px-4 h-[1px] bg-[#dbf01f]"></div>
          <span className="font-text2 text-2xl border border-[#dbf01f] bg-[#1a8e79] opacity-90  px-4 py-1 rounded-lg absolute right-0 mr-6 text-white">$ {price}</span>
          <div id="price" className="flex justify-between items-center ">
            <div className=" w-full flex gap-8 lg:gap-4 justify-center items-center">
              <Link to={`/products/${_id}`}>
                <button className="relative text-2xl lg:text-3xl font-medium border border-[#dbf01f]  py-1 px-2  text-gray-200 rounded lg hover:scale-110 duration-500 font-title">
                  SEE MORE
                </button>
              </Link>
              <button
                onClick={addToCart}
                className="relative text-2xl lg:text-3xl font-medium border border-[#dbf01f]  py-1 px-2  text-gray-200 rounded lg hover:scale-110 duration-500 font-title "
              >
                Add to Cart 
              </button>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};
export default Card;
