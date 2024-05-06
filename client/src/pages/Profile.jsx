import { useEffect } from "react";
import axios from "../api/axios";
import { useSelector, useDispatch } from "react-redux";

const Profile = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch();
  console.log(isAuthenticated)

  useEffect(() => {
    if (isAuthenticated) {
      axios
        .get("/auth/profile")
        .then((res) => console.log(res))
        .catch((error) => console.error(error));
    }
  }, []);

  return (
    <>
      <h2>PROFILE</h2>
    </>
  );
};
export default Profile;
