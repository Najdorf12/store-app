import { useDispatch, useSelector } from "react-redux";
import imgStore from "/images/Jupiter.jpeg";
import { Link } from "react-router-dom";
import { addProductCart } from "../store/slices/cart";
import { useEffect } from "react";

const Card = ({ data, cartId }) => {
  const { _id, name, description, price } = data;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      addProductCart(cartId, {
        productId: _id,
        quantity: 1,
      })
    );
  };

  return (
    <>
      <div
        id="card"
        className="w-72 h-[515px] bg-[rgb(0,0,0,.5)] rounded-2xl text-white  font-text hover:scale-105 duration-500"
      >
        <picture>
          <img
            className="rounded-t-2xl rounded-tr-2xl "
            src={imgStore}
            alt=""
          />
        </picture>
        <article className="py-3 px-4 flex flex-col gap-3">
          <h6 className="font-text text-2xl">{name}</h6>
          <p className="text-gray-400 text-base font-text">{description}</p>
          <div className="w-full mt-4 px-4 h-[1px] bg-[#dbf01f]"></div>
          <div id="price" className="flex justify-between items-center ">
            <span className="font-text text-3xl text-gray-200"> {price}</span>
            <div className="flex gap-3">
              <Link to={`/products/${_id}`}>
                <button className="text-5xl text-[#dbf01f] hover:scale-110 hover:rotate-45 duration-500">
                  <i className="bx bxs-right-arrow-circle"></i>
                </button>
              </Link>
              <button
                onClick={addToCart}
                className="text-5xl text-[#dbf01f] hover:scale-110 duration-500"
              >
                <i className="bx bx-plus-circle"></i>
              </button>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};
export default Card;
