import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useSelector, useDispatch } from "react-redux";

const Profile = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  
  const user = useSelector(state => state.user)
 
  
  useEffect(() => {
    if (isAuthenticated) {
      axios
        .get("/auth/profile")
        .then((res) => console.log(user))
        .catch((error) => console.error(error));
    }
  }, []);

  return (
    <section className="bg-zinc-900 w-full h-screen flex flex-col items-center justify-center">
      <h2 className="text-white font-semibold text-5xl -mt-2 font-title">PROFILE</h2>
      <div className="py-4 px-4 text-xl font-semibold text-gray-200 flex flex-col gap-4 rounded-lg bg-[#1a8e79] mt-6 font-text2">
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
      </div>
    </section>
  );
};
export default Profile;
