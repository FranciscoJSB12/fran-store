import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { ShoppingBagButton } from "../../ui/ShoppingCartButton";

export const ProductRoutes = () => {
  return (
    <>
      <ShoppingBagButton />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/clothes" element={<Home />} />
        <Route path="/electronics" element={<Home />} />
        <Route path="/furniture" element={<Home />} />
        <Route path="/toys" element={<Home />} />
        <Route path="/others" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
