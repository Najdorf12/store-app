import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useSelector, useDispatch } from "react-redux";

const Profile = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const user = useSelector(state => state.user)
  console.log(isAuthenticated)
  useEffect(() => {
    if (isAuthenticated) {
      axios
        .get("/auth/profile")
        .then((res) => console.log(res.data))
        .catch((error) => console.error(error));
    }
  }, []);

  return (
    <section className="bg-zinc-900 w-full h-screen flex flex-col items-center justify-center">
      <h2 className="text-white font-semibold text-3xl">PROFILE</h2>
      <div className="py-4 px-2 text-lg font-semibold text-gray-200 flex flex-col gap-4 bg-zinc-700">
        <p>{user.username}</p>
        <p>{user.email}</p>
      </div>
    </section>
  );
};
export default Profile;
