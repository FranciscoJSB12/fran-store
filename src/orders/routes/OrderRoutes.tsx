import { Routes, Route } from "react-router-dom";
import { MyOrders } from "../pages/MyOrders";
import { LastOrder } from "../pages/LastOrder";

export const OrderRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<MyOrders />} />
        <Route path="/last" element={<LastOrder />} />
      </Routes>
    </>
  );
};
