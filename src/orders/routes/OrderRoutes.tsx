import { Routes, Route } from "react-router-dom";
import { MyOrder } from "../pages/MyOrder";
import { PrivateRoute } from "../../router/PrivateRoutes";

export const OrderRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <PrivateRoute>
              <MyOrder />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
