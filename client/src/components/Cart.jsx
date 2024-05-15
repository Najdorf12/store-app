import imgCartProduct from "/images/photos/jacket1.jpeg";
import imgCart from "/cart.png";
import axios from "../api/axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductCartThunk,
  deleteProductCartThunk,
} from "../store/slices/cart";

const Cart = ({ productsInCart }) => {
  const [active, setActive] = useState(false);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const deleteProductCart = (data) => {
    dispatch(deleteProductCartThunk(cart?._id, data));
  };

  return (
    <>
      {isAuthenticated && (
        <>
          {" "}
          <button
            onClick={() => setActive(!active)}
            className="fixed max-w-12 lg:max-w-[60px] mt-4 mr-5 z-[100] cursor-pointer hover:scale-105  duration-200 right-0 lg:mt-5 lg:mr-9"
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
        <section className="bg-[rgb(0,0,0,.9)] w-full lg:w-2/5 h-screen z-[150] flex flex-col justify-start items-center pt-32 pb-32 px-2 lg:px-6 overflow-y-scroll">
          <h2 className="text-2xl lg:text-3xl font-normal font-title text-[#1a8e79] ">
            Lorem Impsum
          </h2>
          {productsInCart
            ? productsInCart?.map((product, i) => (
                <div
                  key={i}
                  className="relative bg-zinc-700 w-full rounded-xl h-32 lg:h-40 mt-6 flex justify-center items-center"
                >
                  <picture className=" max-w-28 mr-2  sm:mr-4 lg:mr-6">
                    <img className="rounded-lg lg:w-full " src={imgCartProduct} alt="" />
                  </picture>
                  <article className="">
                    <p className="text-lg lg:text-xl font-text2 font-semibold text-zinc-300">
                      {product?.name}
                    </p>
                    <p className="mt-1 text-sm lg:text-lg font-text text-zinc-400 leading-6">
                      {product?.description}
                    </p>
                    <div className="flex gap-2 lg:gap-5 items-center mt-3">
                      <span className="font-text px-2 py-1 font-medium text-lg bg-zinc-900 md:text-2xl text-zinc-300 lg:px-4  tracking-wide rounded-lg">
                        $
                        {product?.price *
                          cart.products.find(
                            (producto) => producto?.productId === product?._id
                          )?.quantity}
                      </span>
                      <span className="text-white text-base md:text-xl  font-text bg-[#1a8e79] px-2 rounded-lg">
                        {
                          cart.products.find(
                            (producto) => producto?.productId === product?._id
                          )?.quantity
                        }
                        Items
                      </span>
                      <i
                        className="bx bx-plus-circle text-2xl lg:text-3xl text-[#dbf01f] cursor-pointer hover:scale-110 hover:text-zinc-900 duration-300"
                        onClick={() => {
                          const items = cart.products.find(
                            (producto) => producto?.productId === product?._id
                          )?.quantity;

                          dispatch(
                            addProductCartThunk(cart?._id, {
                              productId: product?._id,
                              quantity: items + 1,
                            })
                          );
                        }}
                      ></i>
                      <i
                        className="bx bx-minus-circle text-2xl lg:text-3xl text-[#dbf01f] cursor-pointer hover:scale-110 hover:text-zinc-900 duration-300"
                        onClick={() => {
                          const items = cart.products.find(
                            (producto) => producto?.productId === product?._id
                          )?.quantity;

                          if (items > 1)
                            dispatch(
                              addProductCartThunk(cart?._id, {
                                productId: product?._id,
                                quantity: items - 1,
                              })
                            );
                        }}
                      ></i>
                      <i
                        onClick={() =>
                          deleteProductCart({
                            data: { productId: product?._id },
                          })
                        }
                        className="bx bxs-trash-alt text-2xl lg:text-3xl text-[#dbf01f] cursor-pointer hover:scale-110 hover:text-zinc-900 duration-300"
                      ></i>
                    </div>
                  </article>
                </div>
              ))
            : null}
          <p className="font-text2 mt-10 bg-gray-200 py-2 px-6 rounded-lg text-lg font-medium lg:text-2xl lg:mt-16 border-4 border-[#1a8e79] ">
            TOTAL : ${" "}
            {productsInCart
              ? productsInCart
                  ?.map((product, i) => {
                    const cantidadProductos = cart.products?.find(
                      (producto) => producto?.productId === product?._id
                    )?.quantity;
                    const pricePerProducts = cantidadProductos * product?.price;
                    return pricePerProducts;
                  })
                  ?.reduce((a, b) => a + b, 0)
              : 0}
          </p>

          <button className="px-10 py-2 text-xl font-text2 font-semibold mt-8 bg-[#1a8e79] rounded-lg text-white lg:mt-12 border border-[#dbf01f] hover:scale-110   duration-300">
            BUY
          </button>
        </section>
      </div>
    </>
  );
};

export default Cart;
