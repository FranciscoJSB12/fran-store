import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store";

interface PrivateRouteType {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteType) => {
  const { isUserAuthenticated } = useAppSelector((state) => state.auth);
  return isUserAuthenticated ? children : <Navigate to="/" />;
};
