import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import imgLogo from "/home4.png";
import axios from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/user";
import { useState, useEffect } from "react";

const Login = () => {
  const [loginError, setLoginError] = useState([]);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (loginError?.length > 0) {
      const timer = setTimeout(() => {
        setLoginError([]);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [loginError]);

  const submit = (data) => {
    axios
      .post("/auth/login", data)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setLoginError(error.response?.data);
      });
  };

  return (
    <>
      <main className="bg-[#000000] w-full flex justify-center items-center pt-24 pb-36 min-h-screen relative lg:h-screen lg:pt-44">
        <picture className="absolute w-32 bottom-0 mt-4 md:right-0 md:mr-10 xl:mr-20 md:w-44 lg:w-72">
          <img src={imgLogo} alt="" />
        </picture>
        <form
          onSubmit={handleSubmit(submit)}
          className="form lg:w-[580px] lg:gap-7 lg:px-8"
        >
          {loginError?.map((error, i) => (
            <div
              key={i}
              className="absolute bg-red-500 text-white text-base p-1 top-0 right-0 mr-1 rounded-md mt-12 lg:text-lg lg:-right-80"
            >
              <p> {error} </p>
            </div>
          ))}

          <p className="title">Login </p>
          <p className="message">Signup now and get full access to our app. </p>
          <label className="relative">
            <input
              required=""
              placeholder=""
              type="email"
              className="input"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
            />
            <span>Email</span>
            <p className="error absolute right-0 top-0 m-2 text-base font-semibold text-red-700 ">
              {" "}
              {errors.email?.message}{" "}
            </p>
          </label>

          <label className="relative">
            <input
              required=""
              placeholder=""
              type="password"
              className="input"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
            />
            <span>Password</span>
            <p className="error absolute right-0 top-0 m-2 text-base font-semibold text-red-700 ">
              {" "}
              {errors.password?.message}{" "}
            </p>
          </label>
          <button type="submit" className="submit">
            Submit
          </button>
          <p className="signin">
            Don't have an account yet?
            <Link to="/register"> Register</Link>
          </p>
        </form>
      </main>
    </>
  );
};

export default Login;
