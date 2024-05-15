import imgProduct from "/images/Jupiter1.jpeg";
import imgHome4 from "/home4.png";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsByCategoryThunk } from "../store/slices/products";
import { addProductCartThunk, getCartThunk } from "../store/slices/cart";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const user = useSelector((state) => state.user);
  const allProducts = useSelector((state) => state.products);
  const [rate, setRate] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    getProductDetail();
    getCartThunk(id);
  }, []);
 
  const getProductDetail = () => {
    axios
      .get(`http://localhost:3000/api/products/${id}`)
      .then((res) => {
        setProductDetail(res.data);
        dispatch(getProductsByCategoryThunk(res.data.category));
      })
      .catch((error) => console.error(error));
  };

  const increment = () => {
    setRate(rate + 1);
  };
  const decrement = () => {
    if (rate > 1) setRate(rate - 1);
  };

  const addProduct = () => {
    dispatch(
      addProductCartThunk(user.cart, {
        productId: id,
        quantity: rate,
      })
    );
  };

  return (
    <>
      <section className="overflow-hidden relative w-full bg-[rgb(0,0,0)] flex flex-col justify-center items-center gap-4 pt-28 pb-56 lg:gap-0 lg:p-0 md:flex-row lg:h-screen">
        <article className=" z-10 flex flex-col justify-center items-center px-3 max-w-[460px] md:items-start md:pl-6">
          <h2
            style={{
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "1px",
            }}
            className="text-4xl text-center md:text-start tracking-[.3rem] font-text font-semibold text-zinc-400 sm:text-5xl lg:text-6xl lg:tracking-[.4rem]"
          >
            {productDetail.name}
          </h2>
          <p
            className="mt-8 text-base font-text2 font-medium  text-zinc-300 text-center sm:text-lg  md:text-start md:leading-6
          lg:text-lg lg:mt-10"
          >
            {productDetail.description}
          </p>
          <div className="w-[100%] mt-6  h-[1px] bg-[#dbf01f] self-start lg:mt-8"></div>

          <div
            id="price"
            className="flex justify-between items-center gap-6  lg:gap-12 mt-10"
          >
            <span className="font-text2 text-4xl text-zinc-100  xl:text-3xl lg:font-bold tracking-wider border border-[#dbf01f] px-3 py-1 lg:px-2 lg:py-2 rounded-lg">
              $ {productDetail.price}
            </span>
            <div className="flex justify-center items-center gap-4 ">
              <button
                onClick={increment}
                className="text-4xl lg:text-5xl lg:ml-14 text-[#1a8e79] hover:scale-105  duration-300 "
              >
                <i className="bx bx-plus-circle"></i>
              </button>
              <h2 className="text-2xl text-gray-400 text-center ">
                {rate} Items
              </h2>
              <button
                onClick={decrement}
                className="text-4xl lg:text-5xl  text-[#1a8e79] hover:scale-105 duration-300"
              >
                <i className="bx bx-minus-circle"></i>
              </button>
            </div>
          </div>
          <button
            onClick={addProduct}
            className="w-[140px] self-end mr-10 mt-4  lg:mr-6 lg:mt-5 bg-zinc-800 h-[40px] font-text flex items-center text-[#dbf01f]
        text-xl font-normal justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-[#dbf01f]  before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 hover:text-zinc-900 lg:text-2xl lg:w-[180px]"
          >
            Add to cart
          </button>
          <p className="mt-12 mb-3 text-lg font-semibold leading-6 text-gray-100 lg:text-2xl lg:mb-5">
            Similar Products
          </p>
          <section className="flex justify-center items-center  gap-6 lg:gap-8 ">
            {allProducts.map((product, i) => (
              <div
                key={i}
                className="flex flex-wrap hover:scale-110 duration-300"
              >
                <picture
                  onClick={()=>{ axios
                    .get(`http://localhost:3000/api/products/${product._id}`)
                    .then((res) => {
                      setProductDetail(res.data);
                      dispatch(getProductsByCategoryThunk(res.data.category));
                    })
                    .catch((error) => console.error(error));}}
                  className="flex flex-col justify-center items-center gap-2"
                >
                  <img
                    className="max-w-12 rounded-sm lg:max-w-14"
                    src={imgProduct}
                    alt=""
                  />
                  <h2 className="text-base text-gray-200 lg:text-lg">
                    {product.name}
                  </h2>
                </picture>
              </div>
            ))}
          </section>
        </article>

        <picture className="w-[80%] lg:w-[40%] z-30 flex items-center justify-center">
          <img
            className="w-full max-w-96 rounded-xl lg:max-w-[420px] shadow-md shadow-zinc-400"
            src={imgProduct}
            alt=""
          />
        </picture>

        <svg
          className="absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#1a8e79"
            fillOpacity=".9"
            d="M0,288L60,256C120,224,240,160,360,117.3C480,75,600,53,720,58.7C840,64,960,96,1080,96C1200,96,1320,64,1380,48L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <div className="flex flex-col justify-center items-center absolute w-36 bottom-0 right-0 mb-4 mr-3">
          <img src={imgHome4} alt="" />
          <p className="font-title text-4xl -mt-4 text-[#dbf01f] tracking-[.2rem]">
            PRISMA
          </p>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
