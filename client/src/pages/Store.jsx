import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  getProductsThunk,
  getProductsByCategoryThunk,
  getProductsByNameThunk,
} from "../store/slices/products";
import Button from "../components/Button";
import { addProductCart } from "../store/slices/cart";

const Store = () => {
  const btnsStore = ["All", "T-shirt", "Jersey", "Jeans", "Shoes"];
  const [searchValue, setSearchValue] = useState("");

  const products = useSelector((state) => state.products);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  const search = () => {
     dispatch(getProductsByNameThunk(searchValue));
  };

  const searchByCategory = (e) => {
    if (e.target.innerText === "All") return dispatch(getProductsThunk());
    dispatch(getProductsByCategoryThunk(e.target.innerText));
  };
  
 
 
  return (
    <>
      <section
        id="store"
        className="w-full  bg-[#1a8e79] flex flex-col items-center pt-8 md:pt-28"
      >
        <h3 className="text-7xl text-gray-100 font-semibold font-text tracking-[.5rem] lg:text-9xl">
          <span
            style={{
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "1px #dbf01f",
            }}
          >
            S
          </span>
          TORE
        </h3>

        <div className="relative input-wrapper mt-10 lg:w-96 lg:mt-16">
          <input
            className="input-box"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <span className="underline"></span>
          <i
            value={searchValue}
            onClick={() => search()}
            className="bx bx-search-alt-2 rotate-90 absolute right-0 top-0 bottom-0 flex items-center text-4xl text-gray-200"
          ></i>
        </div>

        <section className="mt-16 flex flex-col gap-4 lg:mt-20 ">
          <ul className="flex flex-wrap justify-center items-center gap-3 lg:gap-6">
            {btnsStore.map((btn, i) => (
              <Button searchByCategory={searchByCategory} key={i} btn={btn} />
            ))}
          </ul>

          <div
            id="cards-container"
            className="mt-10 flex flex-wrap items-center justify-center gap-4 pb-24 lg:mt-20 lg:gap-6"
          >
            {products.map((product) => (
              <Card key={product._id} data={product} cartId={user.cart} />
            ))}
          </div>
        </section>
      </section>
    </>
  );
};
export default Store;
