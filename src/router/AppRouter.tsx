import { Routes, Route } from "react-router-dom";
import { Navbar } from "../ui/Navbar";
import { ProductRoutes } from "../products/routes/ProductRoutes";
import { OrderRoutes } from "../orders/routes/OrderRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="auth/*" element={<AuthRoutes />} />
        <Route path="my-order/*" element={<OrderRoutes />} />
        <Route path="/*" element={<ProductRoutes />} />
      </Routes>
    </>
  );
};
