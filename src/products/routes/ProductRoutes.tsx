import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import MyOrder from "../../orders/pages/MyOrder";

export const ProductRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/clothes" element={<Home />} />
        <Route path="/electronics" element={<Home />} />
        <Route path="/furniture" element={<Home />} />
        <Route path="/toys" element={<Home />} />
        <Route path="/others" element={<Home />} />
        <Route path="/my-order" element={<MyOrder />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
