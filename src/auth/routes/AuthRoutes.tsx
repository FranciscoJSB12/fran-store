import { Routes, Route } from "react-router-dom";
import { Register } from "../pages/Register";
import { LogIn } from "../pages/LogIn";
import { MyAccount } from "../pages/MyAccount";
import { PrivateRoute } from "../../router/PrivateRoutes";
import { PublicRoute } from "../../router/PublicRoutes";

export const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="log-in"
          element={
            <PublicRoute>
              <LogIn />
            </PublicRoute>
          }
        />
        <Route
          path="my-account"
          element={
            <PrivateRoute>
              <MyAccount />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
