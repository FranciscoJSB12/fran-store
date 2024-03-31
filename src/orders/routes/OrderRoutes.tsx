import { Routes, Route } from "react-router-dom";
import { MyOrder } from "../pages/MyOrder";

export const OrderRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<MyOrder />} />
      </Routes>
    </>
  );
};
