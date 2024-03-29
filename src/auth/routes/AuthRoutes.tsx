import { Routes, Route } from "react-router-dom";
import { MyAccount } from "../pages/MyAccount";

export const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<MyAccount />} />
      </Routes>
    </>
  );
};
