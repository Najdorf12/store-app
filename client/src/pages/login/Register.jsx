import imgLogo from "/home4.png";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./login.css";

const Register = () => {
  const { handleSubmit, register, formState:{ errors } } = useForm();
  const submit = (data) => {
    console.log(data);
    /*  axios
           .post("https://e-commerce-api-v2.academlo.tech/api/v1/users/login",data)
           .then(resp => {
              localStorage.setItem("token", resp.data.token)
              navigate("/")
           })
           .catch(error =>{
              console.error(error)
              if(error.response.status === 401){
                  alert("Necesitas estar registrado")
              }
           }) */
  };
  return (
    <>
      <main className="bg-[#000000] w-full  flex justify-center items-center py-20 relative lg:pt-28">
      <picture className="absolute w-32 bottom-0 mt-4 md:right-0 md:mr-10 xl:mr-20 md:w-44 lg:w-72">
          <img src={imgLogo} alt="" />
        </picture>
        <form onSubmit={handleSubmit(submit)} className="form">
          <p className="title">Register </p>
          <p className="message">Signup now and get full access to our app. </p>
          <div className="w-full gap-6 flex">
            <label>
              <input
                required=""
                placeholder=""
                type="text"
                className="input"
                {...register("name")}
              />
              <span>Name</span>
            </label>

            <label className="relative">
              <input
                required=""
                placeholder=""
                type="text"
                className="input"
                {...register("username", {
                    required:{
                        value:true,
                        message: "Username is required"
                    }
                })}
              />
              <span>Username</span>
               <p className="error absolute right-0 top-0 m-2 text-base font-semibold text-red-700 "> {errors.username?.message} </p> 
            </label>
          </div>

          <label className="relative">
            <input required="" placeholder="" type="email" className="input" {...register("email", {
                    required:{
                        value:true,
                        message: "Email is required"
                    }
                })}/>
            <span>Email</span>
           <p className="error absolute right-0 top-0 m-2 text-base font-semibold text-red-700 "> {errors.email?.message} </p> 
          </label>

          <label className="relative">
            <input
              required=""
              placeholder=""
              type="password"
              className="input"
              {...register("password", {
                required:{
                    value: true,
                    message: "Password is required"
                }
              })}
            />
            <span>Password</span>
             <p className="error absolute right-0 top-0 m-2 text-base font-semibold text-red-700 "> {errors.password?.message} </p> 
          </label>
          <label>
            <input
              required=""
              placeholder=""
              type="password"
              className="input"
            />
            <span>Confirm password</span>
          </label>
          <button type="submit" className="submit">
            Submit
          </button>
          <p className="signin">
            Already have an acount ?<Link to="/login"> Signin</Link>
          </p>
        </form>
      </main>
    </>
  );
};

export default Register;
