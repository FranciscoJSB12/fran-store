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
        <Route path="/*" element={<ProductRoutes />} />
        <Route path="my-order/*" element={<OrderRoutes />} />
        <Route path="my-account/*" element={<AuthRoutes />} />
      </Routes>
    </>
  );
};
