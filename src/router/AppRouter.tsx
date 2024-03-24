import { Routes, Route } from "react-router-dom";
import Navbar from "../ui/components/Navbar";
import CheckoutSideMenu from "../ui/components/CheckoutSideMenu";
import { ProductRoutes } from "../products/routes/ProductRoutes";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <CheckoutSideMenu />
      <Routes>
        <Route path="/*" element={<ProductRoutes />} />
      </Routes>
    </>
  );
};
