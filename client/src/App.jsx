
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Profile from "./pages/Profile";
import Loader from "./components/Loading";
import FormProduct from "./pages/FormProduct";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/products/admin" element={<FormProduct/>} />
        </Route>
      </Routes>

      {isLoading && <Loader />}
    </BrowserRouter>
  );
};

export default App;
