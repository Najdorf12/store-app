import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const user = useSelector((state) => state.user);
  console.log(user);

 if (user.username) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }  
}; 

export default ProtectedRoutes;
