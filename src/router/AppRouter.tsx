import { Routes, Route } from "react-router-dom";
import { Navbar } from "../ui/Navbar";
import { ShoppingCart } from "../products/components/ShoppingCart";
import { ProductRoutes } from "../products/routes/ProductRoutes";
import { OrderRoutes } from "../orders/routes/OrderRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <ShoppingCart />
      <Routes>
        <Route path="/*" element={<ProductRoutes />} />
        <Route path="orders/*" element={<OrderRoutes />} />
        <Route path="my-account/*" element={<AuthRoutes />} />
      </Routes>
    </>
  );
};
