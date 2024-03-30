import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteType {
  children: ReactNode;
}

export const PublicRoutes = ({ children }: PrivateRouteType) => {
  //Extraer del contexto si el usuario está autenticado o no
  return false ? children : <Navigate to="/home" />;
};
